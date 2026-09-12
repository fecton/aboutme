import { describe, expect, it } from "vitest";
import { experiences } from "@/data/experiences";
import { profile } from "@/data/profile";

const FORBIDDEN_OPENERS = /^(Led|Drove|Spearheaded|Championed)\b/;

function bullets(html: string): string[] {
	return [...html.matchAll(/<li>([\s\S]*?)<\/li>/g)].map((match) =>
		match[1].replace(/<[^>]+>/g, "").trim(),
	);
}

function isLuxoftOrMercedes(experience: (typeof experiences)[number]) {
	return /Luxoft|Mercedes/i.test(`${experience.company} ${experience.client}`);
}

describe("Experience claim verbs", () => {
	it("does not reopen Mercedes/Luxoft bullets with Led/Drove/Spearheaded", () => {
		const scoped = experiences.filter(isLuxoftOrMercedes);
		expect(scoped.length).toBeGreaterThanOrEqual(2);

		for (const experience of scoped) {
			const items = bullets(experience.description);
			expect(items.length).toBeGreaterThan(0);
			for (const bullet of items) {
				expect(bullet).not.toMatch(FORBIDDEN_OPENERS);
			}
		}
	});

	it("keeps the About bio as delivering, not leading, those migrations", () => {
		expect(profile.bio.experience).toMatch(
			/delivering infrastructure migrations/,
		);
		expect(profile.bio.experience).not.toMatch(
			/leading infrastructure migrations/,
		);
	});
});
