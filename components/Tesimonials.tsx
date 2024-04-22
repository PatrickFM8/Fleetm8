import { Testimonials as testimonialsType } from "@/lib/sanityTypes";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";

interface TestimonialsProps {
  testimonials: testimonialsType[];
}
const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <div>
      <h1 className="mt-4 mr-20 w-full mx-auto border border-gray-400 h-.5" />
      <h1 className="mt-16 justify-center text-center items-center text-2xl font-bold ">
        TESTIMONIALS
      </h1>
      {testimonials?.map((test) => (
        <div
          key={test._id}
          className="flex flex-col bg-white mt-8
      items-center justify-center"
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
  );
};

export default Testimonials;
