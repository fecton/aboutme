"use client";

import Script from "next/script";
import { useCallback, useSyncExternalStore } from "react";
import { CookieConsentBanner, CONSENT_KEY } from "@/components/ui/CookieConsentBanner";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import { useIsMounted } from "@/lib/hooks";

type ConsentStatus = "accepted" | "rejected" | null;

const consentListeners = new Set<() => void>();

function subscribeToConsent(callback: () => void) {
	consentListeners.add(callback);
	return () => {
		consentListeners.delete(callback);
	};
}

function getConsentSnapshot(): ConsentStatus {
	const stored = localStorage.getItem(CONSENT_KEY);
	if (stored === "accepted" || stored === "rejected") return stored;
	return null;
}

function getConsentServerSnapshot(): ConsentStatus {
	return null;
}

function setStoredConsent(value: "accepted" | "rejected") {
	localStorage.setItem(CONSENT_KEY, value);
	consentListeners.forEach((cb) => cb());
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
	const mounted = useIsMounted();
	const consent = useSyncExternalStore(
		subscribeToConsent,
		getConsentSnapshot,
		getConsentServerSnapshot,
	);

	const setConsent = useCallback((value: "accepted" | "rejected") => {
		setStoredConsent(value);
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
