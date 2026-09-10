#!/usr/bin/env python3
"""Unit tests for the OSV HIGH/CRITICAL CI gate."""

from __future__ import annotations

import importlib.util
import json
import os
import sys
import tempfile
import unittest
from pathlib import Path
from unittest import mock

SCRIPT = (
	Path(__file__).resolve().parents[2]
	/ ".github"
	/ "scripts"
	/ "osv-fail-on-high-critical.py"
)

spec = importlib.util.spec_from_file_location("osv_fail", SCRIPT)
osv_fail = importlib.util.module_from_spec(spec)
assert spec.loader is not None
spec.loader.exec_module(osv_fail)


def package_result(
	*,
	name: str = "left-pad",
	version: str = "1.0.0",
	vulns: list[dict] | None = None,
	groups: list[dict] | None = None,
	source: str = "package-lock.json",
) -> dict:
	pkg: dict = {
		"package": {"name": name, "version": version, "ecosystem": "npm"},
	}
	if vulns is not None:
		pkg["vulnerabilities"] = vulns
	if groups is not None:
		pkg["groups"] = groups
	return {"results": [{"source": {"path": source}, "packages": [pkg]}]}


class ParseScoreTests(unittest.TestCase):
	def test_parses_numeric_values(self) -> None:
		self.assertEqual(osv_fail.parse_score("7.0"), 7.0)
		self.assertEqual(osv_fail.parse_score(9), 9.0)
		self.assertEqual(osv_fail.parse_score(0), 0.0)

	def test_rejects_missing_invalid_and_negative(self) -> None:
		self.assertIsNone(osv_fail.parse_score(None))
		self.assertIsNone(osv_fail.parse_score(""))
		self.assertIsNone(osv_fail.parse_score("not-a-score"))
		self.assertIsNone(osv_fail.parse_score(-0.1))
		self.assertIsNone(osv_fail.parse_score({}))


class BandTests(unittest.TestCase):
	def test_nvd_thresholds(self) -> None:
		self.assertEqual(osv_fail.band(9.0), "CRITICAL")
		self.assertEqual(osv_fail.band(8.9), "HIGH")
		self.assertEqual(osv_fail.band(7.0), "HIGH")
		self.assertEqual(osv_fail.band(6.9), "MEDIUM")
		self.assertEqual(osv_fail.band(4.0), "MEDIUM")
		self.assertEqual(osv_fail.band(3.9), "LOW")
		self.assertEqual(osv_fail.band(0.1), "LOW")
		self.assertEqual(osv_fail.band(0.0), "UNKNOWN")


class GhsaLabelTests(unittest.TestCase):
	def test_uppercases_string_severity(self) -> None:
		self.assertEqual(
			osv_fail.ghsa_label({"database_specific": {"severity": "high"}}),
			"HIGH",
		)

	def test_empty_when_missing_or_not_a_string(self) -> None:
		self.assertEqual(osv_fail.ghsa_label({}), "")
		self.assertEqual(osv_fail.ghsa_label({"database_specific": None}), "")
		self.assertEqual(
			osv_fail.ghsa_label({"database_specific": {"severity": 9}}),
			"",
		)


class CollectAndGateTests(unittest.TestCase):
	def test_cvss_high_fails_even_if_ghsa_is_medium(self) -> None:
		data = package_result(
			vulns=[
				{
					"id": "GHSA-aaaa-bbbb-cccc",
					"summary": "bad thing",
					"database_specific": {"severity": "MEDIUM"},
				}
			],
			groups=[{"ids": ["GHSA-aaaa-bbbb-cccc"], "max_severity": "7.0"}],
		)
		findings = osv_fail.collect_findings(data)
		self.assertEqual(len(findings), 1)
		self.assertEqual(findings[0]["band"], "HIGH")
		self.assertTrue(osv_fail.is_gated(findings[0]))

	def test_cvss_medium_does_not_fail_even_if_ghsa_is_high(self) -> None:
		data = package_result(
			vulns=[
				{
					"id": "GHSA-dddd-eeee-ffff",
					"database_specific": {"severity": "HIGH"},
				}
			],
			groups=[{"ids": ["GHSA-dddd-eeee-ffff"], "max_severity": "6.9"}],
		)
		finding = osv_fail.collect_findings(data)[0]
		self.assertEqual(finding["band"], "MEDIUM")
		self.assertFalse(osv_fail.is_gated(finding))

	def test_missing_score_falls_back_to_ghsa_high(self) -> None:
		data = package_result(
			vulns=[
				{
					"id": "GHSA-1111-2222-3333",
					"summary": "unscored high",
					"database_specific": {"severity": "HIGH"},
				}
			],
			groups=[{"ids": ["GHSA-1111-2222-3333"], "max_severity": ""}],
		)
		finding = osv_fail.collect_findings(data)[0]
		self.assertIsNone(finding["score"])
		self.assertEqual(finding["band"], "HIGH")
		self.assertTrue(osv_fail.is_gated(finding))

	def test_unscored_without_fail_label_does_not_fail(self) -> None:
		data = package_result(
			vulns=[{"id": "GHSA-unscored", "database_specific": {"severity": "LOW"}}],
			groups=[{"ids": ["GHSA-unscored"]}],
		)
		finding = osv_fail.collect_findings(data)[0]
		self.assertEqual(finding["band"], "UNKNOWN")
		self.assertFalse(osv_fail.is_gated(finding))

	def test_synthesizes_groups_when_only_vulnerabilities_exist(self) -> None:
		data = package_result(
			vulns=[
				{
					"id": "GHSA-only-vulns",
					"summary": "from vulns list",
					"database_specific": {"severity": "CRITICAL"},
				}
			],
			groups=None,
		)
		findings = osv_fail.collect_findings(data)
		self.assertEqual(len(findings), 1)
		self.assertEqual(findings[0]["band"], "CRITICAL")
		self.assertEqual(findings[0]["summary"], "from vulns list")
		self.assertTrue(osv_fail.is_gated(findings[0]))

	def test_empty_results_are_not_gated(self) -> None:
		self.assertEqual(osv_fail.collect_findings({}), [])
		self.assertEqual(osv_fail.collect_findings({"results": None}), [])


class FormatFindingTests(unittest.TestCase):
	def test_truncates_long_summary_and_handles_missing_id(self) -> None:
		line = osv_fail.format_finding(
			{
				"ids": [],
				"package": "pkg",
				"version": "2.0.0",
				"score": None,
				"band": "UNKNOWN",
				"summary": "x" * 130,
			}
		)
		self.assertIn("(no id)", line)
		self.assertIn("CVSS  n/a", line)
		self.assertTrue(line.endswith("..."))
		self.assertLessEqual(len(line.split("  ")[-1]), 120)


class MainTests(unittest.TestCase):
	def test_usage_when_argv_wrong(self) -> None:
		with mock.patch.object(sys, "argv", ["osv-fail-on-high-critical.py"]):
			self.assertEqual(osv_fail.main(), 2)

	def test_missing_file_fails(self) -> None:
		with mock.patch.object(
			sys, "argv", ["osv-fail-on-high-critical.py", "missing.json"]
		):
			with mock.patch.dict(os.environ, {"SCAN_OUTCOME": "failure"}):
				self.assertEqual(osv_fail.main(), 1)

	def test_invalid_json_and_non_object_fail(self) -> None:
		with tempfile.TemporaryDirectory() as tmp:
			bad = Path(tmp) / "bad.json"
			bad.write_text("not-json", encoding="utf-8")
			with mock.patch.object(sys, "argv", ["gate.py", str(bad)]):
				self.assertEqual(osv_fail.main(), 1)

			arr = Path(tmp) / "arr.json"
			arr.write_text("[]", encoding="utf-8")
			with mock.patch.object(sys, "argv", ["gate.py", str(arr)]):
				self.assertEqual(osv_fail.main(), 1)

	def test_high_finding_fails_medium_passes(self) -> None:
		high = package_result(
			vulns=[{"id": "GHSA-high", "summary": "fail me"}],
			groups=[{"ids": ["GHSA-high"], "max_severity": "7.2"}],
		)
		medium = package_result(
			vulns=[{"id": "GHSA-med", "summary": "log only"}],
			groups=[{"ids": ["GHSA-med"], "max_severity": "5.0"}],
		)
		with tempfile.TemporaryDirectory() as tmp:
			high_path = Path(tmp) / "high.json"
			high_path.write_text(json.dumps(high), encoding="utf-8")
			with mock.patch.object(sys, "argv", ["gate.py", str(high_path)]):
				self.assertEqual(osv_fail.main(), 1)

			med_path = Path(tmp) / "med.json"
			med_path.write_text(json.dumps(medium), encoding="utf-8")
			with mock.patch.object(sys, "argv", ["gate.py", str(med_path)]):
				self.assertEqual(osv_fail.main(), 0)

			empty_path = Path(tmp) / "empty.json"
			empty_path.write_text(json.dumps({"results": []}), encoding="utf-8")
			with mock.patch.object(sys, "argv", ["gate.py", str(empty_path)]):
				self.assertEqual(osv_fail.main(), 0)


if __name__ == "__main__":
	unittest.main()
