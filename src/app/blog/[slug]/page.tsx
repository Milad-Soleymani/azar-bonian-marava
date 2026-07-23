import { blogs } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogDetails({ params }: Props) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogs
    .filter(
      (item) =>
        item.category === blog.category && item.slug !== blog.slug
    )
    .slice(0, 3);

  return (
    <main className="pt-32 pb-20 bg-[#0A0A0A] min-h-screen">
      <div className="container mx-auto">

        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#00ff99] hover:gap-3 transition-all mb-10"
        >
          <BsArrowLeft />
          Back to Blogs
        </Link>

        {/* Image */}
        <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="max-w-4xl mx-auto mt-14">

          <span className="text-[#00ff99] uppercase tracking-[4px] text-sm">
            {blog.category}
          </span>

          <h1 className="text-4xl xl:text-6xl font-bold text-white mt-5">
            {blog.title}
          </h1>

          <p className="text-white/40 mt-4">
            {blog.date}
          </p>

          <div className="mt-10 text-lg text-white/75 leading-9 whitespace-pre-line">
            {blog.content}
          </div>

        </div>

        {/* Related */}
        <div className="mt-28">

          <h2 className="text-3xl font-bold text-white mb-10">
            Related Articles
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedBlogs.map((item) => (
              <Link
                key={item.id}
                href={`/blog/${item.slug}`}
                className="group border border-white/10 rounded-2xl overflow-hidden bg-[#111111] hover:border-[#00ff99] transition-all"
              >
                <div className="relative h-52">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <p className="text-[#00ff99] text-sm">
                    {item.date}
                  </p>

                  <h3 className="text-white font-semibold text-xl mt-3 group-hover:text-[#00ff99] transition">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}