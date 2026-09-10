import { test, expect, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

async function dismissConsent(page: Page) {
	await page.evaluate(() => localStorage.setItem("cookie-consent", "rejected"));
	await page.reload();
}

test.describe("Writing hub and article", () => {
	test("hub lists the lab note with the title as the only card link", async ({
		page,
	}) => {
		await page.goto("/writing/");
		await dismissConsent(page);

		await expect(page.getByRole("heading", { level: 1 })).toHaveText("Writing");
		await expect(
			page.getByText(
				"Academic and lab notes on DevOps craft. Skills demonstration — not a client pitch.",
			),
		).toBeVisible();

		const card = page.locator("article").filter({
			has: page.getByRole("heading", {
				level: 2,
				name: "Layered Terraform on GKE — KhAI diploma lab",
			}),
		});
		await expect(card).toBeVisible();
		await expect(card.getByText("Lab", { exact: true })).toBeVisible();
		await expect(card.getByText("verified")).toBeVisible();
		await expect(card.getByRole("link")).toHaveCount(1);
		await expect(card.getByRole("link")).toHaveAttribute(
			"href",
			"/writing/layered-terraform-gke-lab/",
		);
		await expect(page.getByRole("link", { name: /read more/i })).toHaveCount(0);
		await expect(page.getByRole("link", { name: "Hire" })).toHaveCount(0);
	});

	test("article renders solid reading chrome, prompts, code copy, and TechArticle JSON-LD", async ({
		page,
	}) => {
		await page.goto("/writing/layered-terraform-gke-lab/");
		await dismissConsent(page);

		await expect(page.getByRole("heading", { level: 1 })).toHaveText(
			"Layered Terraform on GKE — KhAI diploma lab",
		);
		await expect(
			page.getByRole("link", { name: "Back to Writing" }),
		).toHaveAttribute("href", "/writing/");
		await expect(page.getByRole("link", { name: "Hire" })).toHaveCount(0);
		await expect(page.getByRole("link", { name: /read more/i })).toHaveCount(0);
		await expect(page.getByText("Let’s talk")).toHaveCount(0);

		for (const heading of [
			"Context",
			"Architecture",
			"Walkthrough",
			"Prerequisites",
			"Dependencies",
			"Private-use prompts",
			"Verify",
			"Cleanup",
			"Security notes",
			"Related",
			"TL;DR",
			"FAQ",
			"For assistants",
		]) {
			await expect(
				page.getByRole("heading", { name: heading }).first(),
			).toBeVisible();
		}

		await expect(
			page.getByText(
				/prompts on this page are for the reader’s private experiments only/i,
			),
		).toBeVisible();

		const prompt = page.getByText("Explain the three Terraform roots");
		await expect(prompt).toBeVisible();
		const details = page.locator("details").filter({ has: prompt });
		await expect(details).not.toHaveAttribute("open");
		await prompt.click();
		await expect(details).toHaveAttribute("open");

		const copy = page.getByRole("button", { name: "Copy code" }).first();
		await expect(copy).toBeVisible();
		const copyBox = await copy.boundingBox();
		expect(copyBox?.width).toBeGreaterThanOrEqual(44);
		expect(copyBox?.height).toBeGreaterThanOrEqual(44);
		await expect(page.getByText("hcl", { exact: true }).first()).toBeVisible();

		const jsonLd = (
			await page.locator('script[type="application/ld+json"]').allTextContents()
		).map((text) => JSON.parse(text) as Record<string, unknown>);
		const article = jsonLd.find((graph) => graph["@type"] === "TechArticle");
		expect(article).toBeDefined();
		expect(JSON.stringify(jsonLd)).not.toMatch(/Offer/);
		expect(JSON.stringify(jsonLd)).not.toMatch(/ProfessionalService/);
		expect(JSON.stringify(jsonLd)).not.toMatch(/Geniusee/);

		await expect(
			page.locator("footer").getByRole("link", { name: "Writing" }),
		).toBeVisible();
		await expect(
			page.locator("footer").getByRole("link", { name: /LLM index/i }),
		).toHaveAttribute("href", "/writing/llms.txt");
	});

	test("home shows Writing after Education and Education links to the hub", async ({
		page,
	}) => {
		await page.goto("/");
		await dismissConsent(page);

		const education = page.getByRole("region", { name: "Education" });
		const writing = page.getByRole("region", { name: "Writing" });
		await expect(education).toBeVisible();
		await expect(writing).toBeVisible();

		const following = await page.evaluate(() => {
			const edu = document.querySelector('[aria-label="Education"]');
			const write = document.querySelector('[aria-label="Writing"]');
			if (!edu || !write) return false;
			return Boolean(
				edu.compareDocumentPosition(write) & Node.DOCUMENT_POSITION_FOLLOWING,
			);
		});
		expect(following).toBe(true);

		await expect(
			education.getByRole("link", { name: "Writing" }),
		).toHaveAttribute("href", "/writing/");
		await expect(
			writing.getByRole("heading", {
				level: 3,
				name: "Layered Terraform on GKE — KhAI diploma lab",
			}),
		).toBeVisible();
		await expect(
			page.locator("nav").getByRole("link", { name: "Hire" }),
		).toHaveCount(0);
		await expect(
			page.locator("nav").getByRole("link", { name: "Writing" }),
		).toHaveCount(0);
	});

	test("llms.txt is a plain-text index of note URLs", async ({ page }) => {
		const response = await page.goto("/writing/llms.txt");
		expect(response?.ok()).toBeTruthy();
		const body = (await response?.text()) ?? "";
		expect(body).toContain("# Writing — Andrii Lytvynenko");
		expect(body).toContain(
			"https://alytvynenko.net/writing/layered-terraform-gke-lab/",
		);
		expect(body).not.toContain("<html");
	});

	test("writing pages have no serious or critical axe violations", async ({
		page,
	}) => {
		for (const path of ["/writing/", "/writing/layered-terraform-gke-lab/"]) {
			await page.goto(path);
			await dismissConsent(page);
			const results = await new AxeBuilder({ page })
				.withTags(["wcag2a", "wcag2aa"])
				.analyze();
			const seriousOrCritical = results.violations.filter((v) =>
				["serious", "critical"].includes(v.impact ?? ""),
			);
			expect(
				seriousOrCritical,
				`${path}: ${JSON.stringify(seriousOrCritical, null, 2)}`,
			).toEqual([]);
		}
	});
});
