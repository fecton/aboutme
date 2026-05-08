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
		>
			<p className="p-4 text-muted">
				Your browser does not support inline PDFs.{" "}
				<a href={src} className="text-accent hover:underline">
					Download the PDF
				</a>{" "}
				to view it.
			</p>
		</iframe>
	);
}
