import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { Testimonials } from "@/lib/sanityTypes";

const query = groq`
*[_type == "testimonials"  && ishidden == false] {
  _id,
  name,
  "description" : description[0].children[0].text,
  image,
  ishidden
}
`;

type Data = {
  testimonials: Testimonials;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const testimonials = await client.fetch(query);
  return res.status(200).json({ testimonials });
}
