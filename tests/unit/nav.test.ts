import { describe, expect, it } from "vitest";
import { hireHref, navLinks } from "@/data/nav";

describe("primary nav", () => {
	it("adds Hire between Resume and Contact at equal weight", () => {
		expect(navLinks.map((link) => link.label)).toEqual([
			"About",
			"Experience",
			"Resume",
			"Hire",
			"Contact",
		]);
		expect(navLinks.find((link) => link.label === "Hire")?.href).toBe("/hire/");
		expect(hireHref).toBe("/hire/");
		expect(navLinks.some((link) => /privacy/i.test(link.label))).toBe(false);
	});
});
