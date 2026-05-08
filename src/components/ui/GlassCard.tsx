"use client";

import { useReduceEffects } from "@/components/providers/ReduceEffectsProvider";

interface GlassCardProps {
	children: React.ReactNode;
	className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
	const { reduceEffects } = useReduceEffects();

	return (
		<div
			className={`w-full rounded-2xl border border-border p-6 md:p-8 ${
				reduceEffects ? "bg-background" : "bg-surface backdrop-blur-[20px]"
			} ${className}`}
		>
			{children}
		</div>
	);
}
