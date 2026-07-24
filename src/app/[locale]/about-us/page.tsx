"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

import Breadcrumb from "@/components/seo/Breadcrumb";

import Hero from "@/components/about/Hero";
import Story from "@/components/about/Story";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import Journey from "@/components/about/Journey";
import Stats from "@/components/about/Stats";
import Leadership from "@/components/about/Leadership";
import Partners from "@/components/about/Partners";
import CTA from "@/components/about/CTA";


export default function AboutPage() {
  const { locale } = useParams();
  const t = useTranslations("breadcrumb");

  const isRTL = locale === "fa" || locale === "ar";

  return (
    <main
      dir={isRTL ? "rtl" : "ltr"}
      className="min-h-screen bg-[#07080a] text-white"
    >

      <Breadcrumb
        items={[
          {
            name: t("home"),
            href: `/${locale}`,
          },
          {
            name: t("about"),
            href: `/${locale}/about-us`,
          },
        ]}
      />


      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2.4,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
      >
        <Hero />
        <Story />
        <MissionVision />
        <CoreValues />
        <Journey />
        <Stats />
        <Leadership />
        <Partners />
        <CTA />
      </motion.div>

    </main>
  );
}