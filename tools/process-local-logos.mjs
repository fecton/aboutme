#!/usr/bin/env node
/**
 * Process local PNG images into WebP logos for the project.
 * Usage: node tools/process-local-logos.mjs <geniusee.png> <khai.png>
 * Or with default paths for Cursor assets.
 */

import { readFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { homedir } from "os";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, "..");
const SIZE = 80;
const ASSETS = join(
	homedir(),
	".cursor/projects/Users-alytvynenko-Desktop-Repositories-aboutme/assets"
);

const DEFAULT_SOURCES = [
	{
		src: join(ASSETS, "image-571e02f9-67cc-44ff-881c-34fc88f82952.png"),
		out: join(PROJECT_ROOT, "public/images/companies/geniusee.webp"),
	},
	{
		src: join(ASSETS, "image-f16ea19e-19ea-46f2-bdaa-40fc527d5ff0.png"),
		out: join(PROJECT_ROOT, "public/images/education/khai.webp"),
	},
	{
		src: join(ASSETS, "JP-Morgan-Logo-No-Background-1b42bf3c-7501-421c-8680-b667ac1c2177.png"),
		out: join(PROJECT_ROOT, "public/images/companies/chase.webp"),
		makeBlackTransparent: true,
	},
	{
		src: join(ASSETS, "Effective_Programming_for_America_logo.svg-13a41a5e-e54f-4a46-a2aa-ae449b0a264f.png"),
		out: join(PROJECT_ROOT, "public/images/education/epam.webp"),
	},
];

async function makeBlackTransparent(inputBuf) {
	const { data, info } = await sharp(inputBuf)
		.ensureAlpha()
		.raw()
		.toBuffer({ resolveWithObject: true });
	const { width, height, channels } = info;
	const threshold = 25;
	for (let i = 0; i < data.length; i += channels) {
		const r = data[i];
		const g = data[i + 1];
		const b = data[i + 2];
		if (r < threshold && g < threshold && b < threshold) {
			data[i + 3] = 0;
		}
	}
	return sharp(data, { raw: { width, height, channels } }).png().toBuffer();
}

async function processImage(srcPath, outPath, options = {}) {
	let buf = readFileSync(srcPath);
	if (options.makeBlackTransparent) {
		buf = await makeBlackTransparent(buf);
	}
	const img = sharp(buf);
	const meta = await img.metadata();
	const scale = Math.min(SIZE / meta.width, SIZE / meta.height);
	const newW = Math.round(meta.width * scale);
	const newH = Math.round(meta.height * scale);
	const resized = await img.resize(newW, newH, { fit: "inside" }).ensureAlpha().toBuffer();
	const left = Math.floor((SIZE - newW) / 2);
	const top = Math.floor((SIZE - newH) / 2);
	mkdirSync(dirname(outPath), { recursive: true });
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
		.toFile(outPath);
}

async function main() {
	const sources = process.argv.length >= 4
		? [
				{ src: process.argv[2], out: join(PROJECT_ROOT, "public/images/companies/geniusee.webp") },
				{ src: process.argv[3], out: join(PROJECT_ROOT, "public/images/education/khai.webp") },
			]
		: DEFAULT_SOURCES;

	for (const entry of sources) {
		const { src, out, ...opts } = entry;
		try {
			console.log(`Processing ${src} -> ${out}`);
			await processImage(src, out, opts);
			console.log("  Done");
		} catch (e) {
			console.error(`  ERROR: ${e.message}`);
		}
	}
}

main();
