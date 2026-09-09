import { test, expect, type Page } from "@playwright/test";

async function openHomeWithConsentRejected(page: Page) {
	await page.addInitScript(() => {
		localStorage.setItem("cookie-consent", "rejected");
	});
	await page.goto("/");
}

test.describe("Lite Mode preference", () => {
	test("toggle writes reduce-effects and survives reload", async ({ page }) => {
		await openHomeWithConsentRejected(page);
		// Seed after first paint so addInitScript cannot overwrite the value on reload.
		// Auto-detect (deviceMemory / cores / Save-Data) is environment-dependent.
		await page.evaluate(() => localStorage.setItem("reduce-effects", "false"));
		await page.reload();

		const off = page.getByRole("button", { name: /Lite mode off/i });
		await expect(off).toBeVisible();
		await off.click();

		await expect(page.getByRole("button", { name: /Lite mode on/i })).toBeVisible();
		expect(await page.evaluate(() => localStorage.getItem("reduce-effects"))).toBe(
			"true",
		);

		await page.reload();
		await expect(page.getByRole("button", { name: /Lite mode on/i })).toBeVisible();
		expect(await page.evaluate(() => localStorage.getItem("reduce-effects"))).toBe(
			"true",
		);
	});

	test("explicit off stays off after reload", async ({ page }) => {
		await openHomeWithConsentRejected(page);
		await page.evaluate(() => localStorage.setItem("reduce-effects", "true"));
		await page.reload();

		await page.getByRole("button", { name: /Lite mode on/i }).click();
		await expect(page.getByRole("button", { name: /Lite mode off/i })).toBeVisible();
		expect(await page.evaluate(() => localStorage.getItem("reduce-effects"))).toBe(
			"false",
		);

		await page.reload();
		await expect(page.getByRole("button", { name: /Lite mode off/i })).toBeVisible();
		expect(await page.evaluate(() => localStorage.getItem("reduce-effects"))).toBe(
			"false",
		);
	});
});
