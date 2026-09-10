import { describe, expect, it } from "vitest";
import { isGoogleAnalyticsCookie } from "@/lib/analytics";

describe("isGoogleAnalyticsCookie", () => {
	it("matches GA4 and legacy analytics cookies", () => {
		expect(isGoogleAnalyticsCookie("_ga")).toBe(true);
		expect(isGoogleAnalyticsCookie("_ga_LKHDQT8Z81")).toBe(true);
		expect(isGoogleAnalyticsCookie("_gid")).toBe(true);
		expect(isGoogleAnalyticsCookie("_gat")).toBe(true);
	});

	it("does not match essential site storage keys", () => {
		expect(isGoogleAnalyticsCookie("cookie-consent")).toBe(false);
		expect(isGoogleAnalyticsCookie("theme")).toBe(false);
		expect(isGoogleAnalyticsCookie("reduce-effects")).toBe(false);
	});
});
