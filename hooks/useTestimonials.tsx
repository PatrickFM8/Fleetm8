import { useEffect, useState } from "react";
import fetchTestomonials from "@/lib/fetchTestimonials";
import { Testimonials } from "@/lib/sanityTypes";

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonials[] | []>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedTestimonials = await fetch('/api/testimonials');
        const data = await fetchedTestimonials.json();
        const testimonials: Testimonials[] = data.testimonials;
        setTestimonials(testimonials);
      } catch (error) {
        console.error("Error fetching features:", error);
      }
    };
    fetchData();
  }, []);
  return testimonials;
};
