"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">

        <div className="flex items-center justify-center gap-3">

          {/* Previous */}

          <button
            className="
              flex
              items-center
              justify-center
              w-12
              h-12
              rounded-full
              border
              border-white/10
              text-white
              hover:bg-[#00ff99]
              hover:text-black
              transition-all
            "
          >
            <FiChevronLeft />
          </button>

          {/* Numbers */}

          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              className={`
                w-12
                h-12
                rounded-full
                transition-all
                ${
                  page === 1
                    ? "bg-[#00ff99] text-black"
                    : "bg-[#111111] border border-white/10 text-white hover:bg-[#00ff99] hover:text-black"
                }
              `}
            >
              {page}
            </button>
          ))}

          {/* Next */}

          <button
            className="
              flex
              items-center
              justify-center
              w-12
              h-12
              rounded-full
              border
              border-white/10
              text-white
              hover:bg-[#00ff99]
              hover:text-black
              transition-all
            "
          >
            <FiChevronRight />
          </button>

        </div>

      </div>
    </section>
  );
};

export default Pagination;