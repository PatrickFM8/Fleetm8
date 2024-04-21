"use client";
import React from "react";
import Image from "next/image";
import { Feature } from "@/lib/sanityTypes";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

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
            <Image
              src={urlForImage(heroSection?.image.asset)}
              alt={heroSection.title}
              width={500}
              height={500}
              priority={false}
              quality={80}
              placeholder={"empty"}
            />
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
