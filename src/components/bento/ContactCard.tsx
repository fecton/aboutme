"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { profile } from "@/data/profile";
import { motion, useReducedMotion } from "framer-motion";
import { useReduceEffects } from "@/components/providers/ReduceEffectsProvider";
import { springTransition } from "@/lib/animations";
import { socialIconPaths } from "@/lib/iconPaths";

export function ContactCard() {
	const { reduceEffects } = useReduceEffects();
	const prefersReducedMotion = useReducedMotion();
	const skipAnimations = reduceEffects || prefersReducedMotion;

	return (
		<div className="flex h-full flex-col gap-6">
			<GlassCard>
				<h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
					Contact
				</h2>
				<div className="space-y-3 text-muted">
					<p className="flex items-center gap-2">
						<svg
							className="h-4 w-4 shrink-0 text-accent"
							fill="currentColor"
							viewBox="0 0 24 24"
							aria-hidden
						>
							<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
						</svg>
						{profile.location}
					</p>
					<p className="flex items-center gap-2">
						<svg
							className="h-4 w-4 shrink-0 text-accent"
							fill="currentColor"
							viewBox="0 0 24 24"
							aria-hidden
						>
							<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
						</svg>
						<a
							href={`mailto:${profile.email}`}
							className="hover:text-accent"
						>
							{profile.email}
						</a>
					</p>
				</div>
				<div className="mt-4 flex flex-wrap gap-3">
					{profile.socialLinks.map((link) => (
						<motion.a
							key={link.name}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground transition-colors hover:bg-surface-hover"
							aria-label={link.ariaLabel}
							whileHover={skipAnimations ? undefined : { scale: 1.05 }}
							transition={springTransition}
						>
							<svg
								className="h-4 w-4"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d={socialIconPaths[link.icon] || ""} />
							</svg>
							{link.name}
						</motion.a>
					))}
				</div>
			</GlassCard>

			<GlassCard className="flex min-h-0 flex-1 flex-col">
				<h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
					Languages
				</h2>
				<div className="min-w-0 overflow-hidden pr-2">
					<div className="flex flex-col gap-y-3 sm:grid sm:grid-cols-[auto_1fr_minmax(8rem,12rem)] sm:gap-x-4">
					{profile.languages.map((lang) => (
						<div
							key={lang.name}
							className="flex items-center gap-x-4 rounded-lg border border-border bg-surface px-3 py-2 sm:col-span-3 sm:grid sm:grid-cols-subgrid"
						>
							<span className="inline-block min-w-[1.5em] text-lg leading-none">{lang.flag}</span>
							<span className="flex-1 text-foreground">{lang.name}</span>
							<span
								className={`text-right text-sm ${
									lang.native ? "text-accent" : "text-muted"
								}`}
							>
								{lang.level}
							</span>
						</div>
					))}
					</div>
				</div>
			</GlassCard>
		</div>
	);
}
