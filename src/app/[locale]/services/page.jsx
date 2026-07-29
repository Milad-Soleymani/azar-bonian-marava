"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { useTranslations } from "next-intl";

const services = [
  {
    num: "01",
    key: "construction",
    href: "/services/construction",
  },
  {
    num: "02",
    key: "projectManagement",
    href: "/services/project-management",
  },
  {
    num: "03",
    key: "internationalTrade",
    href: "/services/international-trade",
  },
  {
    num: "04",
    key: "engineeringConsulting",
    href: "/services/engineering-consulting",
  },
];

const Services = () => {
  const t = useTranslations("services");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">
          <h1 className="h2 text-white">
            {t("title")}
          </h1>

          <p className="text-white/60 mt-6 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Services */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((service) => (
            <div
              key={service.key}
              className="flex flex-col justify-center gap-6 group"
            >
              {/* Top */}

              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>

                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>

              {/* Title */}

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {t(`${service.key}.title`)}
              </h2>

              {/* Description */}

              <p className="text-white/60 leading-8">
                {t(`${service.key}.description`)}
              </p>

              {/* Border */}

              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default Services;