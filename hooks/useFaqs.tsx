import { Faqs } from "@/lib/sanityTypes";
import React, { useEffect } from "react";

export const useFaqs = () => {
  const [faqs, setFaqs] = React.useState<Faqs[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedFaqs = await fetch("/api/faqs");
        const data = await fetchedFaqs.json();
        const faqs: Faqs[] = data.faqs;
        setFaqs(faqs);
      } catch (error) {
        console.error("Error fetching faqs:", error);
      }
    };
    fetchData();
  }, []);
  return faqs;
};
