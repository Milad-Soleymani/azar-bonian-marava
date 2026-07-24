"use client";

import { motion } from "framer-motion";

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
  return (
    <main className="min-h-screen bg-[#07080a] text-white">
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