"use client";

import { useState } from "react";

import BlogGrid from "@/components/blog/BlogGrid";
import BlogHeader from "@/components/blog/BlogHeader";
import Pagination from "@/components/blog/Pagination";

const BlogPage = () => {
  const [search, setSearch] = useState("");

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <BlogHeader
        search={search}
        setSearch={setSearch}
      />

      <BlogGrid
        search={search}
      />

      <Pagination />
    </main>
  );
};

export default BlogPage;