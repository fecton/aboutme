import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
	slug: string;
	title: string;
	date: string;
	description: string;
	tags: string[];
	coverImage?: string;
	published: boolean;
	premium: boolean;
	readingTime: number;
	content: string;
}

export type BlogPostMeta = Omit<BlogPost, "content">;

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function calculateReadingTime(content: string): number {
	const wordsPerMinute = 200;
	const words = content.trim().split(/\s+/).length;
	return Math.max(1, Math.ceil(words / wordsPerMinute));
}

function parseFrontmatter(
	slug: string,
	fileContent: string,
): BlogPost {
	const { data, content } = matter(fileContent);
	return {
		slug,
		title: data.title ?? "Untitled",
		date: data.date ?? new Date().toISOString().split("T")[0],
		description: data.description ?? "",
		tags: data.tags ?? [],
		coverImage: data.coverImage,
		published: data.published !== false,
		premium: data.premium === true,
		readingTime: data.readingTime ?? calculateReadingTime(content),
		content,
	};
}

export function getAllPosts(): BlogPostMeta[] {
	if (!fs.existsSync(BLOG_DIR)) return [];

	const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

	const posts = files
		.map((filename) => {
			const slug = filename.replace(/\.mdx$/, "");
			const filePath = path.join(BLOG_DIR, filename);
			const raw = fs.readFileSync(filePath, "utf-8");
			return parseFrontmatter(slug, raw);
		})
		.filter((post) => post.published);

	posts.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	return posts.map(({ content: _, ...meta }) => meta);
}

export function getPostBySlug(slug: string): BlogPost | null {
	const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
	if (!fs.existsSync(filePath)) return null;

	const raw = fs.readFileSync(filePath, "utf-8");
	return parseFrontmatter(slug, raw);
}

export function getAllTags(): string[] {
	const posts = getAllPosts();
	const tagSet = new Set<string>();
	for (const post of posts) {
		for (const tag of post.tags) {
			tagSet.add(tag);
		}
	}
	return Array.from(tagSet).sort();
}
