import { describe, expect, it } from "vitest";
import {
	HIRE_CONTACT_DISCLAIMER,
	hire,
	hirePageMeta,
} from "@/data/hire";
import { experiences } from "@/data/experiences";
import { profile } from "@/data/profile";
import { certificates } from "@/data/certificates";

const LOCKED_DISCLAIMER =
	"B2B inquiries only. I’ll use your message to reply and talk through a possible engagement (pre-contract). Details in the Privacy Policy. No obligation until we agree scope in writing.";

const FORBIDDEN_SKU = /genai|aiops|bedrock|llm|copilot/i;

const sourceOfTruth = [
	...experiences.map((exp) => `${exp.company} ${exp.client} ${exp.description}`),
	profile.subtitle,
	...profile.highlights.map((h) => `${h.number} ${h.label}`),
].join("\n");

describe("hire conversion copy", () => {
	it("locks the Copywriter hero, CTAs, and contact disclaimer", () => {
		expect(hire.availability).toBe("Available for Q4 2026 Projects");
		expect(hire.headline).toBe(
			"Hire DevOps that cuts cloud cost and keeps systems up.",
		);
		expect(hire.offer).toBe(
			"AWS & Kubernetes · B2B from the EU · Proof on the resume",
		);
		expect(hire.trustLine).toBe("B2B · GDPR · Poland (EU)");
		expect(hire.ctaPrimary).toBe("Let’s talk");
		expect(hire.ctaPrimaryHref).toBe("#contact");
		expect(hire.ctaSecondary).toBe("See full resume");
		expect(hire.ctaSecondaryHref).toBe("/");
		expect(HIRE_CONTACT_DISCLAIMER).toBe(LOCKED_DISCLAIMER);
		expect(
			`${hire.contactDisclaimerBefore}${hire.contactDisclaimerLink}${hire.contactDisclaimerAfter}`,
		).toBe(LOCKED_DISCLAIMER);
		expect(hire.privacyPolicyHref).toBe("/privacy-policy");
		expect(hire.contactCtaLabel).toBe("Let’s talk");
	});

	it("ships three AWS-first packages with the locked Copywriter strings", () => {
		expect(hire.packages).toHaveLength(3);
		expect(hire.packages.map((pkg) => pkg.title)).toEqual([
			"Cloud cost & reliability audit",
			"IaC & Kubernetes platforms",
			"CI/CD & observability",
		]);
		expect(hire.packages.map((pkg) => pkg.bestFor)).toEqual([
			"teams bleeding spend or flying blind on HA/monitoring",
			"Terraform/EKS (or ECS) delivery and migrations",
			"pipeline + golden-signals maturity",
		]);
		expect(hire.packages[0].deliverables).toBe(
			"Cost Explorer + Savings Plans/rightsizing; HA & monitoring gap review; prioritized quick wins with $ or risk impact",
		);
		expect(hire.packages[0].footnote).toBe(
			"Outcomes are case-study style — not guaranteed %.",
		);
		expect(hire.packages[1].deliverables).toBe(
			"Terraform/Terragrunt (TFE migration proof); EKS and/or ECS; HA (multi-AZ, ingress/LB, backup/restore)",
		);
		expect(hire.packages[1].credentials).toBe("Terraform Assoc · CKA · SAA");
		expect(hire.packages[2].deliverables).toBe(
			"build/test/deploy + IaC gates; Grafana/Prometheus/CloudWatch + OpenTelemetry; runbook-ready dashboards",
		);
		expect(hire.packages[2].footnote).toBe("Tools used, not productized SKUs.");

		for (const pkg of hire.packages) {
			const blob = `${pkg.title} ${pkg.deliverables} ${pkg.bestFor} ${pkg.footnote ?? ""} ${pkg.credentials ?? ""}`;
			expect(blob).not.toMatch(FORBIDDEN_SKU);
			expect(pkg.ctaLabel).toBe("Let’s talk");
			expect(pkg.ctaHref).toBe("#contact");
			expect(pkg.bestForLabel).toBe("Best for");
		}
	});

	it("deep-links locked proof teasers to the resume experience section", () => {
		expect(hire.proofTeasers.map((teaser) => teaser.line)).toEqual([
			"TFE migration in ~1 mo vs 3 planned (Luxoft / Mercedes)",
			"Network HA redesign — ~70% fewer incidents (scoped)",
			"Cloud cost cut — up to 50% (via Luxoft engagements)",
		]);

		for (const teaser of hire.proofTeasers) {
			expect(teaser.href).toBe("/#experience");
			expect(teaser.linkLabel).toBe("View on resume");
			expect(teaser.line).not.toMatch(FORBIDDEN_SKU);
		}

		expect(sourceOfTruth).toContain("70%");
		expect(sourceOfTruth).toContain("50%");
		expect(sourceOfTruth).toContain("Luxoft");
		expect(sourceOfTruth).toMatch(/1 month instead of 3 months/);
	});

	it("lists CKA, Terraform Associate, and AWS SAA badges that point at certifications", () => {
		expect(hire.badges.map((badge) => badge.label)).toEqual([
			"CKA",
			"Terraform Associate",
			"AWS SAA",
		]);
		for (const badge of hire.badges) {
			expect(badge.href).toBe("/#certifications");
		}

		const earnedTitles = certificates
			.filter((cert) => cert.link)
			.map((cert) => cert.title)
			.join(" ");
		expect(earnedTitles).toMatch(/Certified Kubernetes Administrator/);
		expect(earnedTitles).toMatch(/Terraform Associate/);
		expect(earnedTitles).toMatch(/Solutions Architect - Associate/);
	});

	it("keeps conversion metadata in the SEO length band", () => {
		expect(hirePageMeta.title).toMatch(/Hire/);
		expect(hirePageMeta.description.length).toBeGreaterThanOrEqual(120);
		expect(hirePageMeta.description.length).toBeLessThanOrEqual(170);
	});
});
