import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import React from "react";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <div>
          <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">Latest Blogs</h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
