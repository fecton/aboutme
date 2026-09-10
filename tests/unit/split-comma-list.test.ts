import { describe, expect, it } from "vitest";
import { splitCommaListRespectingParens } from "@/lib/split-comma-list";

describe("splitCommaListRespectingParens", () => {
	it("splits a flat comma list and trims segments", () => {
		expect(
			splitCommaListRespectingParens("Terraform, Kubernetes, Docker"),
		).toEqual(["Terraform", "Kubernetes", "Docker"]);
	});

	it("does not split on commas inside parentheses", () => {
		expect(
			splitCommaListRespectingParens("AWS (EC2, ECS, S3), Terraform, Grafana"),
		).toEqual(["AWS (EC2, ECS, S3)", "Terraform", "Grafana"]);
	});

	it("respects nested parentheses", () => {
		expect(
			splitCommaListRespectingParens("Foo (bar (baz, qux), zap), Other"),
		).toEqual(["Foo (bar (baz, qux), zap)", "Other"]);
	});

	it("strips a trailing period from segments", () => {
		expect(splitCommaListRespectingParens("Terraform, Kubernetes.")).toEqual([
			"Terraform",
			"Kubernetes",
		]);
	});

	it("drops empty or whitespace-only segments", () => {
		expect(splitCommaListRespectingParens("Terraform, , Docker,   ")).toEqual([
			"Terraform",
			"Docker",
		]);
	});

	it("returns an empty array for blank input", () => {
		expect(splitCommaListRespectingParens("")).toEqual([]);
		expect(splitCommaListRespectingParens("   ")).toEqual([]);
	});

	it("does not let extra closing parens drive depth negative", () => {
		expect(splitCommaListRespectingParens("Foo), Bar, Baz")).toEqual([
			"Foo)",
			"Bar",
			"Baz",
		]);
	});
});
