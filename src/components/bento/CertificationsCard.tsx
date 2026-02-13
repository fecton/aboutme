"use client";

import Image from "next/image";
import { GlassCard } from "@/components/ui/GlassCard";
import { certificates } from "@/data/certificates";
import { motion, useReducedMotion } from "framer-motion";
import { useReduceEffects } from "@/components/providers/ReduceEffectsProvider";

const springTransition = {
	type: "spring" as const,
	stiffness: 300,
	damping: 30,
};

export function CertificationsCard() {
	const { reduceEffects } = useReduceEffects();
	const prefersReducedMotion = useReducedMotion();
	const skipAnimations = reduceEffects || prefersReducedMotion;

	return (
		<GlassCard className="h-full">
			<h2 className="mb-6 text-2xl font-bold tracking-tight text-white">
				Certifications
			</h2>
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{certificates.map((cert, index) => {
					const isEarned = cert.link && cert.link !== "";
					const isPlanned = cert.planned_year && cert.planned_year.length !== 0;

					return (
						<motion.article
							key={cert.title}
							className={`rounded-xl border p-4 ${
								isEarned
									? "border-border bg-surface"
									: "border-border/50 bg-surface/50"
							}`}
							initial={skipAnimations ? false : { opacity: 0, y: 10 }}
							animate={skipAnimations ? { opacity: 1, y: 0 } : undefined}
							whileInView={skipAnimations ? undefined : { opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ ...springTransition, delay: index * 0.05 }}
							whileHover={skipAnimations ? undefined : { scale: 1.02 }}
						>
							<span
								className={`mb-2 inline-block rounded-full px-2 py-0.5 text-xs ${
									isEarned
										? "bg-green-100 text-green-800 dark:bg-green-900/95 dark:text-green-100"
										: "bg-amber-100 text-amber-800 dark:bg-amber-900/95 dark:text-amber-100"
								}`}
							>
								{isEarned ? "Earned" : "Planned"}
							</span>
							<div className="mb-2 flex justify-center">
								<Image
									src={`/images/certification/${cert.image}`}
									alt={cert.title}
									width={80}
									height={80}
									loading="lazy"
									className="rounded-lg"
								/>
							</div>
							<h4 className="mb-2 text-center text-sm font-medium text-foreground">
								{cert.title}
							</h4>
							{isEarned && (
								<a
									href={cert.link}
									target="_blank"
									rel="noopener noreferrer"
									className="block text-center text-xs text-accent hover:underline"
								>
									Verify
								</a>
							)}
							{isPlanned && !isEarned && (
								<p className="text-center text-xs text-muted">
									Target: {cert.planned_year}
								</p>
							)}
						</motion.article>
					);
				})}
			</div>
		</GlassCard>
	);
}
