import type { MDXComponents as MDXComponentsType } from "mdx/types";
import Image from "next/image";
import type { ComponentPropsWithoutRef } from "react";
import { CodeBlock } from "@/components/blog/CopyCodeButton";
import { AudioPlayer } from "@/components/blog/AudioPlayer";
import { VideoPlayer } from "@/components/blog/VideoPlayer";
import { PlantUML } from "@/components/blog/PlantUML";

function CustomImage(props: ComponentPropsWithoutRef<"img">) {
	const { src, alt, width, height } = props;
	if (!src || typeof src !== "string") return null;

	return (
		<figure className="my-8">
			<Image
				src={src}
				alt={alt ?? ""}
				width={Number(width) || 800}
				height={Number(height) || 450}
				className="rounded-lg"
				loading="lazy"
			/>
			{alt && (
				<figcaption className="mt-2 text-center text-sm text-muted">
					{alt}
				</figcaption>
			)}
		</figure>
	);
}

function CustomLink(props: ComponentPropsWithoutRef<"a">) {
	const { href, children, ...rest } = props;
	const isExternal = href?.startsWith("http");

	if (isExternal) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				{...rest}
			>
				{children}
			</a>
		);
	}

	return (
		<a href={href} {...rest}>
			{children}
		</a>
	);
}

function CustomTable(props: ComponentPropsWithoutRef<"table">) {
	return (
		<div className="my-6 overflow-x-auto rounded-lg border border-border">
			<table {...props} />
		</div>
	);
}

export const mdxComponents: MDXComponentsType = {
	img: CustomImage as never,
	a: CustomLink,
	table: CustomTable,
	pre: CodeBlock as never,
	AudioPlayer,
	VideoPlayer,
	PlantUML,
};
