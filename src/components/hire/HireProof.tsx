import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { hire } from "@/data/hire";

export function HireProof() {
	return (
		<section aria-labelledby="hire-proof-heading" className="w-full min-w-0">
			<h2
				id="hire-proof-heading"
				className="mb-6 text-2xl font-bold tracking-tight text-foreground"
			>
				{hire.proofHeading}
			</h2>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{hire.proofTeasers.map((teaser) => (
					<GlassCard key={teaser.id} className="flex h-full flex-col">
						<p className="mb-4 leading-relaxed text-foreground">{teaser.line}</p>
						<Link
							href={teaser.href}
							className="mt-auto text-sm font-medium text-accent underline underline-offset-2 hover:text-accent-dark focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
						>
							{teaser.linkLabel}
						</Link>
					</GlassCard>
				))}
			</div>
			<ul className="mt-6 flex flex-wrap gap-3" aria-label="Certifications">
				{hire.badges.map((badge) => (
					<li key={badge.label}>
						<Link
							href={badge.href}
							aria-label={badge.ariaLabel}
							className="flex min-h-[44px] items-center rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover"
						>
							{badge.label}
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
