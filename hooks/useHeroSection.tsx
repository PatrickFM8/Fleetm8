import { useEffect, useState } from "react";
import { Feature } from "@/lib/sanityTypes";
import fetchHerosection from "@/lib/fetchHeroSection";

export const useHeroSection = () => {
  const [heroSection, setHeroSection] = useState<Feature[] | []>([]);
  useEffect(() => {
    const fetchHero = async () => {
      try {
        const fetchedHeroSection = await fetchHerosection();
        setHeroSection(fetchedHeroSection);
      } catch (error) {
        console.error("Error fetching hero section:", error);
      }
    };
    fetchHero();
  }, []);
  return heroSection;
};
