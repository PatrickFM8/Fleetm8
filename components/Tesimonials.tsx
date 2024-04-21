import { Testimonials as testimonialsType } from "@/lib/sanityTypes";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";

interface TestimonialsProps {
  testimonials: testimonialsType[];
}
const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-8 mt-8">
      {testimonials.map((testimonial, index) => (
        <div
          key={testimonial?._id}
          className="flex flex-col bg-[#f4f1ea] p-4 border rounded"
        >
          <p className="mb-4">{testimonial.description}</p>
          <div className="flex justify-center md:justify-start items-center">
            <Image
              src={urlForImage(testimonial?.image.asset)}
              width={80}
              height={80}
              className="rounded-full w-16 h-16 mr-4"
              alt={`testimonial-${index + 1} pic`}
            />
            <p>{testimonial.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
