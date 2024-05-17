import { heroSection } from "./../../sanity/schemaTypes/heroSection";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { Feature } from "@/lib/sanityTypes";



type Data = {
  heroSection: Feature[]; // using feature type because both have same fields
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
    const { id } = req.query; // Extract the ID from the request query

    const query = groq`
    *[_type == "heroSection" && _id == "${id}"][0] 

    `;

  //return 'Shohidul';
  const heroSection = await client.fetch(query);
  return res.status(200).json({ heroSection });
}
