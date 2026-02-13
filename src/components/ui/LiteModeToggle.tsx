"use client";

import { useReduceEffects } from "@/components/providers/ReduceEffectsProvider";

export function LiteModeToggle() {
	const { reduceEffects, setReduceEffects } = useReduceEffects();

	return (
		<button
			type="button"
			onClick={() => setReduceEffects(!reduceEffects)}
			className={`flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
				reduceEffects
					? "text-accent"
					: "text-muted hover:text-foreground"
			}`}
			aria-label={
				reduceEffects
					? "Lite mode on - fewer effects for better performance. Click to disable."
					: "Lite mode off - enable for smoother scrolling on slower devices."
			}
			title={reduceEffects ? "Lite mode on" : "Lite mode off"}
		>
			<svg
				className="h-5 w-5"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				aria-hidden
			>
				{/* Lightning bolt - represents performance/lite mode */}
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M13 10V3L4 14h7v7l9-11h-7z"
				/>
			</svg>
		</button>
	);
}
