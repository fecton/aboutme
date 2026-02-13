import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "#000000",
				surface: "rgba(255, 255, 255, 0.05)",
				"apple-dark": "#1c1c1e",
				"apple-gray": "#a1a1a6",
				accent: "#3366CC",
				"accent-dark": "#204090",
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
			backdropBlur: {
				glass: "20px",
			},
			borderColor: {
				glass: "rgba(255, 255, 255, 0.1)",
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
		},
	},
	plugins: [],
};

export default config;
