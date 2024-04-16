import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { Feature } from "@/lib/sanityTypes";


const query = groq`
  *[_type == "feature"]
`;

type Data = {
  feature: Feature[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //return 'abhimanyu';
  const feature = await client.fetch(query);
  return res.status(200).json({ feature });
}

