"use client";

import { motion } from "framer-motion";

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
	return (
		<motion.div
			className={`w-full rounded-2xl border border-border bg-surface p-6 backdrop-blur-[20px] md:p-8 ${className}`}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={springTransition}
			whileHover={{ scale: 1.02 }}
		>
			{children}
		</motion.div>
	);
}
