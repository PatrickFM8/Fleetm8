import Image from "next/image";
import { Inter } from "next/font/google";
import Client from "@/components/Client";
import fetchFeatures from "@/lib/fetchFeatures";
import fetchHeroSection from "@/lib/fetchHeroSection";
import { Feature as featureType } from "@/lib/sanityTypes";
import { useState, useEffect } from "react";
import Feature from "@/components/Feature";
import HeroSection from "@/components/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export const revalidate = 60;

export default function Home() {
  const [features, setFeatures] = useState<featureType[] | null>([]);
  const [heroSection, setHeroSection] = useState<featureType[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedFeatures = await fetchFeatures();
        setFeatures(fetchedFeatures);
      } catch (error) {
        console.error("Error fetching features:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const fetchedHeroSection = await fetchHeroSection();
        setHeroSection(fetchedHeroSection);
      } catch (error) {
        console.error("Error fetching hero section:", error);
      }
    };
    fetchHero();
  }, []);

  return (
    <Client>
      <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
        {/* Render hero section if available */}
        {heroSection && <HeroSection heroSection={heroSection[0]} />}

        {/* Render features */}
        {features?.map((feature) => (
          <Feature key={feature._id} feature={feature} />
        ))}
      </main>
    </Client>
  );
}
