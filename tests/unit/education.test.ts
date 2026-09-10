import { describe, expect, it } from "vitest";
import {
	DIPLOMA_LAB_BLURB,
	DIPLOMA_LAB_DOCS_URL,
	DIPLOMA_LAB_ORG_URL,
	educations,
} from "@/data/education";
import { experiences } from "@/data/experiences";
import { hire } from "@/data/hire";
import { profile } from "@/data/profile";

const lab = educations.find(
	(edu) => edu.university_link === DIPLOMA_LAB_ORG_URL,
);

describe("Academic/labs diploma org", () => {
	it("ships the locked Practices blurb on the Education lab entry", () => {
		expect(DIPLOMA_LAB_BLURB).toBe(
			"Diploma project (KhAI): GCP/GKE platform lab with layered Terraform (init → in-cluster ops → config) and observability — skills demonstration, not a client engagement.",
		);
		expect(lab).toBeDefined();
		expect(lab?.specialty_title).toBe("GCP/GKE platform lab");
		expect(lab?.university_title).toBe("devops-skill-demonstration");
		expect(lab?.university_link).toBe(
			"https://github.com/devops-skill-demonstration",
		);
		expect(lab?.badge).toBe("Academic lab");
		expect(lab?.description).toContain(DIPLOMA_LAB_BLURB);
		expect(lab?.description).toContain(DIPLOMA_LAB_DOCS_URL);
		expect(lab?.description).toMatch(/GitHub repository: 0-documentation/);
		expect(lab?.description).not.toMatch(/Senior DevOps/i);
		expect(lab?.description).not.toMatch(/%/);
		expect(lab?.description).not.toMatch(
			/Mercedes|JPMorgan|JPMC|Luxoft|Geniusee/i,
		);
	});

	it("is not Experience-peer copy and is not a /hire package", () => {
		expect(lab).toBeDefined();

		const experienceBlob = experiences
			.map(
				(exp) =>
					`${exp.position} ${exp.company} ${exp.client} ${exp.description}`,
			)
			.join("\n");
		expect(experienceBlob).not.toContain(DIPLOMA_LAB_BLURB);
		expect(experienceBlob).not.toContain("devops-skill-demonstration");
		expect(experienceBlob).not.toContain(DIPLOMA_LAB_ORG_URL);

		const hireBlob = JSON.stringify(hire);
		expect(hireBlob).not.toContain("devops-skill-demonstration");
		expect(hireBlob).not.toContain(DIPLOMA_LAB_BLURB);
		expect(hireBlob).not.toContain(DIPLOMA_LAB_DOCS_URL);
		expect(hire.packages.map((pkg) => pkg.title).join("\n")).not.toMatch(
			/GCP\/GKE platform lab/i,
		);

		const aboutBlob = `${profile.bio.intro} ${profile.bio.experience} ${profile.bio.passion}`;
		expect(aboutBlob).not.toContain("devops-skill-demonstration");
		expect(aboutBlob).not.toContain(DIPLOMA_LAB_BLURB);
	});

	it("keeps career proof AWS-first outside the GCP diploma lab", () => {
		expect(profile.subtitle).toMatch(/AWS/);
		expect(profile.skills.some((cat) => cat.primary?.includes("AWS"))).toBe(
			true,
		);
		expect(lab?.disciplines).toMatch(/GCP/);
		expect(lab?.disciplines).not.toMatch(/\bAWS\b/);
	});
});
