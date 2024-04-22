import { Feature } from "@/lib/sanityTypes";
import { useEffect, useState } from "react";

export const useFeatures = () => {
  const [features, setFeatures] = useState<Feature[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/features`);
        const data = await res.json();
        setFeatures(data.feature);
      } catch (error) {
        console.error("Error fetching features:", error);
      }
    };

    fetchData();
  }, []);

  return features;
};
