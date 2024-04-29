"use client";

import { Testimonials as testimonialsType } from "@/lib/sanityTypes";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import gsap from 'gsap';
import { useState, useEffect } from "react";
//import { client } from "@/sanity/lib/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


interface TestimonialsProps {
  testimonials: testimonialsType[];
}
const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    console.log("Setting up interval...");
    const interval = setInterval(() => {
    
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    console.log("Clearing interval...");
    return () => clearInterval(interval);
    
  }, [testimonials.length]);
  
  return (
    <div>
      <h1 className="mt-4 mr-20 w-full mx-auto border border-gray-400 h-.5" />
      <h1 className="mt-16 justify-center text-center items-center text-2xl font-bold ">
        TESTIMONIALS
      </h1>
      
      <div >

         <Carousel>
            <CarouselContent>
               {testimonials?.map((test, index) => (
              <CarouselItem key={test._id} style={{ display: index === activeIndex ? "block" : "none" }}>
                
              <div 
                  
                  className="flex flex-col bg-white mt-8 items-center justify-center"
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


              </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel> 
          
    
          
      </div>
     
    </div>
  );
};

export default Testimonials;

