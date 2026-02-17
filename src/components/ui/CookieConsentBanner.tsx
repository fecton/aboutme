"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const CONSENT_KEY = "cookie-consent";

type ConsentStatus = "accepted" | "rejected" | null;

interface CookieConsentBannerProps {
	consent: ConsentStatus;
	onAccept: () => void;
	onReject: () => void;
}

export function CookieConsentBanner({
	consent,
	onAccept,
	onReject,
}: CookieConsentBannerProps) {
	const bannerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (consent === null && bannerRef.current) {
			bannerRef.current.focus({ preventScroll: true });
		}
	}, [consent]);

	if (consent !== null) {
		return null;
	}

	return (
		<aside
			ref={bannerRef}
			role="dialog"
			aria-label="Cookie consent"
			aria-describedby="cookie-consent-description"
			className="fixed bottom-0 left-0 right-0 z-[9999] border-t border-border bg-surface/95 p-4 backdrop-blur-[20px] sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-md sm:rounded-2xl sm:border sm:shadow-lg"
			tabIndex={-1}
		>
			<div className="mx-auto max-w-6xl sm:mx-0">
				<p id="cookie-consent-description" className="mb-4 text-sm text-foreground">
					We use cookies to analyze site traffic via Google Analytics. You can
					accept or reject analytics cookies.{" "}
					<Link
						href="/cookie-policy"
						className="text-accent hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
					>
						Learn more
					</Link>
				</p>
				<div className="flex flex-wrap gap-3">
					<button
						type="button"
						onClick={onAccept}
						className="min-h-[44px] min-w-[44px] rounded-full bg-accent px-5 py-2.5 font-medium text-white transition-colors hover:bg-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
						aria-label="Accept analytics cookies"
					>
						Accept
					</button>
					<button
						type="button"
						onClick={onReject}
						className="min-h-[44px] min-w-[44px] rounded-full border border-border bg-surface px-5 py-2.5 font-medium text-foreground transition-colors hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 focus-visible:ring-offset-background"
						aria-label="Reject analytics cookies"
					>
						Reject
					</button>
				</div>
			</div>
		</aside>
	);
}

export { CONSENT_KEY };
