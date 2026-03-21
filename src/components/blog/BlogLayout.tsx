import Image from "next/image";
import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { ReadingToolbar } from "@/components/blog/ReadingToolbar";
import { ReadingProgressBar } from "@/components/blog/ReadingProgressBar";

interface BlogLayoutProps {
	meta: BlogPostMeta;
	children: React.ReactNode;
}

export function BlogLayout({ meta, children }: BlogLayoutProps) {
	const formattedDate = new Date(meta.date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<>
		<ReadingProgressBar targetId="blog-content" />
		<article className="mx-auto max-w-3xl px-4 pb-24 pt-8 sm:px-6">
			<nav className="mb-8" aria-label="Back to blog">
				<Link
					href="/blog"
					className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
				>
					<svg
						className="h-4 w-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M15 19l-7-7 7-7"
						/>
					</svg>
					Back to blog
				</Link>
			</nav>

			<header className="mb-10">
				<div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted">
					<time dateTime={meta.date}>{formattedDate}</time>
					<span aria-hidden="true">·</span>
					<span>{meta.readingTime} min read</span>
					{meta.premium && (
						<>
							<span aria-hidden="true">·</span>
							<span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
								Premium
							</span>
						</>
					)}
				</div>

				<h1 className="mb-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
					{meta.title}
				</h1>

				<p className="text-lg leading-relaxed text-muted">
					{meta.description}
				</p>

				{meta.tags.length > 0 && (
					<div className="mt-4 flex flex-wrap gap-2">
						{meta.tags.map((tag, index) => (
							<span
								key={`${tag}-${index}`}
								className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
							>
								{tag}
							</span>
						))}
					</div>
				)}
			</header>

			{meta.coverImage && (
				<div className="relative mb-10 overflow-hidden rounded-2xl">
					<Image
						src={meta.coverImage}
						alt={meta.title}
						width={800}
						height={400}
						className="aspect-[2/1] w-full object-cover"
						loading="eager"
						priority
					/>
				</div>
			)}

			<div id="blog-content" className="prose prose-lg max-w-none">
				{children}
			</div>

			<footer className="mt-16 border-t border-border pt-8">
				<div className="mb-6">
					<ShareButtons slug={meta.slug} />
				</div>
				<Link
					href="/blog"
					className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
				>
					<svg
						className="h-4 w-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M15 19l-7-7 7-7"
						/>
					</svg>
					Back to blog
				</Link>
			</footer>

			<ReadingToolbar />
		</article>
		</>
	);
}
