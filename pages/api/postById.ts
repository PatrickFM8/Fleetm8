import { Post } from "@/lib/sanityTypes";
import { groq } from "next-sanity";
import { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/sanity/lib/client";

type Data = {
  posts: Post | null; // Make sure to handle the case when the post is not found
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { id } = req.query; // Extract the ID from the request query

  //http://localhost:3000/api/postById?id=709309b1-289c-44ef-a840-7e2779f33a5d

   const query = groq`
  *[_type == "post" && _id == "${id}"][0] {
    title,
    _id,
    mainImage,
    description,
    _createdAt,
    "slug": slug.current,
    "body": body[0].children[0].text
  }
`; 

  try {
    const posts = await client.fetch(query);
    return res.status(200).json({ posts });
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
