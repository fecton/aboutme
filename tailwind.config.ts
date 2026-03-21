import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
	darkMode: "class",
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./content/**/*.mdx",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--color-background)",
				foreground: "var(--color-foreground)",
				muted: "var(--color-muted)",
				surface: {
					DEFAULT: "var(--color-surface)",
					hover: "var(--color-surface-hover)",
				},
				border: "var(--color-border)",
				accent: {
					DEFAULT: "var(--color-accent)",
					dark: "var(--color-accent-dark)",
					light: "var(--color-accent-light)",
				},
			},
			fontFamily: {
				sans: [
					"system-ui",
					"-apple-system",
					"BlinkMacSystemFont",
					"Segoe UI",
					"sans-serif",
				],
			},
			animation: {
				"fade-in": "fadeIn 0.6s ease-out forwards",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
			},
			typography: {
				DEFAULT: {
					css: {
						"--tw-prose-body": "var(--color-foreground)",
						"--tw-prose-headings": "var(--color-foreground)",
						"--tw-prose-lead": "var(--color-muted)",
						"--tw-prose-links": "var(--color-accent)",
						"--tw-prose-bold": "var(--color-foreground)",
						"--tw-prose-counters": "var(--color-muted)",
						"--tw-prose-bullets": "var(--color-muted)",
						"--tw-prose-hr": "var(--color-border)",
						"--tw-prose-quotes": "var(--color-foreground)",
						"--tw-prose-quote-borders": "var(--color-accent)",
						"--tw-prose-captions": "var(--color-muted)",
						"--tw-prose-code": "var(--color-foreground)",
						"--tw-prose-pre-code": "var(--color-foreground)",
						"--tw-prose-pre-bg": "var(--color-surface)",
						"--tw-prose-th-borders": "var(--color-border)",
						"--tw-prose-td-borders": "var(--color-border)",
						"a:hover": {
							color: "var(--color-accent-dark)",
						},
						"blockquote p:first-of-type::before": { content: "none" },
						"blockquote p:last-of-type::after": { content: "none" },
					},
				},
			},
		},
	},
	plugins: [typography],
};

export default config;
