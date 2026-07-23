"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

type BlogCardProps = {
  id: number;
  image: string;
  date: string;
  title: string;
  description: string;
};

const BlogCard = ({
  id,
  image,
  date,
  title,
  description,
}: BlogCardProps) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111111] transition-all duration-300 hover:border-[#00ff99]">
      {/* Image */}
      <div className="relative h-[230px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        <span className="text-sm text-[#00ff99] uppercase tracking-wider">
          {date}
        </span>

        <h3 className="text-2xl font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-[#00ff99]">
          {title}
        </h3>

        <p className="text-white/70 leading-7">
          {description}
        </p>

        <Link
          href={`/blog/${id}`}
          className="mt-2 inline-flex items-center gap-2 text-[#00ff99] font-medium transition-all duration-300 group-hover:gap-4"
        >
          Read More
          <BsArrowRight className="text-lg" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;