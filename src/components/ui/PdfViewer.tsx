interface PdfViewerProps {
	src: string;
	title: string;
}

export function PdfViewer({ src, title }: PdfViewerProps) {
	return (
		<iframe
			src={src}
			title={title}
			className="h-[calc(100vh-12rem)] w-full rounded-xl border border-border"
		/>
	);
}
