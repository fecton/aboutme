import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogLayout } from "@/components/blog/BlogLayout";
import { mdxComponents } from "@/components/blog/MDXComponents";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

const SITE_URL = "https://alytvynenko.net";
const PROFILE_IMAGE = `${SITE_URL}/images/tm-easy-profile.webp`;

interface BlogPostPageProps {
	params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
	const posts = getAllPosts();
	return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
	params,
}: BlogPostPageProps): Promise<Metadata> {
	const { slug } = await params;
	const post = getPostBySlug(slug);
	if (!post) return {};

	const postUrl = `${SITE_URL}/blog/${slug}/`;
	const ogImage = post.coverImage
		? `${SITE_URL}${post.coverImage}`
		: PROFILE_IMAGE;

	return {
		title: `${post.title} - Andrii Lytvynenko`,
		description: post.description,
		openGraph: {
			title: post.title,
			description: post.description,
			url: postUrl,
			type: "article",
			publishedTime: post.date,
			authors: ["Andrii Lytvynenko"],
			tags: post.tags,
			images: [
				{
					url: ogImage,
					width: 800,
					height: 400,
					alt: post.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.description,
			images: [ogImage],
		},
		alternates: {
			canonical: postUrl,
		},
	};
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
	const { slug } = await params;
	const post = getPostBySlug(slug);
	if (!post) notFound();

	const { content: _, ...meta } = post;

	const blogPostingJsonLd = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: post.title,
		description: post.description,
		datePublished: post.date,
		author: {
			"@type": "Person",
			name: "Andrii Lytvynenko",
			url: SITE_URL,
		},
		url: `${SITE_URL}/blog/${slug}/`,
		image: post.coverImage
			? `${SITE_URL}${post.coverImage}`
			: PROFILE_IMAGE,
		keywords: post.tags.join(", "),
	};

	return (
		<>
			<Navbar />
			<main id="main-content" className="min-h-screen pb-12 pt-24">
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(blogPostingJsonLd),
					}}
				/>
				<BlogLayout meta={meta}>
					<MDXRemote
						source={post.content}
						components={mdxComponents}
						options={{
							mdxOptions: {
								remarkPlugins: [remarkGfm],
								rehypePlugins: [
									rehypeSlug,
									[
										rehypePrettyCode,
										{
											theme: {
												dark: "github-dark",
												light: "github-light",
											},
											keepBackground: false,
										},
									],
								],
							},
						}}
					/>
				</BlogLayout>
			</main>
			<Footer />
		</>
	);
}
