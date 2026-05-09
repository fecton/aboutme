import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
	return (
		<>
			<Navbar />
			<main
				id="main-content"
				className="flex min-h-screen flex-col items-center justify-center px-4 pt-24 pb-12 text-center"
			>
				<h1 className="mb-2 text-6xl font-bold tracking-tight text-foreground">
					404
				</h1>
				<p className="mb-8 text-lg text-muted">
					The page you are looking for does not exist.
				</p>
				<Link
					href="/"
					className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-border bg-accent px-6 py-3 font-medium text-white transition-all hover:bg-accent-dark focus-visible:ring-2 focus-visible:ring-border"
				>
					Go Home
				</Link>
			</main>
			<Footer />
		</>
	);
}
