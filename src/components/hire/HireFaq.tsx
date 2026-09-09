import { GlassCard } from "@/components/ui/GlassCard";
import { hire } from "@/data/hire";

export function HireFaq() {
	return (
		<section aria-labelledby="hire-faq-heading" className="w-full min-w-0">
			<h2
				id="hire-faq-heading"
				className="mb-6 text-2xl font-bold tracking-tight text-foreground"
			>
				{hire.faqHeading}
			</h2>
			<GlassCard padded={false}>
				{hire.faqs.map((item) => (
					<details
						key={item.id}
						className="group border-b border-border px-6 last:border-b-0 md:px-8"
					>
						<summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-3 py-4 font-medium text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
							<span>{item.question}</span>
							<svg
								className="h-4 w-4 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</summary>
						<p className="pb-4 leading-relaxed text-muted">{item.answer}</p>
					</details>
				))}
			</GlassCard>
		</section>
	);
}
