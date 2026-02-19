#!/usr/bin/env node
/**
 * Download official company/university logos from Wikimedia Commons and adapt for the project.
 * Resizes to 80x80 (for 40px display with 2x retina) and converts to WebP.
 * Run from project root: node tools/fetch-official-logos.mjs
 */

import { createWriteStream, mkdirSync } from "fs";
import { pipeline } from "stream/promises";
import { get } from "https";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, "..");
const SIZE = 80;

// Official logos from Wikimedia Commons (public domain / permissive)
// Geniusee and KhAI: no suitable official source on Wikimedia; use existing assets
const LOGO_SOURCES = {
	companies: {
		chase: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Chase_logo_2007.svg",
		luxoft: "https://upload.wikimedia.org/wikipedia/commons/8/82/Luxoft_Logo.svg",
		mercedes: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
	},
	education: {
		epam: "https://upload.wikimedia.org/wikipedia/commons/d/d6/EPAM_logo.png",
	},
};

async function fetchBuffer(url) {
	return new Promise((resolve, reject) => {
		get(url, { headers: { "User-Agent": "Portfolio/1.0" } }, (res) => {
			const chunks = [];
			res.on("data", (c) => chunks.push(c));
			res.on("end", () => resolve(Buffer.concat(chunks)));
			res.on("error", reject);
		}).on("error", reject);
	});
}

async function fetchAndAdapt(url, outputPath) {
	const buf = await fetchBuffer(url);
	const img = sharp(buf);
	const meta = await img.metadata();
	const { width, height } = meta;
	const scale = Math.min(SIZE / width, SIZE / height);
	const newW = Math.round(width * scale);
	const newH = Math.round(height * scale);
	const resized = await img.resize(newW, newH, { fit: "inside" }).ensureAlpha().toBuffer();
	const left = Math.floor((SIZE - newW) / 2);
	const top = Math.floor((SIZE - newH) / 2);
	// Light gray background for contrast with dark logo content
	const BG = { r: 240, g: 240, b: 240, alpha: 1 };
	await sharp({
		create: {
			width: SIZE,
			height: SIZE,
			channels: 4,
			background: BG,
		},
	})
		.composite([{ input: resized, left, top }])
		.webp({ quality: 90 })
		.toFile(outputPath);
}

async function main() {
	for (const [folder, logos] of Object.entries(LOGO_SOURCES)) {
		const outDir = join(PROJECT_ROOT, "public", "images", folder);
		mkdirSync(outDir, { recursive: true });
		for (const [name, url] of Object.entries(logos)) {
			const outName = `${name}.webp`;
			const outputPath = join(outDir, outName);
			try {
				console.log(`Fetching ${outName}...`);
				await fetchAndAdapt(url, outputPath);
				console.log(`  -> ${outputPath}`);
			} catch (e) {
				console.error(`  ERROR: ${e.message}`);
			}
		}
	}
}

main();
