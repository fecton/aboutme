"use client";

import Script from "next/script";
import { useCallback, useState, useSyncExternalStore } from "react";
import { CookieConsentBanner } from "@/components/ui/CookieConsentBanner";
import {
	getConsentServerSnapshot,
	getConsentSnapshot,
	setStoredConsent,
	subscribeToConsent,
} from "@/lib/consent";
import {
	enableGoogleAnalytics,
	GA_MEASUREMENT_ID,
	stopGoogleAnalytics,
} from "@/lib/analytics";
import { useIsMounted } from "@/lib/hooks";

export function ConsentProvider({ children }: { children: React.ReactNode }) {
	const mounted = useIsMounted();
	const [gaEpoch, setGaEpoch] = useState(0);
	const consent = useSyncExternalStore(
		subscribeToConsent,
		getConsentSnapshot,
		getConsentServerSnapshot,
	);

	const setConsent = useCallback((value: "accepted" | "rejected") => {
		if (value === "accepted") {
			enableGoogleAnalytics();
			setGaEpoch((epoch) => epoch + 1);
		} else {
			stopGoogleAnalytics();
		}
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
								key={`gtag-js-${gaEpoch}`}
								src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
								strategy="afterInteractive"
							/>
							<Script
								id="google-analytics"
								key={`gtag-config-${gaEpoch}`}
								strategy="afterInteractive"
							>
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
