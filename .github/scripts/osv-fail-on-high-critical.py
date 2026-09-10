#!/usr/bin/env python3
"""Fail CI when osv-scanner JSON includes HIGH or CRITICAL findings.

Threshold matches NVD CVSS v3 qualitative ratings used by osv-scanner's table
output: CRITICAL >= 9.0, HIGH >= 7.0. Medium and low findings are printed and
do not fail the job.

If groups[].max_severity is missing, fall back to GitHub's
database_specific.severity when it is HIGH or CRITICAL. Unscored findings
without those labels do not fail the job (they stay visible in the log).
"""

from __future__ import annotations

import json
import os
import sys
from typing import Any

HIGH_MIN = 7.0
CRITICAL_MIN = 9.0
GHSA_FAIL_LABELS = {"CRITICAL", "HIGH"}


def parse_score(value: Any) -> float | None:
	if value is None or value == "":
		return None
	try:
		score = float(value)
	except (TypeError, ValueError):
		return None
	if score < 0:
		return None
	return score


def band(score: float) -> str:
	if score >= CRITICAL_MIN:
		return "CRITICAL"
	if score >= HIGH_MIN:
		return "HIGH"
	if score >= 4.0:
		return "MEDIUM"
	if score > 0:
		return "LOW"
	return "UNKNOWN"


def ghsa_label(vuln: dict[str, Any]) -> str:
	db = vuln.get("database_specific") or {}
	label = db.get("severity")
	if isinstance(label, str):
		return label.upper()
	return ""


def collect_findings(data: dict[str, Any]) -> list[dict[str, Any]]:
	findings: list[dict[str, Any]] = []
	for result in data.get("results") or []:
		source = (result.get("source") or {}).get("path", "")
		for pkg in result.get("packages") or []:
			info = pkg.get("package") or {}
			name = info.get("name", "")
			version = info.get("version", "")
			ecosystem = info.get("ecosystem", "")
			vulns_by_id = {
				v.get("id"): v for v in (pkg.get("vulnerabilities") or []) if v.get("id")
			}
			groups = pkg.get("groups") or []
			if not groups and pkg.get("vulnerabilities"):
				groups = [{"ids": [v.get("id")], "max_severity": ""} for v in pkg["vulnerabilities"]]
			for group in groups:
				ids = [i for i in (group.get("ids") or []) if i]
				score = parse_score(group.get("max_severity"))
				label = band(score) if score is not None else "UNKNOWN"
				if score is None:
					for vid in ids:
						fallback = ghsa_label(vulns_by_id.get(vid, {}))
						if fallback in GHSA_FAIL_LABELS:
							label = fallback
							break
				summary = ""
				for vid in ids:
					summary = (vulns_by_id.get(vid) or {}).get("summary") or summary
					if summary:
						break
				findings.append(
					{
						"ids": ids,
						"package": name,
						"version": version,
						"ecosystem": ecosystem,
						"source": source,
						"score": score,
						"band": label,
						"summary": summary,
					}
				)
	return findings


def is_gated(finding: dict[str, Any]) -> bool:
	if finding["band"] in GHSA_FAIL_LABELS:
		return True
	score = finding["score"]
	return score is not None and score >= HIGH_MIN


def format_finding(finding: dict[str, Any]) -> str:
	ids = ", ".join(finding["ids"]) or "(no id)"
	score = "n/a" if finding["score"] is None else f"{finding['score']:.1f}"
	summary = finding["summary"].strip().replace("\n", " ")
	if len(summary) > 120:
		summary = summary[:117] + "..."
	line = (
		f"{finding['band']:8} CVSS {score:>4}  {finding['package']}@{finding['version']}"
		f"  {ids}"
	)
	if summary:
		line += f"  {summary}"
	return line


def main() -> int:
	if len(sys.argv) != 2:
		print("usage: osv-fail-on-high-critical.py <osv-results.json>", file=sys.stderr)
		return 2

	path = sys.argv[1]
	if not os.path.isfile(path):
		outcome = os.environ.get("SCAN_OUTCOME", "")
		print(
			f"osv-scanner did not write {path} (scan step outcome={outcome or 'unknown'}).",
			file=sys.stderr,
		)
		return 1

	with open(path, encoding="utf-8") as handle:
		try:
			data = json.load(handle)
		except json.JSONDecodeError as exc:
			print(f"osv-scanner results are not valid JSON: {exc}", file=sys.stderr)
			return 1

	if not isinstance(data, dict):
		print("osv-scanner results JSON must be an object.", file=sys.stderr)
		return 1

	findings = collect_findings(data)
	gated = [f for f in findings if is_gated(f)]
	informational = [f for f in findings if not is_gated(f)]

	counts: dict[str, int] = {"CRITICAL": 0, "HIGH": 0, "MEDIUM": 0, "LOW": 0, "UNKNOWN": 0}
	for finding in findings:
		counts[finding["band"]] = counts.get(finding["band"], 0) + 1

	print(
		"OSV-Scanner gate: fail on HIGH/CRITICAL (CVSS >= 7.0). "
		f"Findings: {counts['CRITICAL']} critical, {counts['HIGH']} high, "
		f"{counts['MEDIUM']} medium, {counts['LOW']} low, {counts['UNKNOWN']} unknown."
	)

	if informational:
		print("\nMedium/low/unknown (do not fail the job):")
		for finding in informational:
			print(f"  {format_finding(finding)}")

	if gated:
		print("\nHIGH/CRITICAL findings (failing the job):")
		for finding in gated:
			print(f"  {format_finding(finding)}")
		print(
			"\nFix with a lockfile bump or replace the parent package. "
			"Do not add osv-scanner.toml IgnoredVulns without a narrow, written reason."
		)
		return 1

	print("No HIGH or CRITICAL findings.")
	return 0


if __name__ == "__main__":
	sys.exit(main())
