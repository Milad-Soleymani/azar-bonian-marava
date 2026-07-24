"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import Eyebrow from "@/components/ui/Eyebrow";

const GREEN = "#39FFA0";

export default function Story() {
  const t = useTranslations("about.story");

  return (
    <section
      id="our-story"
      className="mx-auto max-w-7xl px-6 py-16"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">


        {/* Content */}
        <div>

          <Eyebrow>
            {t("title")}
          </Eyebrow>


          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            {t("title")}
          </h2>


          <div
  className="space-y-5 border-s-2 ps-6"
  style={{ borderColor: `${GREEN}50` }}
>

            <p className="text-white/60">
              {t("paragraph1")}
            </p>


            <p className="text-white/60">
              {t("paragraph2")}
            </p>


            <p className="text-white/60">
              {t("paragraph3")}
            </p>


            <p className="text-white/60">
              {t("paragraph4")}
            </p>


          </div>

        </div>
        {/* Image */}
        <div className="flex h-72 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent sm:h-96">
          <Image
            src="/assets/logoBlackBg.png"
            alt="Azar Bonyan Marava"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>



      </div>
    </section>
  );
}