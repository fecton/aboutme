import { deflateRawSync } from "zlib";
import type { ReactNode } from "react";

const PLANTUML_ALPHABET =
	"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";

function encode6bit(b: number): string {
	return PLANTUML_ALPHABET[b & 0x3f];
}

function append3bytes(b1: number, b2: number, b3: number): string {
	const c1 = b1 >> 2;
	const c2 = ((b1 & 0x3) << 4) | (b2 >> 4);
	const c3 = ((b2 & 0xf) << 2) | (b3 >> 6);
	const c4 = b3 & 0x3f;
	return encode6bit(c1) + encode6bit(c2) + encode6bit(c3) + encode6bit(c4);
}

function encodePlantUML(data: Buffer): string {
	let result = "";
	for (let i = 0; i < data.length; i += 3) {
		if (i + 2 === data.length) {
			result += append3bytes(data[i], data[i + 1], 0);
		} else if (i + 1 === data.length) {
			result += append3bytes(data[i], 0, 0);
		} else {
			result += append3bytes(data[i], data[i + 1], data[i + 2]);
		}
	}
	return result;
}

function plantUmlUrl(code: string): string {
	const deflated = deflateRawSync(Buffer.from(code, "utf-8"), { level: 9 });
	const encoded = encodePlantUML(deflated);
	return `https://www.plantuml.com/plantuml/svg/${encoded}`;
}

function extractText(node: ReactNode): string {
	if (typeof node === "string") return node;
	if (typeof node === "number") return String(node);
	if (Array.isArray(node)) return node.map(extractText).join("");
	if (node && typeof node === "object" && "props" in node) {
		return extractText((node as { props: { children?: ReactNode } }).props.children);
	}
	return "";
}

interface PlantUMLProps {
	children?: ReactNode;
	code?: string;
	alt?: string;
}

export function PlantUML({ children, code, alt }: PlantUMLProps) {
	const source = code ?? extractText(children);
	if (!source.trim()) return null;

	const src = plantUmlUrl(source.trim());

	return (
		<figure className="my-8">
			<div className="overflow-hidden rounded-xl border border-border bg-surface p-4">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={src}
					alt={alt ?? "PlantUML diagram"}
					loading="lazy"
					className="mx-auto max-w-full"
				/>
			</div>
			{alt && (
				<figcaption className="mt-2 text-center text-sm text-muted">
					{alt}
				</figcaption>
			)}
		</figure>
	);
}
