import { Feed } from "feed";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SITE_URL = "https://alytvynenko.net";
const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const OUTPUT_DIR = path.join(process.cwd(), "public", "blog");

function getAllPosts() {
	if (!fs.existsSync(BLOG_DIR)) return [];

	return fs
		.readdirSync(BLOG_DIR)
		.filter((f) => f.endsWith(".mdx"))
		.map((filename) => {
			const slug = filename.replace(/\.mdx$/, "");
			const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
			const { data } = matter(raw);
			return { slug, ...data };
		})
		.filter((post) => post.published !== false)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

const posts = getAllPosts();

const feed = new Feed({
	title: "Andrii Lytvynenko - DevOps & Cloud Engineering Blog",
	description:
		"Articles on DevOps, Cloud Engineering, Kubernetes, AWS, Terraform, and infrastructure best practices.",
	id: `${SITE_URL}/blog/`,
	link: `${SITE_URL}/blog/`,
	language: "en",
	image: `${SITE_URL}/images/tm-easy-profile.webp`,
	favicon: `${SITE_URL}/images/favicon.ico`,
	copyright: `All rights reserved ${new Date().getFullYear()}, Andrii Lytvynenko`,
	author: {
		name: "Andrii Lytvynenko",
		email: "a.v.lytvynenko2004@gmail.com",
		link: SITE_URL,
	},
});

for (const post of posts) {
	feed.addItem({
		title: post.title,
		id: `${SITE_URL}/blog/${post.slug}/`,
		link: `${SITE_URL}/blog/${post.slug}/`,
		description: post.description || "",
		date: new Date(post.date),
		author: [
			{
				name: "Andrii Lytvynenko",
				email: "a.v.lytvynenko2004@gmail.com",
				link: SITE_URL,
			},
		],
	});
}

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUTPUT_DIR, "rss.xml"), feed.rss2());
fs.writeFileSync(path.join(OUTPUT_DIR, "atom.xml"), feed.atom1());

console.log(`Generated RSS feed with ${posts.length} posts`);
