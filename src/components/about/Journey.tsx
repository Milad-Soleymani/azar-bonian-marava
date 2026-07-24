"use client";

import { useTranslations } from "next-intl";

import Eyebrow from "@/components/ui/Eyebrow";
import { JOURNEY } from "@/data/constants/about";

const GREEN = "#39FFA0";

export default function Journey() {
  const t = useTranslations("about.journey");

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Eyebrow>{t("title")}</Eyebrow>

      <div
        className="relative mt-6 space-y-8 border-l-2 pl-8 rtl:border-r-2 rtl:border-l-0 rtl:pr-8 rtl:pl-0"
        style={{ borderColor: `${GREEN}40` }}
      >
        {JOURNEY.map((item) => (
          <div
            key={item.key}
            className="relative"
          >
            <span
              className="absolute -left-[38px] top-1 flex h-4 w-4 rounded-full rtl:-right-[38px] rtl:left-auto"
              style={{ backgroundColor: GREEN }}
            />

            <p
              className="text-sm font-bold"
              style={{ color: GREEN }}
            >
              {item.year}
            </p>

            <h4 className="mt-1 font-semibold">
              {t(`items.${item.key}.title`)}
            </h4>

            <p className="mt-1 text-sm text-white/60">
              {t(`items.${item.key}.desc`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}