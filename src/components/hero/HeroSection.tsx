"use client";

import { profile } from "@/data/profile";
import { useReduceEffects } from "@/components/providers/ReduceEffectsProvider";

export function HeroSection() {
	const { reduceEffects } = useReduceEffects();

	return (
		<section className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16">
			{/* Gradient mesh background */}
			<div
				className="pointer-events-none absolute inset-0 opacity-30"
				aria-hidden
			>
				<div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-accent/20 blur-[120px]" />
				<div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />
				<div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-surface blur-[100px]" />
			</div>

			<div className="relative mx-auto max-w-6xl px-4 sm:px-6">
				<div className="flex flex-col items-center text-center">
					<div className="relative mb-6 h-28 w-28 overflow-hidden rounded-full border-2 border-border md:h-40 md:w-40">
						<img
							src={profile.profileImage}
							alt="Andrii Lytvynenko, Senior DevOps and Cloud Engineer with expertise in AWS, Kubernetes, and cloud infrastructure"
							width={160}
							height={160}
							loading="eager"
							fetchPriority="high"
							decoding="async"
							className="h-full w-full object-cover"
						/>
					</div>

					<div
						className={`mb-3 flex items-center gap-2 rounded-full border border-border px-4 py-2 ${
							reduceEffects ? "bg-background" : "bg-surface backdrop-blur-[20px]"
						}`}
					>
						<span
							className={`h-2 w-2 rounded-full bg-green-500 dark:bg-green-400 ${
								reduceEffects ? "" : "animate-pulse"
							}`}
						/>
						<span className="text-sm text-foreground">{profile.availability}</span>
					</div>

					<h1 className="mb-4 max-w-4xl text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
						{profile.headline}
					</h1>

					<p className="mb-8 max-w-3xl text-lg text-muted md:text-xl">
						{profile.subtitle}
					</p>

					<div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
						<a
							href="#contact"
							className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl bg-accent px-6 py-3 font-medium text-white transition-all hover:bg-accent-dark focus-visible:ring-2 focus-visible:ring-border"
						>
							{profile.ctaPrimary}
						</a>
						<a
							href={profile.resumeUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-border px-6 py-3 font-medium text-foreground transition-all hover:bg-surface-hover focus-visible:ring-2 focus-visible:ring-border"
							download="Andrii_Lytvynenko_Resume.pdf"
						>
							{profile.ctaSecondary}
						</a>
					</div>

					<p className="mt-4 text-sm text-muted">{profile.trustLine}</p>
				</div>
			</div>
		</section>
	);
}
