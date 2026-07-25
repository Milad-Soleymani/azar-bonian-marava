"use client";

import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

import Eyebrow from "@/components/ui/Eyebrow";
import Card from "@/components/ui/Card";

const GREEN = "#39FFA0";

const ITEMS = [
  "innovation",
  "quality",
  "global",
  "support",
];

export default function WhyChoose() {
  const t = useTranslations("home.whyChoose");

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        {/* Left */}
        <div>
          <Eyebrow>{t("eyebrow")}</Eyebrow>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-white/60">
            {t("description")}
          </p>

          <div className="mt-10 space-y-5">
            {ITEMS.map((item) => (
              <Card
                key={item}
                className="flex items-start gap-4 border border-white/10"
              >
                <div
                  className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: `${GREEN}15`,
                  }}
                >
                  <CheckCircle2
                    className="h-5 w-5"
                    style={{ color: GREEN }}
                  />
                </div>

                <div>
                  <h3 className="font-semibold">
                    {t(`${item}.title`)}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/60">
                    {t(`${item}.desc`)}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative flex h-[520px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent">
          <div
            className="absolute h-72 w-72 rounded-full blur-3xl"
            style={{
              backgroundColor: `${GREEN}20`,
            }}
          />

          <div className="relative text-center">
            <div
              className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border"
              style={{
                borderColor: `${GREEN}40`,
              }}
            >
              <CheckCircle2
                className="h-16 w-16"
                style={{
                  color: GREEN,
                }}
              />
            </div>

            <h3 className="mt-8 text-2xl font-bold">
              {t("highlight.title")}
            </h3>

            <p className="mx-auto mt-4 max-w-sm text-white/60">
              {t("highlight.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}