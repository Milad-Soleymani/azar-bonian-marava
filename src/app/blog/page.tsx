"use client";

import { useState } from "react";

import BlogGrid from "@/components/blog/BlogGrid";
import BlogHeader from "@/components/blog/BlogHeader";
import Pagination from "@/components/blog/Pagination";

const BlogPage = () => {
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 4;

  const [category, setCategory] = useState("All");

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <BlogHeader
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />
      
      <BlogGrid
        search={search}
        category={category}
        currentPage={currentPage}
        postsPerPage={postsPerPage}
      />

      <Pagination
        totalPosts={8}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
};

export default BlogPage;
