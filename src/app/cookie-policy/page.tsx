import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const SITE_URL = "https://alytvynenko.net";
const PROFILE_IMAGE = `${SITE_URL}/images/tm-easy-profile.webp`;

export const metadata: Metadata = {
	title: "Cookie Policy - Andrii Lytvynenko",
	description:
		"Cookie Policy for alytvynenko.net. Learn about the cookies we use, including Google Analytics, and how to manage your preferences.",
	robots: { index: false, follow: true },
	openGraph: {
		title: "Cookie Policy - Andrii Lytvynenko",
		description:
			"Cookie Policy for alytvynenko.net. Learn about the cookies we use, including Google Analytics, and how to manage your preferences.",
		url: `${SITE_URL}/cookie-policy/`,
		images: [{ url: PROFILE_IMAGE, width: 250, height: 250, alt: "Andrii Lytvynenko" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Cookie Policy - Andrii Lytvynenko",
		description:
			"Cookie Policy for alytvynenko.net. Learn about the cookies we use, including Google Analytics, and how to manage your preferences.",
		images: [PROFILE_IMAGE],
	},
};

export default function CookiePolicyPage() {
	return (
		<>
			<Navbar />
			<main id="main-content" className="min-h-screen pt-24 pb-12">
				<div className="mx-auto max-w-3xl px-4 sm:px-6">
					<Link
						href="/"
						className="mb-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-medium text-white transition-colors hover:bg-accent-dark"
					>
						<svg
							className="h-4 w-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M10 19l-7-7m0 0l7-7m-7 7h18"
							/>
						</svg>
						Back to Home
					</Link>

					<article className="rounded-2xl border border-border bg-surface p-8 backdrop-blur-[20px] md:p-12">
						<h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground">
							Cookie Policy
						</h1>
						<p className="mb-8 text-muted">Last updated: February 16, 2026</p>

						<div className="prose prose-lg dark:prose-invert max-w-none">
							<p>
								This Cookie Policy explains how <strong>alytvynenko.net</strong> (the
								&quot;Website&quot;) uses cookies and similar technologies. It
								complements our{" "}
								<Link href="/privacy-policy" className="text-accent hover:underline">
									Privacy Policy
								</Link>
								, which provides broader information about how we collect and use
								your data.
							</p>

							<h2 className="mt-10 border-b border-border pb-2 text-2xl font-bold text-foreground">
								1. Data Controller
							</h2>
							<p>The data controller responsible for cookies on this Website is:</p>
							<div className="my-6 rounded-xl border-l-4 border-accent bg-surface p-6">
								<p className="font-semibold text-foreground">Andrii Lytvynenko</p>
								<p className="text-muted">Czestochowa, Poland</p>
								<p className="text-muted">
									<a
										href="mailto:a.v.lytvynenko2004@gmail.com"
										className="text-accent hover:underline"
									>
										a.v.lytvynenko2004@gmail.com
									</a>
								</p>
							</div>

							<h2 className="mt-10 border-b border-border pb-2 text-2xl font-bold text-foreground">
								2. What Are Cookies?
							</h2>
							<p>
								Cookies are small text files stored on your device when you visit
								a website. They help websites remember your preferences, improve
								performance, and provide analytics. This Website uses cookies only
								after you have given your consent via our cookie banner.
							</p>

							<h2 className="mt-10 border-b border-border pb-2 text-2xl font-bold text-foreground">
								3. Cookies We Use
							</h2>

							<h3 className="mt-6 text-xl font-semibold text-foreground">
								3.1 Essential Cookies
							</h3>
							<p>
								These cookies are necessary for the Website to function. They
								include:
							</p>
							<div className="my-6 overflow-x-auto">
								<table className="w-full border-collapse border border-border">
									<thead>
										<tr>
											<th className="border border-border bg-accent/30 px-4 py-3 text-left font-semibold text-foreground">
												Cookie Name
											</th>
											<th className="border border-border bg-accent/30 px-4 py-3 text-left font-semibold text-foreground">
												Purpose
											</th>
											<th className="border border-border bg-accent/30 px-4 py-3 text-left font-semibold text-foreground">
												Duration
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="border border-border px-4 py-3 text-muted">
												<code className="text-foreground">theme</code>
											</td>
											<td className="border border-border px-4 py-3 text-muted">
												Stores your light/dark theme preference (localStorage)
											</td>
											<td className="border border-border px-4 py-3 text-muted">
												Persistent
											</td>
										</tr>
										<tr>
											<td className="border border-border bg-surface px-4 py-3 text-muted">
												<code className="text-foreground">cookie-consent</code>
											</td>
											<td className="border border-border bg-surface px-4 py-3 text-muted">
												Stores your cookie consent choice (localStorage)
											</td>
											<td className="border border-border bg-surface px-4 py-3 text-muted">
												Persistent
											</td>
										</tr>
									</tbody>
								</table>
							</div>

							<h3 className="mt-6 text-xl font-semibold text-foreground">
								3.2 Analytics Cookies (Google Analytics 4)
							</h3>
							<p>
								When you accept analytics cookies, we use Google Analytics 4 (GA4)
								to understand how visitors use our Website. GA4 sets the
								following first-party cookies:
							</p>
							<div className="my-6 overflow-x-auto">
								<table className="w-full border-collapse border border-border">
									<thead>
										<tr>
											<th className="border border-border bg-accent/30 px-4 py-3 text-left font-semibold text-foreground">
												Cookie Name
											</th>
											<th className="border border-border bg-accent/30 px-4 py-3 text-left font-semibold text-foreground">
												Purpose
											</th>
											<th className="border border-border bg-accent/30 px-4 py-3 text-left font-semibold text-foreground">
												Duration
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="border border-border px-4 py-3 text-muted">
												<code className="text-foreground">_ga</code>
											</td>
											<td className="border border-border px-4 py-3 text-muted">
												Distinguishes unique users
											</td>
											<td className="border border-border px-4 py-3 text-muted">
												2 years
											</td>
										</tr>
										<tr>
											<td className="border border-border bg-surface px-4 py-3 text-muted">
												<code className="text-foreground">_ga_*</code>
											</td>
											<td className="border border-border bg-surface px-4 py-3 text-muted">
												Persists session state (e.g.{" "}
												<code className="text-foreground">_ga_G-LKHDQT8Z81</code>)
											</td>
											<td className="border border-border bg-surface px-4 py-3 text-muted">
												2 years
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<p>
								<strong className="text-foreground">Note:</strong> Browsers may
								limit cookie lifespan. Chrome caps first-party cookies at
								approximately 400 days without a return visit; Safari may limit
								to 7 days. See{" "}
								<a
									href="https://support.google.com/analytics/answer/11397207"
									target="_blank"
									rel="noopener noreferrer"
									className="text-accent hover:underline"
								>
									Google&apos;s GA4 cookie documentation
								</a>{" "}
								for details.
							</p>

							<h2 className="mt-10 border-b border-border pb-2 text-2xl font-bold text-foreground">
								4. Managing Cookies
							</h2>
							<p>You can control cookies in several ways:</p>
							<ul className="list-disc space-y-2 pl-6 text-muted">
								<li>
									<strong className="text-foreground">Cookie banner:</strong> When
									you first visit, you can accept or reject analytics cookies.
								</li>
								<li>
									<strong className="text-foreground">Browser settings:</strong>{" "}
									Most browsers let you view, delete, or block cookies. Check
									your browser&apos;s help section for instructions.
								</li>
								<li>
									<strong className="text-foreground">Google Analytics
									opt-out:</strong> Install the{" "}
									<a
										href="https://tools.google.com/dlpage/gaoptout"
										target="_blank"
										rel="noopener noreferrer"
										className="text-accent hover:underline"
									>
										Google Analytics Opt-out Browser Add-on
									</a>{" "}
									to prevent Google Analytics from collecting data across
									websites.
								</li>
							</ul>
							<p>
								Blocking or deleting cookies may affect the functionality of
								some parts of the Website.
							</p>

							<h2 className="mt-10 border-b border-border pb-2 text-2xl font-bold text-foreground">
								5. Changes to This Cookie Policy
							</h2>
							<p>
								I may update this Cookie Policy from time to time. Any changes
								will be posted on this page with an updated &quot;Last
								updated&quot; date.
							</p>

							<h2 className="mt-10 border-b border-border pb-2 text-2xl font-bold text-foreground">
								6. Contact Me
							</h2>
							<p>
								If you have questions about this Cookie Policy or your cookie
								preferences, please contact me at{" "}
								<a
									href="mailto:a.v.lytvynenko2004@gmail.com"
									className="text-accent hover:underline"
								>
									a.v.lytvynenko2004@gmail.com
								</a>
								.
							</p>

							<div className="mt-12 flex flex-wrap gap-4">
								<Link
									href="/privacy-policy"
									className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-medium text-white transition-colors hover:bg-accent-dark"
								>
									Privacy Policy
								</Link>
								<Link
									href="/"
									className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 font-medium text-foreground transition-colors hover:bg-surface-hover"
								>
									<svg
										className="h-4 w-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M10 19l-7-7m0 0l7-7m-7 7h18"
										/>
									</svg>
									Back to Home
								</Link>
							</div>
						</div>
					</article>
				</div>
			</main>
			<Footer />
		</>
	);
}
