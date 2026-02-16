import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const SITE_URL = "https://alytvynenko.net";
const PROFILE_IMAGE = `${SITE_URL}/images/tm-easy-profile.webp`;

export const metadata: Metadata = {
	title: "Privacy Policy - Andrii Lytvynenko",
	description:
		"Privacy Policy for Andrii Lytvynenko's personal website. Learn how we handle your data, cookies, and your rights under GDPR.",
	robots: { index: false, follow: true },
	openGraph: {
		title: "Privacy Policy - Andrii Lytvynenko",
		description:
			"Privacy Policy for Andrii Lytvynenko's personal website. Learn how we handle your data, cookies, and your rights under GDPR.",
		url: `${SITE_URL}/privacy-policy/`,
		images: [{ url: PROFILE_IMAGE, width: 250, height: 250, alt: "Andrii Lytvynenko" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Privacy Policy - Andrii Lytvynenko",
		description:
			"Privacy Policy for Andrii Lytvynenko's personal website. Learn how we handle your data, cookies, and your rights under GDPR.",
		images: [PROFILE_IMAGE],
	},
};

export default function PrivacyPolicyPage() {
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
							Privacy Policy
						</h1>
						<p className="mb-8 text-muted">Last updated: January 19, 2026</p>

						<div className="prose prose-lg dark:prose-invert max-w-none">
							<p>
								Welcome to <strong>alytvynenko.net</strong> (the &quot;Website&quot;),
								operated by Andrii Lytvynenko (&quot;I&quot;, &quot;me&quot;, or
								&quot;my&quot;). I am committed to protecting your privacy and
								handling your personal data in compliance with the General Data
								Protection Regulation (GDPR) and other applicable data protection
								laws.
							</p>

							<p>
								This Privacy Policy explains how I collect, use, and protect
								information when you visit my Website.
							</p>

							<h2 className="mt-10 border-b border-border pb-2 text-2xl font-bold text-foreground">
								1. Data Controller
							</h2>
							<p>The data controller responsible for your personal data is:</p>
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
								2. Information I Collect
							</h2>

							<h3 className="mt-6 text-xl font-semibold text-foreground">
								2.1 Information Collected Automatically
							</h3>
							<p>
								When you visit my Website, certain information is collected
								automatically through cookies and similar technologies:
							</p>
							<ul className="list-disc space-y-2 pl-6 text-muted">
								<li>
									<strong className="text-foreground">Device Information:</strong>{" "}
									Browser type, operating system, device type, screen resolution
								</li>
								<li>
									<strong className="text-foreground">Usage Data:</strong> Pages
									visited, time spent on pages, click patterns, scroll depth
								</li>
								<li>
									<strong className="text-foreground">Technical Data:</strong> IP
									address (anonymized), referring URL, date and time of visit
								</li>
								<li>
									<strong className="text-foreground">Location Data:</strong> General
									geographic location (country/region level only)
								</li>
							</ul>

							<h3 className="mt-6 text-xl font-semibold text-foreground">
								2.2 Information You Provide
							</h3>
							<p>
								This Website does not have contact forms or user registration. If
								you contact me via email or other means listed on the Website, I
								may collect:
							</p>
							<ul className="list-disc space-y-2 pl-6 text-muted">
								<li>Your name and email address</li>
								<li>Any other information you choose to provide in your message</li>
							</ul>

							<h2 className="mt-10 border-b border-border pb-2 text-2xl font-bold text-foreground">
								3. Analytics Services
							</h2>
							<p>
								I use the following third-party analytics services to understand
								how visitors interact with my Website:
							</p>
							<p>
								This Website uses Google Analytics 4, a web analytics service
								provided by Google LLC. Google Analytics uses cookies to analyze
								your use of the Website.
							</p>
							<div className="my-6 rounded-xl border-l-4 border-accent bg-surface p-4">
								<strong className="text-foreground">Data Collected:</strong> Page
								views, session duration, bounce rate, traffic sources, demographic
								information (age, gender, interests), device and browser
								information.
							</div>
							<p>
								Google may transfer this data to servers in the United States.
								Google is certified under the EU-U.S. Data Privacy Framework.
							</p>
							<p>
								Learn more:{" "}
								<a
									href="https://policies.google.com/privacy"
									target="_blank"
									rel="noopener noreferrer"
									className="text-accent hover:underline"
								>
									Google Privacy Policy
								</a>
							</p>
							<p>
								Opt-out:{" "}
								<a
									href="https://tools.google.com/dlpage/gaoptout"
									target="_blank"
									rel="noopener noreferrer"
									className="text-accent hover:underline"
								>
									Google Analytics Opt-out Browser Add-on
								</a>
							</p>

							<h2 className="mt-10 border-b border-border pb-2 text-2xl font-bold text-foreground">
								4. Cookies
							</h2>
							<p>
								Cookies are small text files stored on your device when you visit
								a website. This Website uses the following types of cookies:
							</p>
							<div className="my-6 overflow-x-auto">
								<table className="w-full border-collapse border border-border">
									<thead>
										<tr>
											<th className="border border-border bg-accent/30 px-4 py-3 text-left font-semibold text-foreground">
												Cookie Type
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
												<strong className="text-foreground">Essential</strong>
											</td>
											<td className="border border-border px-4 py-3 text-muted">
												Required for the Website to function properly (e.g.,
												service worker)
											</td>
											<td className="border border-border px-4 py-3 text-muted">
												Session
											</td>
										</tr>
										<tr>
											<td className="border border-border bg-surface px-4 py-3 text-muted">
												<strong className="text-foreground">Analytics (Google)</strong>
											</td>
											<td className="border border-border bg-surface px-4 py-3 text-muted">
												Measure Website traffic and user behavior
											</td>
											<td className="border border-border bg-surface px-4 py-3 text-muted">
												Up to 2 years
											</td>
										</tr>
									</tbody>
								</table>
							</div>

							<h3 className="mt-6 text-xl font-semibold text-foreground">
								Managing Cookies
							</h3>
							<p>
								You can control cookies through your browser settings. Most
								browsers allow you to:
							</p>
							<ul className="list-disc space-y-2 pl-6 text-muted">
								<li>View and delete existing cookies</li>
								<li>Block all cookies or third-party cookies</li>
								<li>Set preferences for specific websites</li>
							</ul>
							<p>
								Please note that blocking cookies may affect the functionality of
								some websites.
							</p>

							<h2 className="mt-10 border-b border-border pb-2 text-2xl font-bold text-foreground">
								5. Legal Basis for Processing
							</h2>
							<p>
								Under the GDPR, I process your personal data based on the
								following legal grounds:
							</p>
							<ul className="list-disc space-y-2 pl-6 text-muted">
								<li>
									<strong className="text-foreground">Legitimate Interest (Art.
									6(1)(f) GDPR):</strong> For analytics purposes to improve the
									Website and understand visitor behavior. I have conducted a
									balancing test to ensure my interests do not override your
									rights.
								</li>
								<li>
									<strong className="text-foreground">Contract Performance (Art.
									6(1)(b) GDPR):</strong> When you contact me regarding potential
									B2B collaboration or services.
								</li>
								<li>
									<strong className="text-foreground">Consent (Art. 6(1)(a)
									GDPR):</strong> Where explicitly obtained for specific
									processing activities.
								</li>
							</ul>

							<h2 className="mt-10 border-b border-border pb-2 text-2xl font-bold text-foreground">
								6. How I Use Your Information
							</h2>
							<p>I use the collected information for the following purposes:</p>
							<ul className="list-disc space-y-2 pl-6 text-muted">
								<li>To analyze Website traffic and user behavior</li>
								<li>
									To improve the Website&apos;s content, design, and user
									experience
								</li>
								<li>To respond to your inquiries or communications</li>
								<li>To ensure the security and proper functioning of the Website</li>
								<li>To comply with legal obligations</li>
							</ul>

							<h2 className="mt-10 border-b border-border pb-2 text-2xl font-bold text-foreground">
								7. Data Sharing
							</h2>
							<p>
								I do not sell, trade, or rent your personal data to third
								parties. Your data may be shared with:
							</p>
							<ul className="list-disc space-y-2 pl-6 text-muted">
								<li>
									<strong className="text-foreground">Analytics Providers:</strong>{" "}
									Google, as described above
								</li>
								<li>
									<strong className="text-foreground">Hosting Provider:</strong>{" "}
									GitHub Pages, which hosts this Website
								</li>
								<li>
									<strong className="text-foreground">Legal Authorities:</strong> If
									required by law or to protect my rights
								</li>
							</ul>

							<h2 className="mt-10 border-b border-border pb-2 text-2xl font-bold text-foreground">
								8. International Data Transfers
							</h2>
							<p>
								Your data may be transferred to and processed in countries
								outside the European Economic Area (EEA), particularly the
								United States. When such transfers occur, I ensure appropriate
								safeguards are in place:
							</p>
							<ul className="list-disc space-y-2 pl-6 text-muted">
								<li>EU-U.S. Data Privacy Framework certification (Google)</li>
								<li>
									Standard Contractual Clauses approved by the European
									Commission
								</li>
							</ul>

							<h2 className="mt-10 border-b border-border pb-2 text-2xl font-bold text-foreground">
								9. Data Retention
							</h2>
							<p>
								I retain your personal data only for as long as necessary to
								fulfill the purposes described in this Privacy Policy:
							</p>
							<ul className="list-disc space-y-2 pl-6 text-muted">
								<li>
									<strong className="text-foreground">Analytics Data:</strong> Up to
									26 months (Google Analytics default retention)
								</li>
								<li>
									<strong className="text-foreground">Email Communications:</strong>{" "}
									As long as necessary for business purposes or as required by
									law
								</li>
								<li>
									<strong className="text-foreground">Server Logs:</strong> Typically
									90 days
								</li>
							</ul>

							<h2 className="mt-10 border-b border-border pb-2 text-2xl font-bold text-foreground">
								10. Your Rights (GDPR)
							</h2>
							<p>
								As a data subject under the GDPR, you have the following rights:
							</p>
							<ul className="list-disc space-y-2 pl-6 text-muted">
								<li>
									<strong className="text-foreground">Right of Access (Art.
									15):</strong> Request a copy of your personal data
								</li>
								<li>
									<strong className="text-foreground">Right to Rectification (Art.
									16):</strong> Request correction of inaccurate data
								</li>
								<li>
									<strong className="text-foreground">Right to Erasure (Art.
									17):</strong> Request deletion of your data (&quot;right to be
									forgotten&quot;)
								</li>
								<li>
									<strong className="text-foreground">Right to Restrict Processing
									(Art. 18):</strong> Request limitation of data processing
								</li>
								<li>
									<strong className="text-foreground">Right to Data Portability (Art.
									20):</strong> Receive your data in a structured format
								</li>
								<li>
									<strong className="text-foreground">Right to Object (Art.
									21):</strong> Object to processing based on legitimate interests
								</li>
								<li>
									<strong className="text-foreground">Right to Withdraw Consent:</strong>{" "}
									Where processing is based on consent
								</li>
							</ul>

							<div className="my-6 rounded-xl border-l-4 border-accent bg-surface p-4">
								To exercise any of these rights, please contact me at{" "}
								<a
									href="mailto:a.v.lytvynenko2004@gmail.com"
									className="text-accent hover:underline"
								>
									a.v.lytvynenko2004@gmail.com
								</a>
								. I will respond to your request within 30 days.
							</div>

							<p>
								You also have the right to lodge a complaint with a supervisory
								authority. In Poland, this is the{" "}
								<strong className="text-foreground">
									President of the Personal Data Protection Office (UODO)
								</strong>
								:{" "}
								<a
									href="https://uodo.gov.pl"
									target="_blank"
									rel="noopener noreferrer"
									className="text-accent hover:underline"
								>
									uodo.gov.pl
								</a>
							</p>

							<h2 className="mt-10 border-b border-border pb-2 text-2xl font-bold text-foreground">
								11. Security
							</h2>
							<p>
								I implement appropriate technical and organizational measures to
								protect your personal data, including:
							</p>
							<ul className="list-disc space-y-2 pl-6 text-muted">
								<li>HTTPS encryption for all data transmission</li>
								<li>Content Security Policy (CSP) headers</li>
								<li>Regular security reviews</li>
								<li>Limited access to personal data</li>
							</ul>
							<p>
								However, no method of transmission over the Internet is 100%
								secure. I cannot guarantee absolute security of your data.
							</p>

							<h2 className="mt-10 border-b border-border pb-2 text-2xl font-bold text-foreground">
								12. Children&apos;s Privacy
							</h2>
							<p>
								This Website is not directed at children under 16 years of age. I
								do not knowingly collect personal data from children. If you
								believe I have collected data from a child, please contact me
								immediately.
							</p>

							<h2 className="mt-10 border-b border-border pb-2 text-2xl font-bold text-foreground">
								13. Third-Party Links
							</h2>
							<p>
								This Website contains links to external websites (LinkedIn,
								GitHub, etc.). I am not responsible for the privacy practices of
								these third-party sites. I encourage you to review their privacy
								policies.
							</p>

							<h2 className="mt-10 border-b border-border pb-2 text-2xl font-bold text-foreground">
								14. Changes to This Privacy Policy
							</h2>
							<p>
								I may update this Privacy Policy from time to time. Any changes
								will be posted on this page with an updated &quot;Last
								updated&quot; date. Significant changes may be communicated
								through the Website.
							</p>

							<h2 className="mt-10 border-b border-border pb-2 text-2xl font-bold text-foreground">
								15. Contact Me
							</h2>
							<p>
								If you have any questions, concerns, or requests regarding this
								Privacy Policy or your personal data, please contact me:
							</p>
							<div className="my-6 rounded-xl border-l-4 border-accent bg-surface p-6">
								<p className="font-semibold text-foreground">Andrii Lytvynenko</p>
								<p className="text-muted">
									Email:{" "}
									<a
										href="mailto:a.v.lytvynenko2004@gmail.com"
										className="text-accent hover:underline"
									>
										a.v.lytvynenko2004@gmail.com
									</a>
								</p>
								<p className="text-muted">
									LinkedIn:{" "}
									<a
										href="https://www.linkedin.com/in/andrii-fecton/"
										target="_blank"
										rel="noopener noreferrer"
										className="text-accent hover:underline"
									>
										linkedin.com/in/andrii-fecton
									</a>
								</p>
							</div>

							<div className="mt-12 text-center">
								<Link
									href="/"
									className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-medium text-white transition-colors hover:bg-accent-dark"
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
