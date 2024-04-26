"use client";

import { Testimonials as testimonialsType } from "@/lib/sanityTypes";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { client } from "@/sanity/lib/client";

interface TestimonialsProps {
  testimonials: testimonialsType[];
}
const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {

  const sliderRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    //const testimonialCards = slider?.children;
    //testimonial-card
  
    const tl = gsap.timeline({ repeat: -1});
  
    tl.to(slider, {
      xPercent: -100,
      opacity: 0,
      duration: 2,
      ease: 'power2.inOut',
      delay: 3,
      stagger: {
        amount: 0, // No stagger, to slide one testimonial at a time
        
      },
    })/* .to(slider, {
      xPercent: 0, // Reset position
      opacity: 1, // Show next testimonial
      duration: 2, // Immediately show next testimonial
      delay: 3, // Delay before sliding next testimonial
    }); */
  }, []);
  
  
  return (
    <div>
      <h1 className="mt-4 mr-20 w-full mx-auto border border-gray-400 h-.5" />
      <h1 className="mt-16 justify-center text-center items-center text-2xl font-bold ">
        TESTIMONIALS
      </h1>
      
      <div ref={sliderRef} className="slider">
          {testimonials?.map((test) => (
          <div 
             key={test._id}
             className="testimonial-card flex flex-col bg-white mt-8 items-center justify-center"
             >
             <Image
                src={urlForImage(test?.image.asset)}
                alt={test.name}
                width={500}
                height={500}
                priority={false}
                quality={80}
                placeholder={"empty"}
                className="w-16 h-16 rounded-full mb-4 mt-4"
             />

            <p className="flex text-center justify-center p-4">
              {test.description}
            </p>
            <p className="text-center justify-center mb-4">{test.name}</p>
          </div>
           ))}
      </div>
     
    </div>
  );
};

export default Testimonials;
