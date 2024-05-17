import { useEffect, useState } from "react";
import { HeroSection } from "@/lib/sanityTypes";

export const useHeroSectionById = (id : any) => {
  const [heroSection, setHeroSection] = useState<HeroSection[] | []>([]);
  useEffect(() => {
    const fetchHero = async () => {
      try {
        const fetchedHeroSection = await fetch(`/api/heroSectionById?id=${id}`); 
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
