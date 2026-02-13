"use client";

import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";

const LITE_MODE_STORAGE_KEY = "reduce-effects";

function detectLowEndDevice(): boolean {
	if (typeof window === "undefined") return false;

	// prefers-reduced-motion: user explicitly wants fewer animations
	const prefersReducedMotion = window.matchMedia(
		"(prefers-reduced-motion: reduce)"
	).matches;
	if (prefersReducedMotion) return true;

	// Low RAM (Chrome, HTTPS only) - <= 4 GB suggests budget/mid-range device
	const deviceMemory = (navigator as Navigator & { deviceMemory?: number })
		.deviceMemory;
	if (deviceMemory && deviceMemory <= 4) return true;

	// Low CPU cores - <= 4 cores suggests older or budget device
	const hardwareConcurrency = navigator.hardwareConcurrency;
	if (hardwareConcurrency && hardwareConcurrency <= 4) return true;

	// Data saver mode - user may want lighter experience
	const connection = (navigator as Navigator & { connection?: { saveData?: boolean } })
		.connection;
	if (connection?.saveData) return true;

	return false;
}

interface ReduceEffectsContextValue {
	reduceEffects: boolean;
	setReduceEffects: (value: boolean) => void;
}

const ReduceEffectsContext = createContext<ReduceEffectsContextValue | null>(
	null
);

export function ReduceEffectsProvider({ children }: { children: React.ReactNode }) {
	const [reduceEffects, setReduceEffectsState] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted) return;

		// Check manual override first
		const stored = localStorage.getItem(LITE_MODE_STORAGE_KEY);
		if (stored !== null) {
			setReduceEffectsState(stored === "true");
			return;
		}

		// Fall back to device detection
		setReduceEffectsState(detectLowEndDevice());
	}, [mounted]);

	const setReduceEffects = useCallback((value: boolean) => {
		setReduceEffectsState(value);
		localStorage.setItem(LITE_MODE_STORAGE_KEY, String(value));
	}, []);

	const value: ReduceEffectsContextValue = {
		reduceEffects: reduceEffects,
		setReduceEffects,
	};

	return (
		<ReduceEffectsContext.Provider value={value}>
			{children}
		</ReduceEffectsContext.Provider>
	);
}

export function useReduceEffects(): ReduceEffectsContextValue {
	const context = useContext(ReduceEffectsContext);
	if (!context) {
		throw new Error(
			"useReduceEffects must be used within ReduceEffectsProvider"
		);
	}
	return context;
}
