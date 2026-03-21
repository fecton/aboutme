import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogListClient } from "@/components/blog/BlogTagFilter";
import { getAllPosts, getAllTags } from "@/lib/blog";

const SITE_URL = "https://alytvynenko.net";
const PROFILE_IMAGE = `${SITE_URL}/images/tm-easy-profile.webp`;

export const metadata: Metadata = {
	title: "Blog - Andrii Lytvynenko",
	description:
		"Articles on DevOps, Cloud Engineering, Kubernetes, AWS, Terraform, and infrastructure best practices by Andrii Lytvynenko.",
	openGraph: {
		title: "Blog - Andrii Lytvynenko | DevOps & Cloud Engineering",
		description:
			"Articles on DevOps, Cloud Engineering, Kubernetes, AWS, Terraform, and infrastructure best practices.",
		url: `${SITE_URL}/blog/`,
		images: [
			{
				url: PROFILE_IMAGE,
				width: 250,
				height: 250,
				alt: "Andrii Lytvynenko - Senior DevOps Engineer",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Blog - Andrii Lytvynenko | DevOps & Cloud Engineering",
		description:
			"Articles on DevOps, Cloud Engineering, Kubernetes, AWS, Terraform, and infrastructure best practices.",
		images: [PROFILE_IMAGE],
	},
	alternates: {
		types: {
			"application/rss+xml": `${SITE_URL}/blog/rss.xml`,
		},
	},
};

const blogJsonLd = {
	"@context": "https://schema.org",
	"@type": "Blog",
	name: "Andrii Lytvynenko - DevOps & Cloud Engineering Blog",
	description:
		"Articles on DevOps, Cloud Engineering, Kubernetes, AWS, Terraform, and infrastructure best practices.",
	url: `${SITE_URL}/blog/`,
	author: {
		"@type": "Person",
		name: "Andrii Lytvynenko",
		url: SITE_URL,
	},
};

export default function BlogPage() {
	const posts = getAllPosts();
	const tags = getAllTags();

	return (
		<>
			<Navbar />
			<main id="main-content" className="min-h-screen pb-12 pt-24">
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(blogJsonLd),
					}}
				/>
				<div className="mx-auto max-w-6xl px-4 sm:px-6">
					<header className="mb-12">
						<h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
							Blog
						</h1>
						<p className="max-w-2xl text-lg text-muted">
							Thoughts on DevOps, cloud infrastructure, and
							engineering best practices.
						</p>
					</header>

					{posts.length === 0 ? (
						<div className="py-20 text-center">
							<p className="text-lg text-muted">
								No posts yet. Stay tuned!
							</p>
						</div>
					) : (
						<BlogListClient posts={posts} tags={tags} />
					)}
				</div>
			</main>
			<Footer />
		</>
	);
}
