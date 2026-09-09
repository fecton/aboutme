"use client";

import { useReduceEffects } from "@/components/providers/ReduceEffectsProvider";

interface GlassCardProps {
	children: React.ReactNode;
	className?: string;
	/** Glass stays translucent; solid is an opaque Tier A surface. */
	variant?: "glass" | "solid";
}

export function GlassCard({
	children,
	className = "",
	variant = "glass",
}: GlassCardProps) {
	const { reduceEffects } = useReduceEffects();
	const isSolid = variant === "solid";

	const surfaceClass = isSolid
		? "bg-surface-solid"
		: reduceEffects
			? "bg-background"
			: "bg-surface backdrop-blur-[20px]";

	return (
		<div
			className={`w-full rounded-2xl border border-border p-6 md:p-8 ${surfaceClass} ${className}`}
		>
			{children}
		</div>
	);
}
