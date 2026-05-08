import { test, expect, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// Verify a single element is rendered AND visible (not stuck behind a broken
// animation at opacity 0). The framer-motion bugs we kept hitting all looked
// fine to TS/lint but rendered with opacity:0 — this assertion catches them.
async function assertVisible(page: Page, selector: string, label: string) {
	const el = page.locator(selector).first();
	await expect(el, `${label} not in DOM`).toBeVisible();
	const opacity = await el.evaluate((node) => {
		return parseFloat(window.getComputedStyle(node).opacity);
	});
	expect(opacity, `${label} computed opacity is ${opacity}`).toBeGreaterThan(0.5);
}

test.describe("home page renders", () => {
	test("hero, navbar, and every bento card are visible", async ({ page }) => {
		await page.goto("/");
		// Dismiss the cookie banner so it doesn't overlay anything we measure.
		await page.evaluate(() => localStorage.setItem("cookie-consent", "rejected"));
		await page.reload();

		await assertVisible(page, "nav", "Navbar");
		await assertVisible(page, "h1", "Hero h1");
		await assertVisible(page, 'img[alt*="Andrii Lytvynenko"]', "Hero portrait");

		// Each bento section must render its first card visible.
		for (const heading of [
			"About Me",
			"Key Highlights",
			"Technical Skills",
			"Certifications",
			"Contact",
			"Languages",
			"Experience",
			"Education",
		]) {
			const h2 = page.getByRole("heading", { level: 2, name: heading });
			await expect(h2, `${heading} h2 missing`).toBeVisible();
		}

		// All articles must have non-zero opacity (catches the GlassCard bug).
		const invisibleArticles = await page.evaluate(() => {
			return Array.from(document.querySelectorAll("article")).filter(
				(a) => parseFloat(window.getComputedStyle(a).opacity) < 0.5,
			).length;
		});
		expect(invisibleArticles, "articles stuck at opacity 0").toBe(0);
	});

	test("hero CTAs link to resume page that renders an iframe", async ({ page }) => {
		await page.goto("/");
		await page.evaluate(() => localStorage.setItem("cookie-consent", "rejected"));
		await page.reload();

		// "View Resume" CTA in hero (visible on every viewport, unlike the nav link).
		const viewResume = page.getByRole("link", { name: "View Resume" });
		await expect(viewResume).toBeVisible();
		await viewResume.click();
		await expect(page).toHaveURL(/\/resume\/?$/);

		// Resume page must show the iframe AND a download fallback.
		await expect(page.locator("iframe")).toBeVisible();
		await expect(page.locator("a[download]")).toContainText(/Download/i);
	});
});

test.describe("subpages render with navigation", () => {
	// These pages have a real <h1>.
	for (const { path, h1 } of [
		{ path: "/privacy-policy/", h1: /Privacy Policy/i },
		{ path: "/cookie-policy/", h1: /Cookie Policy/i },
	]) {
		test(`${path} renders nav + footer + h1`, async ({ page }) => {
			await page.goto(path);
			await expect(page.locator("nav")).toBeVisible();
			await expect(page.locator("footer")).toBeVisible();
			await expect(page.locator("h1")).toContainText(h1);
		});
	}

	// Viewer pages don't have an <h1> — they're a back button + download CTA + iframe.
	for (const path of ["/viewer/diploma/", "/viewer/diploma-supplement/"]) {
		test(`${path} renders nav + footer + iframe + download`, async ({ page }) => {
			await page.goto(path);
			await expect(page.locator("nav")).toBeVisible();
			await expect(page.locator("footer")).toBeVisible();
			await expect(page.locator("iframe")).toBeVisible();
			await expect(page.locator("a[download]")).toBeVisible();
		});
	}

	test("404 page has navbar + footer (regression: pass-3)", async ({ page }) => {
		const response = await page.goto("/this-route-does-not-exist/", {
			waitUntil: "domcontentloaded",
		});
		// Static export serves 404.html for missing routes — status may be 200 from
		// `serve` but the page should still be the 404 component.
		expect(await page.locator("h1").textContent()).toContain("404");
		await expect(page.locator("nav")).toBeVisible();
		await expect(page.locator("footer")).toBeVisible();
	});
});

test.describe("accessibility", () => {
	test("home page has no serious or critical axe violations", async ({ page }) => {
		await page.goto("/");
		await page.evaluate(() => localStorage.setItem("cookie-consent", "rejected"));
		await page.reload();

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
