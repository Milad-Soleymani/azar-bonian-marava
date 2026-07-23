"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type PaginationProps = {
  totalPosts: number;
  postsPerPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <section className="py-16">
      <div className="container mx-auto flex justify-center items-center gap-3">
        {/* Previous */}
        <button
          onClick={() =>
            currentPage > 1 && setCurrentPage(currentPage - 1)
          }
          disabled={currentPage === 1}
          className="w-12 h-12 rounded-full border border-white/10 bg-[#111111] text-white hover:bg-[#00ff99] hover:text-black transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <FiChevronLeft className="mx-auto" />
        </button>

        {/* Page Numbers */}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-12 h-12 rounded-full transition-all ${
              currentPage === page
                ? "bg-[#00ff99] text-black"
                : "bg-[#111111] border border-white/10 text-white hover:bg-[#00ff99] hover:text-black hover:cursor-pointer"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() =>
            currentPage < totalPages &&
            setCurrentPage(currentPage + 1)
          }
          disabled={currentPage === totalPages}
          className="w-12 h-12 rounded-full border border-white/10 bg-[#111111] text-white hover:bg-[#00ff99] hover:text-black hover:cursor-pointer transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <FiChevronRight className="mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default Pagination;