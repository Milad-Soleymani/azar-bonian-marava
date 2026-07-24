"use client";

import { useTranslations } from "next-intl";

import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import IconBadge from "@/components/ui/IconBadge";

import { CORE_VALUES } from "@/data/constants/about";

export default function CoreValues() {
  const t = useTranslations("about.values");

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Eyebrow>{t("title")}</Eyebrow>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CORE_VALUES.map((value) => (
          <Card key={value.key}>
            <IconBadge icon={value.icon} />

            <h3 className="mb-2 font-semibold">
              {t(`items.${value.key}.title`)}
            </h3>

            <p className="text-sm text-white/60">
              {t(`items.${value.key}.desc`)}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}