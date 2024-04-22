import { useEffect, useState } from "react";
import { HeroSection } from "@/lib/sanityTypes";

export const useHeroSection = () => {
  const [heroSection, setHeroSection] = useState<HeroSection[] | []>([]);
  useEffect(() => {
    const fetchHero = async () => {
      try {
        const fetchedHeroSection = await fetch('/api/heroSection');
        const data = await fetchedHeroSection.json();
        const heroSection: HeroSection[] = data.heroSection;
        setHeroSection(heroSection);
      } catch (error) {
        console.error("Error fetching hero section:", error);
      }
    };
    fetchHero();
  }, []);
  return heroSection;
};
