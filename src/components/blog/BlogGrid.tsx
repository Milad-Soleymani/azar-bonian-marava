"use client";

import BlogCard from "./BlogCard";
import { blogs } from "@/data/blogs";

type BlogGridProps = {
  search: string;
  category: string;
  currentPage: number;
  postsPerPage: number;
};

const BlogGrid = ({
  search,
  category,
  currentPage,
  postsPerPage,
}: BlogGridProps) => {
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || blog.category === category;

    return matchesSearch && matchesCategory;
    const keyword = search.toLowerCase();

    return (
      blog.title.toLowerCase().includes(keyword) ||
      blog.description.toLowerCase().includes(keyword) ||
      blog.category.toLowerCase().includes(keyword)
    );
  });

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const currentBlogs = filteredBlogs.slice(startIndex, endIndex);

  return (
    <section className="pb-16">
      <div className="container mx-auto">
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {currentBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                slug={blog.slug}
                image={blog.image}
                date={blog.date}
                title={blog.title}
                description={blog.description}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center py-32">
            <h2 className="text-2xl text-white/50">
              No articles found.
            </h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;