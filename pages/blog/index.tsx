import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import { usePosts } from "@/hooks/usePosts";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";

const Blog = () => {
  const posts = usePosts();
  return (
    <div>
      <Navbar />
      <Container>
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold mb-4">Latest Blogs</h1>
        </div>
        {posts.map((post, index) => (
          <div
            key={index}
            className="mx-auto p-4 border-b border-gray-300
              grid sm:grid-cols-1 md:grid-cols-2 gap-8
              "
          >
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <Image
              src={urlForImage(post?.mainImage.asset)}
              alt="Picture"
              width={200}
              height={200}
              quality={80}
              priority={false}
              placeholder={"empty"}
              className="w-full h-full md:w-auto md:h-auto object-cover"
            />
            <p>{post?.body}</p>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Blog;
