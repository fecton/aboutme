"use client";

import { useReduceEffects } from "@/components/providers/ReduceEffectsProvider";

interface GlassCardProps {
	children: React.ReactNode;
	className?: string;
	/** Glass stays translucent; solid is an opaque Tier A surface. */
	variant?: "glass" | "solid";
	/** Default padding. Set false for flush lists with their own inset. */
	padded?: boolean;
}

export function GlassCard({
	children,
	className = "",
	variant = "glass",
	padded = true,
}: GlassCardProps) {
	const { reduceEffects } = useReduceEffects();
	const isSolid = variant === "solid";

	const surfaceClass = isSolid
		? "bg-surface-solid"
		: reduceEffects
			? "bg-background"
			: "bg-surface backdrop-blur-[20px]";

	const paddingClass = padded ? "p-6 md:p-8" : "";

	return (
		<div
			className={`w-full rounded-2xl border border-border ${paddingClass} ${surfaceClass} ${className}`}
		>
			{children}
		</div>
	);
}
