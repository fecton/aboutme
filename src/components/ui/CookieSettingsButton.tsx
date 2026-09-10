"use client";

import { reopenConsent } from "@/lib/consent";

export function CookieSettingsButton() {
	return (
		<button
			type="button"
			onClick={reopenConsent}
			className="hover:text-foreground focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
		>
			Cookie settings
		</button>
	);
}
