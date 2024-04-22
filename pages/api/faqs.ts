import { Faqs } from "@/lib/sanityTypes";
import { client } from "@/sanity/lib/client";
import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq`
*[_type == "faqs" && ishidden == false] | order(order asc)
`;

type Data = {
  faqs: Faqs[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  //return 'abhimanyu';
  const faqs = await client.fetch(query);
  return res.status(200).json({ faqs });
}
