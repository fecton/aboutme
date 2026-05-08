import { defineConfig, devices } from "@playwright/test";

const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

// CI runs against the static export. Locally, you can also point at `next dev`
// by overriding PLAYWRIGHT_BASE_URL.
export default defineConfig({
	testDir: "./tests/e2e",
	fullyParallel: true,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: [["list"], ["html", { open: "never" }]],
	use: {
		baseURL: process.env.PLAYWRIGHT_BASE_URL ?? BASE_URL,
		trace: "retain-on-failure",
	},
	projects: [
		{ name: "chromium-desktop", use: { ...devices["Desktop Chrome"] } },
		{ name: "chromium-mobile", use: { ...devices["Pixel 7"] } },
	],
	webServer: process.env.PLAYWRIGHT_BASE_URL
		? undefined
		: {
				command: `npx serve out -l ${PORT} --no-clipboard --no-port-switching`,
				url: BASE_URL,
				reuseExistingServer: !process.env.CI,
				timeout: 60_000,
			},
});
