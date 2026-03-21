"use client";

interface VideoPlayerProps {
	src: string;
	title?: string;
	poster?: string;
}

export function VideoPlayer({ src, title, poster }: VideoPlayerProps) {
	return (
		<figure className="my-8">
			<div className="overflow-hidden rounded-xl border border-border">
				<video
					controls
					preload="metadata"
					poster={poster}
					className="aspect-video w-full"
					src={src}
				>
					<a href={src} download>
						Download video
					</a>
				</video>
			</div>
			{title && (
				<figcaption className="mt-2 text-center text-sm text-muted">
					{title}
				</figcaption>
			)}
		</figure>
	);
}
