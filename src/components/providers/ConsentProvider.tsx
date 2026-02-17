"use client";

import Script from "next/script";
import { useCallback, useEffect, useState } from "react";
import { CookieConsentBanner, CONSENT_KEY } from "@/components/ui/CookieConsentBanner";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

type ConsentStatus = "accepted" | "rejected" | null;

function getStoredConsent(): ConsentStatus {
	if (typeof window === "undefined") return null;
	const stored = localStorage.getItem(CONSENT_KEY);
	if (stored === "accepted" || stored === "rejected") return stored;
	return null;
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
	const [consent, setConsentState] = useState<ConsentStatus>(null);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setConsentState(getStoredConsent());
		setMounted(true);
	}, []);

	const setConsent = useCallback((value: "accepted" | "rejected") => {
		localStorage.setItem(CONSENT_KEY, value);
		setConsentState(value);
	}, []);

	return (
		<>
			{children}
			{mounted && (
				<>
					<CookieConsentBanner
						consent={consent}
						onAccept={() => setConsent("accepted")}
						onReject={() => setConsent("rejected")}
					/>
					{consent === "accepted" && (
						<>
							<Script
								src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
								strategy="afterInteractive"
							/>
							<Script id="google-analytics" strategy="afterInteractive">
								{`
									window.dataLayer = window.dataLayer || [];
									function gtag(){dataLayer.push(arguments);}
									gtag('js', new Date());
									gtag('config', '${GA_MEASUREMENT_ID}');
								`}
							</Script>
						</>
					)}
				</>
			)}
		</>
	);
}
