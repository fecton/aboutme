"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { hire } from "@/data/hire";
import { motion, useReducedMotion } from "framer-motion";
import { useReduceEffects } from "@/components/providers/ReduceEffectsProvider";
import { springTransition } from "@/lib/animations";

export function HirePackages() {
	const { reduceEffects } = useReduceEffects();
	const prefersReducedMotion = useReducedMotion();
	const skipAnimations = reduceEffects || prefersReducedMotion;

	return (
		<section aria-labelledby="hire-packages-heading" className="w-full min-w-0">
			<h2
				id="hire-packages-heading"
				className="mb-6 text-2xl font-bold tracking-tight text-foreground"
			>
				{hire.packagesHeading}
			</h2>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
				{hire.packages.map((pkg) => (
					<motion.article
						key={pkg.id}
						className="flex min-h-full min-w-0 flex-col"
						whileHover={skipAnimations ? undefined : { y: -4 }}
						transition={springTransition}
					>
						<GlassCard variant="solid" className="flex h-full flex-col">
							<h3 className="mb-3 text-xl font-semibold tracking-tight text-foreground">
								{pkg.title}
							</h3>
							<p className="mb-4 leading-relaxed text-foreground">
								<span className="font-semibold">{pkg.bestForLabel}: </span>
								{pkg.bestFor}
							</p>
							<p className="mb-4 leading-relaxed text-muted">{pkg.deliverables}</p>
							<div className="mb-6 mt-auto">
								{pkg.credentials ? (
									<p className="text-sm font-medium text-foreground">
										{pkg.credentials}
									</p>
								) : null}
								{pkg.footnote ? (
									<p className="text-sm leading-relaxed text-muted">
										{pkg.footnote}
									</p>
								) : null}
							</div>
							<a
								href={pkg.ctaHref}
								className="flex min-h-[44px] w-full items-center justify-center rounded-xl border border-border px-6 py-3 font-medium text-foreground transition-all hover:bg-surface-hover focus-visible:ring-2 focus-visible:ring-border"
							>
								{pkg.ctaLabel}
							</a>
						</GlassCard>
					</motion.article>
				))}
			</div>
		</section>
	);
}
