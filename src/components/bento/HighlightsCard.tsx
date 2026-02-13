"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";

const springTransition = {
	type: "spring" as const,
	stiffness: 300,
	damping: 30,
};

export function HighlightsCard() {
	return (
		<GlassCard>
			<h2 className="mb-6 text-2xl font-bold tracking-tight text-white">
				Key Highlights
			</h2>
			<div className="grid grid-cols-2 gap-4">
				{profile.highlights.map((highlight, index) => (
					<motion.div
						key={highlight.label}
						className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ ...springTransition, delay: index * 0.05 }}
						whileHover={{ scale: 1.03 }}
					>
						<div className="text-2xl font-bold text-accent md:text-3xl">
							{highlight.number}
						</div>
						<div className="text-sm text-apple-gray">{highlight.label}</div>
					</motion.div>
				))}
			</div>
		</GlassCard>
	);
}
