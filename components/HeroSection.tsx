"use client";
import React from "react";
import Image from "next/image";
import { Feature } from "@/lib/sanityTypes";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
//import { ParallaxScroll } from "./ui/parallax-scroll";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card"

interface HeroSectionProps {
  children?: React.ReactNode;
  heroSection: Feature;
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroSection }) => {
  return (
    <div className={`mt-4`}>
      <div
        className={`flex py-4 ${
          heroSection?.imageAlignment == "right"
            ? "flex-col md:flex-row-reverse"
            : "flex-col md:flex-row"
        }`}
      >
        {/* Image */}
        <div
          className={`w-full md:w-1/2 py-4 flex justify-${
            heroSection?.imageAlignment === "right" ? "end" : "start"
          } items-center`}
        >
           {heroSection?.image && ( 
            
             <CardContainer className="inter-var">
                 <CardBody className="bg-[#f4f1ea] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  
                    <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                            src={urlForImage(heroSection?.image.asset)}
                            alt={heroSection.title}
                            width={500}
                            height={500}
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            priority={false}
                            quality={80}
                            placeholder={"empty"}
                          />
                      </CardItem>
        
                </CardBody>
              </CardContainer>
            )}  
        
        </div>

            {/* Headline and Button */}
        <div className="md:w-1/2 py-4  items-center">
          <h1 className="font-medium text-2xl">{heroSection?.title}</h1>
          <h1 className="font-medium text-2xl">{heroSection?.subtitle} </h1>
          <br />
          <p className="">{heroSection?.summary}</p>
          <br />
          <br />
          <Link
            href={{
              pathname: "/feature/${feature._id}",
              query: {
                id: heroSection?._id,
                title: heroSection?.title,
                summary: heroSection?.summary,
                createdAT: heroSection?._createdAt,
                subtitle: heroSection?.subtitle,
              },
            }}
            className="bg-black text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm"
          >
            {heroSection?.buttonText}{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;



