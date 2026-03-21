"use client";

import Link from "next/link";
import Image from "next/image";
import { GlassCard } from "@/components/ui/GlassCard";
import type { BlogPostMeta } from "@/lib/blog";

interface BlogCardProps {
	post: BlogPostMeta;
}

export function BlogCard({ post }: BlogCardProps) {
	const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<Link href={`/blog/${post.slug}`} className="group block">
			<GlassCard className="flex h-full flex-col transition-colors hover:border-accent/50">
				{post.coverImage && (
					<div className="relative -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-2xl md:-mx-8 md:-mt-8 md:mb-8">
						<Image
							src={post.coverImage}
							alt={post.title}
							width={800}
							height={400}
							className="aspect-[2/1] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
							loading="lazy"
						/>
					</div>
				)}

				<div className="flex flex-1 flex-col">
					<div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-muted">
						<time dateTime={post.date}>{formattedDate}</time>
						<span aria-hidden="true">·</span>
						<span>{post.readingTime} min read</span>
						{post.premium && (
							<>
								<span aria-hidden="true">·</span>
								<span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
									Premium
								</span>
							</>
						)}
					</div>

					<h2 className="mb-2 text-xl font-bold text-foreground transition-colors group-hover:text-accent">
						{post.title}
					</h2>

					<p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
						{post.description}
					</p>

					{post.tags.length > 0 && (
						<div className="flex flex-wrap gap-2">
							{post.tags.map((tag, index) => (
								<span
									key={`${tag}-${index}`}
									className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs text-muted"
								>
									{tag}
								</span>
							))}
						</div>
					)}
				</div>
			</GlassCard>
		</Link>
	);
}
