import { GlassCard } from "@/components/ui/GlassCard";
import { hire } from "@/data/hire";

export function HireAudience() {
	return (
		<section aria-labelledby="hire-audience-heading" className="w-full min-w-0">
			<h2
				id="hire-audience-heading"
				className="mb-6 text-2xl font-bold tracking-tight text-foreground"
			>
				{hire.audienceHeading}
			</h2>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
				{hire.audience.map((item) => (
					<article key={item.id} className="flex min-h-full min-w-0 flex-col">
						<GlassCard variant="solid" className="flex h-full flex-col">
							<p className="leading-relaxed text-foreground">{item.line}</p>
						</GlassCard>
					</article>
				))}
			</div>
		</section>
	);
}
