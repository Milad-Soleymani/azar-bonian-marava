"use client";

import { useTranslations } from "next-intl";

import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";

import { LEADERSHIP } from "@/data/constants/about";

const GREEN = "#39FFA0";

export default function Leadership() {
  const t = useTranslations("about.leadership");

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Eyebrow>{t("title")}</Eyebrow>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {LEADERSHIP.map((person) => (
          <Card
            key={person.key}
            className="flex items-start gap-4"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg font-semibold">
              {person.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>

            <div>
              <h3 className="font-semibold">
                {person.name}
              </h3>

              <p
                className="text-sm font-medium"
                style={{ color: GREEN }}
              >
                {t(`items.${person.key}.role`)}
              </p>

              <p className="mt-2 text-sm text-white/60">
                {t(`items.${person.key}.desc`)}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}