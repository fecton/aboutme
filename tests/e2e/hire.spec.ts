import { test, expect, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { hire, HIRE_CONTACT_DISCLAIMER } from "../../src/data/hire";

async function openHire(page: Page) {
	await page.goto("/hire/");
	await page.evaluate(() => localStorage.setItem("cookie-consent", "rejected"));
	await page.reload();
}

test.describe("hire conversion page", () => {
	test("renders the four-block wire on desktop and mobile", async ({ page }) => {
		await openHire(page);

		await expect(page.locator("nav")).toBeVisible();
		await expect(page.locator("footer")).toBeVisible();

		await expect(page.getByText(hire.availability)).toBeVisible();
		await expect(page.getByRole("heading", { level: 1 })).toHaveText(hire.headline);
		await expect(page.getByText(hire.offer)).toBeVisible();

		const heroTalk = page.getByRole("link", { name: hire.ctaPrimary }).first();
		await expect(heroTalk).toBeVisible();
		await expect(heroTalk).toHaveAttribute("href", "#contact");

		const seeResume = page.getByRole("link", { name: hire.ctaSecondary });
		await expect(seeResume).toBeVisible();
		await expect(seeResume).toHaveAttribute("href", /\/$/);

		for (const pkg of hire.packages) {
			const card = page.getByRole("heading", { level: 3, name: pkg.title }).locator("..");
			await expect(card.getByText(pkg.pitch)).toBeVisible();
			await expect(card.getByText(new RegExp(`${pkg.bestForLabel}\\.`))).toBeVisible();
			await expect(card.getByText(/not a .+ guarantee/i)).toBeVisible();
			await expect(card.getByRole("link", { name: pkg.ctaLabel })).toHaveAttribute(
				"href",
				"#contact",
			);
		}

		for (const teaser of hire.proofTeasers) {
			await expect(page.getByText(teaser.line)).toBeVisible();
		}
		const viewLinks = page.getByRole("link", { name: "View on resume" });
		await expect(viewLinks).toHaveCount(hire.proofTeasers.length);
		await expect(viewLinks.first()).toHaveAttribute("href", /\/#experience/);

		for (const badge of hire.badges) {
			await expect(page.getByRole("link", { name: badge.label })).toBeVisible();
		}

		const contact = page.locator("#contact");
		await expect(
			contact.getByRole("heading", { level: 2, name: hire.contactHeading }),
		).toBeVisible();
		await expect(contact.getByText(HIRE_CONTACT_DISCLAIMER)).toBeVisible();
		await expect(
			contact.getByRole("link", { name: hire.contactDisclaimerLink }),
		).toHaveAttribute("href", /\/privacy-policy\/?/);
		await expect(contact.getByRole("link", { name: hire.contactCtaLabel })).toHaveAttribute(
			"href",
			/^mailto:/,
		);

		await heroTalk.click();
		await expect(
			contact.getByRole("heading", { level: 2, name: hire.contactHeading }),
		).toBeVisible();
	});

	test("keeps resume-first nav and exposes Hire in the footer", async ({ page }) => {
		await openHire(page);

		const nav = page.locator("nav");
		const menuButton = page.getByRole("button", { name: /Open menu/i });
		if (await menuButton.isVisible()) {
			await menuButton.click();
		}

		await expect(nav.getByRole("link", { name: "About" })).toBeVisible();
		await expect(nav.getByRole("link", { name: "Experience" })).toBeVisible();
		await expect(nav.getByRole("link", { name: "Resume" })).toBeVisible();
		await expect(nav.getByRole("link", { name: "Contact" })).toBeVisible();
		await expect(nav.getByRole("link", { name: "Hire" })).toHaveCount(0);
		await expect(nav.getByRole("link", { name: "Privacy" })).toHaveCount(0);
		await expect(page.locator("footer").getByRole("link", { name: "Hire" })).toHaveAttribute(
			"href",
			/\/hire\/?/,
		);
	});

	test("stacks package cards and uses full-width primary CTAs on mobile", async ({
		page,
	}, testInfo) => {
		test.skip(
			!testInfo.project.name.includes("mobile"),
			"Mobile stacking is asserted on the Pixel project",
		);

		await openHire(page);

		const titles = hire.packages.map((pkg) =>
			page.getByRole("heading", { level: 3, name: pkg.title }),
		);
		const boxes = [];
		for (const title of titles) {
			const box = await title.boundingBox();
			expect(box).toBeTruthy();
			boxes.push(box!);
		}
		expect(boxes[1]!.y).toBeGreaterThan(boxes[0]!.y + boxes[0]!.height - 1);
		expect(boxes[2]!.y).toBeGreaterThan(boxes[1]!.y + boxes[1]!.height - 1);

		const heroTalk = page.getByRole("link", { name: hire.ctaPrimary }).first();
		const talkBox = await heroTalk.boundingBox();
		const viewport = page.viewportSize();
		expect(talkBox).toBeTruthy();
		expect(viewport).toBeTruthy();
		expect(talkBox!.width).toBeGreaterThan(viewport!.width * 0.7);
	});

	test("has no serious or critical axe violations", async ({ page }) => {
		await openHire(page);

		const results = await new AxeBuilder({ page })
			.withTags(["wcag2a", "wcag2aa"])
			.analyze();

		const seriousOrCritical = results.violations.filter((v) =>
			["serious", "critical"].includes(v.impact ?? ""),
		);
		expect(
			seriousOrCritical,
			JSON.stringify(seriousOrCritical, null, 2),
		).toEqual([]);
	});
});
