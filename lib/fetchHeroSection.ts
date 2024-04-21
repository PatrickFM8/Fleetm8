import { Feature } from "@/lib/sanityTypes";

const fetchHerosection = async () => {
  const res = await fetch(`/api/heroSection`);

  const data = await res.json();
  const heroSection: Feature[] = data.heroSection;
  return heroSection;
};

export default fetchHerosection;
