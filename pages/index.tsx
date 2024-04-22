import { Inter } from "next/font/google";
import Client from "@/components/Client";
import Feature from "@/components/Feature";
import HeroSection from "@/components/HeroSection";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import { useNavitems } from "@/hooks/useNavitems";
import { useFeatures } from "@/hooks/useFeatures";
import { useHeroSection } from "@/hooks/useHeroSection";
import { useTestimonials } from "@/hooks/useTestimonials";
import Tesimonials from "@/components/Tesimonials";
import Faq from "@/components/Faq";

const inter = Inter({ subsets: ["latin"] });

export const revalidate = 60;

export default function Home() {
  const navitems = useNavitems();
  const features = useFeatures();
  const heroSection = useHeroSection();
  const testimonials = useTestimonials();

  return (
    <Client>
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
      >
        <Navbar navitems={navitems} />
        <Container>
          {/* Render hero section if available */}
          {heroSection && <HeroSection heroSection={heroSection[0]} />}
          {/* Render testimonials section */}
          <Tesimonials testimonials={testimonials} />
          {/* Render features */}
          {features?.map((feature) => (
            <Feature key={feature._id} feature={feature} />
          ))}
          {/* Render Faq Section */}
          <Faq />
        </Container>
      </main>
    </Client>
  );
}
