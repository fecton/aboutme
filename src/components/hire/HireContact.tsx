"use client";

import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { hire } from "@/data/hire";
import { profile } from "@/data/profile";
import { motion, useReducedMotion } from "framer-motion";
import { useReduceEffects } from "@/components/providers/ReduceEffectsProvider";
import { springTransition } from "@/lib/animations";
import { socialIconPaths } from "@/lib/iconPaths";

export function HireContact() {
	const { reduceEffects } = useReduceEffects();
	const prefersReducedMotion = useReducedMotion();
	const skipAnimations = reduceEffects || prefersReducedMotion;

	return (
		<section
			id="contact"
			aria-labelledby="hire-contact-heading"
			className="w-full min-w-0 scroll-mt-24"
		>
			<GlassCard variant="solid">
				<h2
					id="hire-contact-heading"
					className="mb-6 text-2xl font-bold tracking-tight text-foreground"
				>
					{hire.contactHeading}
				</h2>
				<div className="mb-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
					<a
						href={`mailto:${profile.email}`}
						className="flex min-h-[44px] w-full items-center justify-center rounded-xl bg-accent px-6 py-3 font-medium text-white transition-all hover:bg-accent-dark focus-visible:ring-2 focus-visible:ring-border sm:w-auto"
					>
						{hire.contactCtaLabel}
					</a>
					{profile.socialLinks.map((link) => (
						<motion.a
							key={link.name}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground transition-colors hover:bg-surface-hover sm:w-auto sm:min-w-[44px]"
							aria-label={link.ariaLabel}
							whileHover={skipAnimations ? undefined : { scale: 1.05 }}
							transition={springTransition}
						>
							<svg
								className="h-4 w-4"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-hidden
							>
								<path d={socialIconPaths[link.icon] || ""} />
							</svg>
							{link.name}
						</motion.a>
					))}
				</div>
				<p className="text-sm leading-relaxed text-muted">
					{hire.contactDisclaimerBefore}
					<Link
						href={hire.privacyPolicyHref}
						className="text-accent underline underline-offset-2 hover:text-accent-dark focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
					>
						{hire.contactDisclaimerLink}
					</Link>
					{hire.contactDisclaimerAfter}
				</p>
			</GlassCard>
		</section>
	);
}
