import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SITE_URL = "https://alytvynenko.net";
const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const OUTPUT_PATH = path.join(process.cwd(), "public", "sitemap.xml");

const staticPages = [
	{ url: "/", changefreq: "monthly", priority: "1.0" },
	{ url: "/blog/", changefreq: "weekly", priority: "0.9" },
	{ url: "/resume/", changefreq: "monthly", priority: "0.7" },
	{ url: "/privacy-policy/", changefreq: "yearly", priority: "0.3" },
	{ url: "/cookie-policy/", changefreq: "yearly", priority: "0.3" },
];

function getBlogPosts() {
	if (!fs.existsSync(BLOG_DIR)) return [];

	return fs
		.readdirSync(BLOG_DIR)
		.filter((f) => f.endsWith(".mdx"))
		.map((filename) => {
			const slug = filename.replace(/\.mdx$/, "");
			const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
			const { data } = matter(raw);
			return { slug, date: data.date, published: data.published };
		})
		.filter((post) => post.published !== false);
}

const blogPosts = getBlogPosts();
const today = new Date().toISOString().split("T")[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

for (const page of staticPages) {
	xml += `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
}

for (const post of blogPosts) {
	xml += `
  <url>
    <loc>${SITE_URL}/blog/${post.slug}/</loc>
    <lastmod>${post.date || today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
}

xml += `
</urlset>
`;

fs.writeFileSync(OUTPUT_PATH, xml);
console.log(
	`Generated sitemap with ${staticPages.length + blogPosts.length} URLs`,
);
