"use client";

import { Testimonials as testimonialsType } from "@/lib/sanityTypes";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

interface TestimonialsProps {
  testimonials: testimonialsType[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {

  const testimonialArray: { quote: string, name: string, title: string }[] = [];
  
  testimonials.forEach(testimonial => {
    testimonialArray.push({
      quote: testimonial.description,
      name: testimonial.name,
      title: testimonial.name,
    });
  });
  
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonialArray}
        direction="right"
        speed="fast"
      />
    </div>
  );
};

export default Testimonials;
