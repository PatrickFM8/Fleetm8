import { useEffect, useState } from "react";
import fetchFeatures from "@/lib/fetchFeatures";
import { Feature } from "@/lib/sanityTypes";

export const useFeatures = () => {
  const [features, setFeatures] = useState<Feature[] | []>([]);
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
  return features;
};
