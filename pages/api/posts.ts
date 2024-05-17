import { Post } from "@/lib/sanityTypes";
import { groq } from "next-sanity";
import { NextApiRequest, NextApiResponse } from "next";
import { client } from "@/sanity/lib/client";

const query = groq`
*[_type == "post"]{
  title,
  _id,
  mainImage,
  description,
  _createdAt,
  "slug":slug.current,
  "body": body[0].children[0].text
}
`;

type Data = {
  posts: Post;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const posts = await client.fetch(query);
  return res.status(200).json({ posts });
}