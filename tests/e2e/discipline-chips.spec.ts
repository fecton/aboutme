import { test, expect } from "@playwright/test";

test.describe("experience discipline chips", () => {
	test("expands AWS (service, …) into separate chips", async ({ page }) => {
		await page.addInitScript(() => {
			localStorage.setItem("cookie-consent", "rejected");
		});
		await page.goto("/");

		const currentRole = page.locator("article").filter({
			has: page.getByRole("heading", { name: "Senior DevOps Engineer", exact: true }),
		});

		await currentRole
			.getByRole("button", { name: /Expand to show Technologies & Skills/i })
			.click();

		await expect(currentRole.getByLabel("EC2", { exact: true })).toBeVisible();
		await expect(currentRole.getByLabel("S3", { exact: true })).toBeVisible();
		await expect(currentRole.getByLabel("Terraform", { exact: true })).toBeVisible();
		await expect(currentRole.getByLabel(/AWS \(EC2, ECS/)).toHaveCount(0);
	});
});
