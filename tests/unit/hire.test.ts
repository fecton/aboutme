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
	it("keeps the locked contact disclaimer exact", () => {
		expect(HIRE_CONTACT_DISCLAIMER).toBe(LOCKED_DISCLAIMER);
		expect(
			`${hire.contactDisclaimerBefore}${hire.contactDisclaimerLink}${hire.contactDisclaimerAfter}`,
		).toBe(LOCKED_DISCLAIMER);
		expect(hire.privacyPolicyHref).toBe("/privacy-policy");
	});

	it("ships three AWS-first packages with no-guarantee notes and no GenAI SKU", () => {
		expect(hire.packages).toHaveLength(3);
		expect(hire.packages.map((pkg) => pkg.title)).toEqual([
			"Cloud cost & reliability audit",
			"IaC & Kubernetes platform",
			"CI/CD & observability",
		]);

		for (const pkg of hire.packages) {
			const blob = `${pkg.title} ${pkg.pitch} ${pkg.bestFor} ${pkg.footnote}`;
			expect(blob).toMatch(/AWS|EKS|Terraform|Grafana/i);
			expect(pkg.footnote.toLowerCase()).toContain("not a");
			expect(pkg.footnote.toLowerCase()).toContain("guarantee");
			expect(blob).not.toMatch(FORBIDDEN_SKU);
			expect(pkg.ctaLabel).toBe("Let’s talk");
			expect(pkg.ctaHref).toBe("#contact");
			expect(pkg.bestForLabel).toBe("Best for");
		}

		const finops = hire.packages[0];
		expect(finops.footnote.toLowerCase()).toContain("not a savings");
		expect(finops.pitch.toLowerCase()).not.toMatch(
			/cut your (aws )?bill|guaranteed savings|will save/,
		);
	});

	it("deep-links proof teasers to the resume experience section with SoT-safe metrics", () => {
		expect(hire.proofTeasers.length).toBeGreaterThanOrEqual(2);
		expect(hire.proofTeasers.length).toBeLessThanOrEqual(4);

		for (const teaser of hire.proofTeasers) {
			expect(teaser.href).toBe("/#experience");
			expect(teaser.linkLabel).toBe("View on resume");
			expect(teaser.line).not.toMatch(FORBIDDEN_SKU);

			const percents = teaser.line.match(/\d+%/g) ?? [];
			for (const percent of percents) {
				expect(sourceOfTruth).toContain(percent);
			}
		}

		expect(sourceOfTruth).toContain("Luxoft");
		expect(hire.proofTeasers.some((t) => /Luxoft/i.test(t.line))).toBe(true);
		expect(hire.proofTeasers.some((t) => /Mercedes/i.test(t.line))).toBe(true);
	});

	it("lists CKA, Terraform, and SAA badges that point at resume certifications", () => {
		expect(hire.badges.map((badge) => badge.label)).toEqual([
			"CKA",
			"Terraform",
			"SAA",
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

	it("aligns the offer with the resume hero and keeps metadata conversion-focused", () => {
		expect(hire.availability).toBe(profile.availability);
		expect(hire.headline).toBe(profile.headline);
		expect(hire.offer).toMatch(/AWS & Kubernetes B2B from the EU/);
		expect(hire.ctaPrimary).toBe("Let’s talk");
		expect(hire.ctaPrimaryHref).toBe("#contact");
		expect(hire.ctaSecondary).toBe("See full resume");
		expect(hire.ctaSecondaryHref).toBe("/");
		expect(hirePageMeta.title).toMatch(/Hire/);
		expect(hirePageMeta.description.length).toBeGreaterThanOrEqual(120);
		expect(hirePageMeta.description.length).toBeLessThanOrEqual(170);
	});
});
