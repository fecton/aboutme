"use client";

interface AudioPlayerProps {
	src: string;
	title?: string;
}

export function AudioPlayer({ src, title }: AudioPlayerProps) {
	return (
		<figure className="my-8 overflow-hidden rounded-xl border border-border bg-surface p-4">
			{title && (
				<figcaption className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
					<svg
						className="h-4 w-4 shrink-0 text-accent"
						fill="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
					</svg>
					{title}
				</figcaption>
			)}
			<audio controls preload="metadata" className="w-full" src={src}>
				<a href={src} download>
					Download audio
				</a>
			</audio>
		</figure>
	);
}
