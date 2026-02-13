import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
import { BentoGrid } from "@/components/bento/BentoGrid";

export default function Home() {
	return (
		<>
			<Navbar />
			<main id="main-content">
				<HeroSection />
				<BentoGrid />
			</main>
			<Footer />
		</>
	);
}
