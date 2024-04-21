import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { Navitems } from "@/lib/sanityTypes";

const query = groq`
*[_type == "navitems"  && hidden == false]
`;

type Data = {
  navitems: Navitems;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const navitems = await client.fetch(query);
  return res.status(200).json({ navitems });
}
