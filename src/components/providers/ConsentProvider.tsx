"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import { CookieConsentBanner } from "@/components/ui/CookieConsentBanner";
import {
	getConsentServerSnapshot,
	getConsentSnapshot,
	setStoredConsent,
	subscribeToConsent,
} from "@/lib/consent";
import { loadGoogleAnalytics, stopGoogleAnalytics } from "@/lib/analytics";
import { useIsMounted } from "@/lib/hooks";

export function ConsentProvider({ children }: { children: React.ReactNode }) {
	const mounted = useIsMounted();
	const consent = useSyncExternalStore(
		subscribeToConsent,
		getConsentSnapshot,
		getConsentServerSnapshot,
	);

	useEffect(() => {
		if (consent === "accepted") {
			loadGoogleAnalytics();
		}
	}, [consent]);

	const setConsent = useCallback((value: "accepted" | "rejected") => {
		if (value === "accepted") {
			loadGoogleAnalytics();
		} else {
			stopGoogleAnalytics();
		}
		setStoredConsent(value);
	}, []);

	return (
		<>
			{children}
			{mounted && (
				<CookieConsentBanner
					consent={consent}
					onAccept={() => setConsent("accepted")}
					onReject={() => setConsent("rejected")}
				/>
			)}
		</>
	);
}
