"use client";

import BlogCard from "./BlogCard";
import { blogs } from "@/data/blogs";

type BlogGridProps = {
  search: string;
};

const BlogGrid = ({ search }: BlogGridProps) => {
  const filteredBlogs = blogs.filter((blog) => {
    const keyword = search.toLowerCase();

    return (
      blog.title.toLowerCase().includes(keyword) ||
      blog.description.toLowerCase().includes(keyword) ||
      blog.category.toLowerCase().includes(keyword)
    );
  });

  return (
    <section className="pb-16">
      <div className="container mx-auto">
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
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