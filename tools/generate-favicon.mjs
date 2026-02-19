#!/usr/bin/env node
/**
 * Generates favicon set from SVG source.
 * Run: node tools/generate-favicon.mjs
 * Requires: sharp, to-ico
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import toIco from "to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "public", "images");
const SVG_PATH = path.join(__dirname, "favicon-source.svg");

async function main() {
	fs.mkdirSync(OUT_DIR, { recursive: true });
	const svg = fs.readFileSync(SVG_PATH);

	// favicon.ico (16, 32, 48)
	const png16 = await sharp(svg).resize(16, 16).png().toBuffer();
	const png32 = await sharp(svg).resize(32, 32).png().toBuffer();
	const png48 = await sharp(svg).resize(48, 48).png().toBuffer();
	const ico = await toIco([png16, png32, png48]);
	fs.writeFileSync(path.join(OUT_DIR, "favicon.ico"), ico);

	// PWA icons
	await sharp(svg).resize(192, 192).png().toFile(path.join(OUT_DIR, "icon-192.png"));
	await sharp(svg).resize(512, 512).png().toFile(path.join(OUT_DIR, "icon-512.png"));

	// Apple touch icon (180x180)
	await sharp(svg).resize(180, 180).png().toFile(path.join(OUT_DIR, "apple-touch-icon.png"));

	console.log("Favicon set generated in public/images/");
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
