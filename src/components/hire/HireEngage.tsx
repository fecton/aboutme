import { GlassCard } from "@/components/ui/GlassCard";
import { hire } from "@/data/hire";

export function HireEngage() {
	return (
		<section aria-labelledby="hire-engage-heading" className="w-full min-w-0">
			<h2
				id="hire-engage-heading"
				className="mb-6 text-2xl font-bold tracking-tight text-foreground"
			>
				{hire.engageHeading}
			</h2>
			<GlassCard variant="solid">
				<ol className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
					{hire.engageSteps.map((step, index) => (
						<li key={step.id} className="min-w-0">
							<p className="mb-2 text-sm font-medium text-muted" aria-hidden>
								{index + 1}
							</p>
							<h3 className="mb-2 text-xl font-semibold tracking-tight text-foreground">
								{step.title}
							</h3>
							<p className="leading-relaxed text-muted">{step.detail}</p>
						</li>
					))}
				</ol>
			</GlassCard>
		</section>
	);
}
