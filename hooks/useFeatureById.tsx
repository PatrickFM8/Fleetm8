import { Feature } from "@/lib/sanityTypes";
import { useEffect, useState } from "react";

export const useFeatureById = (id: any) => {
  const [feature, setFeature] = useState<Feature[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/featureById?id=${id}`);
        const data = await res.json();
        setFeature(data.feature);
      } catch (error) {
        console.error("Error fetching feature by Id:", error);
      }
    };

    fetchData();
  }, []);

  return feature;
};
