"use client";

import { useState } from "react";
import { BlogCard } from "@/components/blog/BlogCard";
import type { BlogPostMeta } from "@/lib/blog";

interface BlogTagFilterProps {
	tags: string[];
	activeTag: string | null;
	onTagChange: (tag: string | null) => void;
}

export function BlogTagFilter({
	tags,
	activeTag,
	onTagChange,
}: BlogTagFilterProps) {
	return (
		<div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter by tag">
			<button
				type="button"
				onClick={() => onTagChange(null)}
				className={`min-h-[44px] rounded-full border px-4 py-1.5 text-sm transition-colors sm:min-h-0 ${
					!activeTag
						? "border-accent bg-accent/10 text-accent"
						: "border-border text-muted hover:border-accent/50 hover:text-foreground"
				}`}
			>
				All
			</button>
			{tags.map((tag) => (
				<button
					key={tag}
					type="button"
					onClick={() => onTagChange(activeTag === tag ? null : tag)}
					className={`min-h-[44px] rounded-full border px-4 py-1.5 text-sm transition-colors sm:min-h-0 ${
						activeTag === tag
							? "border-accent bg-accent/10 text-accent"
							: "border-border text-muted hover:border-accent/50 hover:text-foreground"
					}`}
				>
					{tag}
				</button>
			))}
		</div>
	);
}

interface BlogListClientProps {
	posts: BlogPostMeta[];
	tags: string[];
}

export function BlogListClient({ posts, tags }: BlogListClientProps) {
	const [activeTag, setActiveTag] = useState<string | null>(null);

	const filteredPosts = activeTag
		? posts.filter((post) => post.tags.includes(activeTag))
		: posts;

	return (
		<>
			{tags.length > 0 && (
				<BlogTagFilter
					tags={tags}
					activeTag={activeTag}
					onTagChange={setActiveTag}
				/>
			)}

			{filteredPosts.length === 0 ? (
				<div className="py-20 text-center">
					<p className="text-lg text-muted">
						No posts match this filter.
					</p>
				</div>
			) : (
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{filteredPosts.map((post) => (
						<BlogCard key={post.slug} post={post} />
					))}
				</div>
			)}
		</>
	);
}
