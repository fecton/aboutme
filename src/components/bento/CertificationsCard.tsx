"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { certificates } from "@/data/certificates";
import { motion, useReducedMotion } from "framer-motion";
import { useReduceEffects } from "@/components/providers/ReduceEffectsProvider";
import { springTransition } from "@/lib/animations";

export function CertificationsCard() {
	const { reduceEffects } = useReduceEffects();
	const prefersReducedMotion = useReducedMotion();
	const skipAnimations = reduceEffects || prefersReducedMotion;

	return (
		<GlassCard className="h-full">
			<h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
				Certifications
			</h2>
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{certificates.map((cert, index) => {
					const isEarned = cert.link && cert.link !== "";
					const isPlanned = cert.planned_year && cert.planned_year.length !== 0;

					return (
						<motion.article
							key={cert.title}
							className={`flex min-h-full flex-col rounded-xl border p-4 ${
								isEarned
									? "border-border bg-surface"
									: "border-border/50 bg-surface/50"
							}`}
							initial={skipAnimations ? false : { opacity: 0, y: 10 }}
							animate={skipAnimations ? { opacity: 1, y: 0 } : undefined}
							whileInView={skipAnimations ? undefined : { opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ ...springTransition, delay: index * 0.05 }}
							whileHover={
								isEarned && !skipAnimations ? { scale: 1.02 } : undefined
							}
						>
							<span
								className={`mb-2 inline-block self-center rounded-full px-2 py-0.5 text-center text-xs ${
									isEarned
										? "bg-green-100 text-green-800 dark:bg-green-900/95 dark:text-green-100"
										: "bg-amber-100 text-amber-800 dark:bg-amber-900/95 dark:text-amber-100"
								}`}
							>
								{isEarned ? "Earned" : "Planned"}
							</span>
							{isEarned ? (
								<a
									href={cert.link}
									target="_blank"
									rel="noopener noreferrer"
									className="group flex flex-1 flex-col cursor-pointer rounded-lg text-center transition-opacity hover:opacity-90"
								>
									<div className="mb-2 flex justify-center">
										<img
											src={`/images/certification/${cert.image}`}
											alt={cert.title}
											width={80}
											height={80}
											loading="lazy"
											className="rounded-lg"
										/>
									</div>
									<h3 className="mb-2 text-center text-sm font-medium text-foreground">
										{cert.title}
									</h3>
									<span className="mt-auto inline-block rounded-full bg-blue-200 px-3 py-1.5 text-center text-xs font-medium text-blue-800 dark:bg-blue-900/95 dark:text-blue-100 group-hover:bg-blue-300 dark:group-hover:bg-blue-800/95 group-hover:underline">
										Verify
									</span>
								</a>
							) : (
								<div className="flex flex-1 flex-col">
									<div className="mb-2 flex justify-center">
										<img
											src={`/images/certification/${cert.image}`}
											alt={cert.title}
											width={80}
											height={80}
											loading="lazy"
											className="rounded-lg"
										/>
									</div>
									<h3 className="mb-2 text-center text-sm font-medium text-foreground">
										{cert.title}
									</h3>
									{isPlanned && (
										<p className="mt-auto text-center text-xs text-muted">
											Target: {cert.planned_year}
										</p>
									)}
								</div>
							)}
						</motion.article>
					);
				})}
			</div>
		</GlassCard>
	);
}
