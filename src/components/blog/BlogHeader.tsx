"use client";

import { IoSearch } from "react-icons/io5";

type BlogHeaderProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

const categories = [
  "All",
  "Construction",
  "Management",
  "Trade",
  "Consulting",
];

const BlogHeader = ({
  search,
  setSearch,
  category,
  setCategory,
}: BlogHeaderProps) => {
  return (
    <section className="pt-28 pb-12">
      <div className="container mx-auto">
        {/* Top */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-8">
          {/* Left */}
          <div>
            <span className="text-[#00ff99] uppercase tracking-[4px] text-sm">
              Blog
            </span>

            <h1 className="text-5xl xl:text-6xl font-bold text-white mt-2">
              Latest Articles
            </h1>

            <p className="mt-5 max-w-2xl text-white/60 leading-8">
              Stay updated with our latest insights, engineering knowledge,
              construction projects, and international trade news.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full xl:w-[360px]">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full h-[56px] rounded-full bg-[#111111] border border-white/10 px-6 pr-14 text-white outline-none transition-all focus:border-[#00ff99]"
            />

            <IoSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-[#00ff99] text-xl" />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mt-10">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`h-12 px-6 rounded-full transition-all ${
                category === item
                  ? "bg-[#00ff99] text-black"
                  : "bg-[#111111] border border-white/10 text-white hover:bg-[#00ff99] hover:text-black"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;