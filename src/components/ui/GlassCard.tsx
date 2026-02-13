"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useReduceEffects } from "@/components/providers/ReduceEffectsProvider";

const springTransition = {
	type: "spring" as const,
	stiffness: 300,
	damping: 30,
};

interface GlassCardProps {
	children: React.ReactNode;
	className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
	const { reduceEffects } = useReduceEffects();
	const prefersReducedMotion = useReducedMotion();
	const skipAnimations = reduceEffects || prefersReducedMotion;

	return (
		<motion.div
			className={`w-full rounded-2xl border border-border p-6 md:p-8 ${
				reduceEffects ? "bg-background" : "bg-surface backdrop-blur-[20px]"
			} ${className}`}
			initial={skipAnimations ? false : { opacity: 0, y: 20 }}
			animate={skipAnimations ? { opacity: 1, y: 0 } : undefined}
			whileInView={skipAnimations ? undefined : { opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={springTransition}
			whileHover={skipAnimations ? undefined : { scale: 1.02 }}
		>
			{children}
		</motion.div>
	);
}
