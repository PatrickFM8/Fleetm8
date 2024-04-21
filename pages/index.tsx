import { Inter } from "next/font/google";
import Client from "@/components/Client";
import Feature from "@/components/Feature";
import HeroSection from "@/components/HeroSection";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import { useNavitems } from "@/hooks/useNavitems";
import { useFeatures } from "@/hooks/useFeatures";
import { useHeroSection } from "@/hooks/useHeroSection";

const inter = Inter({ subsets: ["latin"] });

export const revalidate = 60;

export default function Home() {
  const navitems = useNavitems();
  const features = useFeatures();
  const heroSection = useHeroSection();

  return (
    <Client>
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
      >
        {/* Render hero section if available */}
        <Navbar navitems={navitems} />
        <Container>
          {heroSection && <HeroSection heroSection={heroSection[0]} />}

          {/* Render features */}
          {features?.map((feature) => (
            <Feature key={feature._id} feature={feature} />
          ))}
        </Container>
      </main>
    </Client>
  );
}
