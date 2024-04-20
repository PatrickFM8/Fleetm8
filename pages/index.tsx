import Image from "next/image";
import { Inter } from "next/font/google";
import Client from "@/components/Client";
import fetchFeatures from "@/lib/fetchFeatures";
import { Feature as featureType } from "@/lib/sanityTypes";
import { useState, useEffect } from "react";
import Feature from "@/components/Feature";

const inter = Inter({ subsets: ["latin"] });

export const revalidate = 60;

export default function Home() {
  const [feat, setFeat] = useState<featureType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const features = await fetchFeatures();
        console.log(features);
        setFeat(features);
      } catch (error) {
        console.error("Error fetching features:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <Client>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        {feat.length > 0 ? (
          feat.map((feature, index) => (
           <Feature key={feature._id} feature={feature} />
          ))
        ) : (
          <p>No features found.</p>
        )}
      </main>
    </Client>
  );
}
