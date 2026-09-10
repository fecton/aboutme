import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ReduceEffectsProvider } from "@/components/providers/ReduceEffectsProvider";
import { ConsentProvider } from "@/components/providers/ConsentProvider";
import { homePageMeta } from "@/data/seo";
import { personJsonLd } from "@/lib/json-ld";
import "./globals.css";

const SITE_URL = "https://alytvynenko.net";
const PROFILE_IMAGE = `${SITE_URL}/images/tm-easy-profile.webp`;

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: homePageMeta.title,
	description: homePageMeta.description,
	keywords: [
		"DevOps consultant",
		"Cloud infrastructure consultant",
		"B2B DevOps contractor",
		"Remote DevOps engineer",
		"AWS consultant",
		"Kubernetes expert",
		"Terraform specialist",
		"DevOps Poland",
		"EU-based DevOps",
		"Cloud migration consultant",
		"Infrastructure as Code",
		"CI/CD pipeline expert",
	],
	authors: [{ name: "Andrii Lytvynenko" }],
	creator: "Andrii Lytvynenko",
	openGraph: {
		title: homePageMeta.ogTitle,
		description: homePageMeta.ogDescription,
		url: SITE_URL,
		siteName: "Andrii Lytvynenko - DevOps & Cloud Engineering Services",
		images: [
			{
				url: PROFILE_IMAGE,
				width: 250,
				height: 250,
				alt: "Andrii Lytvynenko - Senior DevOps Engineer with AWS and Kubernetes expertise",
			},
		],
		locale: "en_US",
		type: "profile",
	},
	twitter: {
		card: "summary_large_image",
		title: homePageMeta.ogTitle,
		description: homePageMeta.ogDescription,
		images: [PROFILE_IMAGE],
		creator: "@fecton",
	},
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: SITE_URL,
	},
	manifest: "/manifest.json",
	icons: {
		icon: [
			{ url: "/images/favicon.svg", type: "image/svg+xml" },
			{ url: "/images/favicon.ico", sizes: "any" },
		],
		apple: "/images/apple-touch-icon.png",
	},
	appleWebApp: {
		statusBarStyle: "default",
	},
};

export const viewport: Viewport = {
	themeColor: "#3366CC",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				{/* Strip Dark Reader / extension-injected attributes before React hydrates to avoid hydration mismatch */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
(function(){
	function clean(el){
		if(!el||!el.removeAttribute)return;
		if(el.hasAttribute('data-darkreader-inline-stroke'))el.removeAttribute('data-darkreader-inline-stroke');
		if(el.hasAttribute('data-darkreader-inline-color'))el.removeAttribute('data-darkreader-inline-color');
		if(el.style){
			if(el.style.getPropertyValue('--darkreader-inline-stroke'))el.style.removeProperty('--darkreader-inline-stroke');
			if(el.style.getPropertyValue('--darkreader-inline-color'))el.style.removeProperty('--darkreader-inline-color');
		}
	}
	function run(){
		if(document.querySelectorAll)document.querySelectorAll('svg,img').forEach(clean);
	}
	function start(){
		run();
		var obs=new MutationObserver(run);
		obs.observe(document.documentElement,{attributes:true,subtree:true,attributeFilter:['style','data-darkreader-inline-stroke','data-darkreader-inline-color']});
		setTimeout(function(){obs.disconnect();},500);
	}
	if(document.readyState==='loading'){
		document.addEventListener('DOMContentLoaded',start);
	}else{
		start();
	}
})();
						`.trim(),
					}}
				/>
			</head>
			<body suppressHydrationWarning>
				<ConsentProvider>
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify(personJsonLd),
						}}
					/>
					<a href="#main-content" className="skip-link">
						Skip to main content
					</a>
					<ThemeProvider>
						<ReduceEffectsProvider>{children}</ReduceEffectsProvider>
					</ThemeProvider>
				</ConsentProvider>
			</body>
		</html>
	);
}
