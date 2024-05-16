import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { Feature } from "@/lib/sanityTypes";

type Data = {
  feature: Feature | null; // Change the type to Feature | null to handle cases where no feature is found
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { id } = req.query; // Extract the ID from the request query

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing ID parameter' });
  }

  const query = groq`
    *[_type == "feature" && _id == "${id}"][0]
  `;

  try {
    // Fetch the feature by its ID
    const feature = await client.fetch(query);
    return res.status(200).json({ feature });
  } catch (error) {
    // Handle any errors that occur during the fetch
    console.error("Error fetching feature by ID:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}








/* import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { Feature } from "@/lib/sanityTypes";

type Data = {
  feature: Feature[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  //const { id } = req.query; // Extract the ID from the request query
  const id = '47f34e9a-c8e6-4ccb-960b-ef5dbe4fd983';
  const query = groq`
    *[_type == "feature" && _id == "${id}"][0]
  `;

  try {
    // Fetch the feature by its ID
    const feature = await client.fetch(query);
    return res.status(200).json({ feature });
  } catch (error) {
    // Handle any errors that occur during the fetch
    console.error("Error fetching feature by ID:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
 */