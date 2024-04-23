import { Feature } from "@/lib/sanityTypes";

const fetchFeatures = async () => {
  const res = await fetch(`/api/features`);

  const data = await res.json();
  const features: Feature[] = data.feature;
  return features;
};
export default fetchFeatures;
