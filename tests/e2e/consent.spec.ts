import { test, expect, type Page } from "@playwright/test";

const GTM_SCRIPT = 'script[src*="googletagmanager.com/gtag/js"]';

async function blockAnalytics(page: Page) {
	await page.route("https://www.googletagmanager.com/**", (route) =>
		route.fulfill({ status: 204, body: "" }),
	);
	await page.route("https://www.google-analytics.com/**", (route) =>
		route.fulfill({ status: 204, body: "" }),
	);
}

test.describe("consent-first analytics", () => {
	test("first visit shows the banner and does not inject GA", async ({ page }) => {
		await blockAnalytics(page);
		await page.goto("/");

		await expect(page.getByRole("dialog", { name: "Cookie consent" })).toBeVisible();
		await expect(page.locator(GTM_SCRIPT)).toHaveCount(0);
		expect(await page.evaluate(() => localStorage.getItem("cookie-consent"))).toBeNull();
	});

	test("reject persists, hides the banner, and never injects GA", async ({ page }) => {
		await blockAnalytics(page);
		await page.goto("/");

		await page.getByRole("button", { name: "Reject analytics cookies" }).click();
		await expect(page.getByRole("dialog", { name: "Cookie consent" })).toHaveCount(0);
		expect(await page.evaluate(() => localStorage.getItem("cookie-consent"))).toBe(
			"rejected",
		);
		await expect(page.locator(GTM_SCRIPT)).toHaveCount(0);

		await page.reload();
		await expect(page.getByRole("dialog", { name: "Cookie consent" })).toHaveCount(0);
		await expect(page.locator(GTM_SCRIPT)).toHaveCount(0);
	});

	test("accept persists and injects the GA script tag", async ({ page }) => {
		await blockAnalytics(page);
		await page.goto("/");

		await page.getByRole("button", { name: "Accept analytics cookies" }).click();
		await expect(page.getByRole("dialog", { name: "Cookie consent" })).toHaveCount(0);
		expect(await page.evaluate(() => localStorage.getItem("cookie-consent"))).toBe(
			"accepted",
		);
		await expect(page.locator(GTM_SCRIPT)).toHaveCount(1);
		await expect(page.locator("script#google-analytics")).toHaveCount(1);

		await page.reload();
		await expect(page.getByRole("dialog", { name: "Cookie consent" })).toHaveCount(0);
		await expect(page.locator(GTM_SCRIPT)).toHaveCount(1);
	});
});
