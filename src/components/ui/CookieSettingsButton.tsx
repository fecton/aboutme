"use client";

import { reopenConsent } from "@/lib/consent";

export function CookieSettingsButton() {
	return (
		<button
			type="button"
			onClick={reopenConsent}
			className="inline-flex min-h-[44px] items-center text-sm text-muted hover:text-foreground focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
		>
			Cookie settings
		</button>
	);
}
