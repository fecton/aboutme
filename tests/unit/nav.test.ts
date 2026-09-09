import { describe, expect, it } from "vitest";
import { hireHref, navLinks } from "@/data/nav";

describe("primary nav", () => {
	it("keeps About Experience Resume Contact and omits Hire from chrome", () => {
		const labels: string[] = navLinks.map((link) => link.label);
		expect(labels).toEqual(["About", "Experience", "Resume", "Contact"]);
		expect(labels).not.toContain("Hire");
		expect(labels.some((label) => /privacy/i.test(label))).toBe(false);
		expect(labels.some((label) => /work|proof/i.test(label))).toBe(false);
	});

	it("keeps /hire live as an unlinked route", () => {
		expect(hireHref).toBe("/hire/");
		const hrefs: string[] = navLinks.map((link) => link.href);
		expect(hrefs).not.toContain(hireHref);
	});
});
