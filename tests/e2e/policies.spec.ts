import { test, expect } from "@playwright/test";

test.describe("policy copy matches live consent model", () => {
	test("cookie policy lists essential localStorage keys", async ({ page }) => {
		await page.goto("/cookie-policy/");

		await expect(
			page.locator("code", { hasText: "cookie-consent" }),
		).toBeVisible();
		await expect(
			page.locator("code", { hasText: "reduce-effects" }),
		).toBeVisible();
		await expect(page.locator("code", { hasText: "theme" })).toBeVisible();
		await expect(
			page.getByText(
				/analytics cookies only after you have given your consent/i,
			),
		).toBeVisible();
		await expect(
			page.getByText(
				"You can change your choice anytime via Cookie settings in the footer.",
			),
		).toBeVisible();
	});

	test("privacy policy states analytics load only after accept", async ({
		page,
	}) => {
		await page.goto("/privacy-policy/");

		await expect(
			page.getByText(/Analytics scripts are only loaded after you accept/i),
		).toBeVisible();
		await expect(
			page.getByText(/If you reject, no analytics scripts are loaded/i),
		).toBeVisible();
	});
});
