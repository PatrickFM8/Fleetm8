"use client";
import React from "react";
import Image from "next/image";
import { Feature } from "@/lib/sanityTypes";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

interface FeatureProps {
  children?: React.ReactNode;
  feature: Feature;
}

const FeatureComponent: React.FC<FeatureProps> = ({ feature }) => {
  return (
    <div className={`mt-4`}>
      <div
        className={`flex py-4 ${
          feature?.imageAlignment === "right"
            ? "flex-col md:flex-row-reverse"
            : "flex-col md:flex-row"
        }`}
      >
        {/* Image */}
        <div
          className={`w-full md:w-1/2 py-4 flex justify-${
            feature?.imageAlignment === "right" ? "end" : "start"
          } items-center`}
        >
          <Image
            src={urlForImage(feature?.image.asset)}
            alt="Picture"
            width={200}
            height={200}
            quality={80}
            priority={false}
            placeholder={"empty"}
            className="w-full h-full md:w-auto md:h-auto object-cover"
          />
        </div>
        {/* Awesome Headline and Button */}
        <div className="md:w-1/2 py-4  items-center">
          <h1 className="font-medium text-2xl">{feature?.title}</h1>
          <h1 className="font-medium text-2xl">{feature?.subtitle} </h1>
          <br />
          <p className="">{feature?.summary}</p>
          <br />
          <br />
          <Link
            href={{
              pathname: "/feature/${feature._id}",
              query: {
                id: feature._id,
                title: feature.title,
                summary: feature.summary,
                createdAT: feature._createdAt,
                subtitle: feature.subtitle,
              },
            }}
            className="bg-black text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm"
          >
            {feature?.buttonText}{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureComponent;
