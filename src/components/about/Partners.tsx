"use client";

import { useTranslations } from "next-intl";

import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";

import {
  PARTNERS,
  CERTIFICATIONS,
} from "@/data/constants/about";

export default function Partners() {
  const t = useTranslations("about.partners");

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Eyebrow>{t("title")}</Eyebrow>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Card>
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/40">
            {t("partners")}
          </p>

          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {PARTNERS.map((partner) => (
              <span
                key={partner}
                className="text-sm font-semibold tracking-wide text-white/50"
              >
                {partner}
              </span>
            ))}
          </div>
        </Card>

        <Card>
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/40">
            {t("certifications")}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {CERTIFICATIONS.map((cert) => (
              <span
                key={cert}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-center text-[9px] font-semibold leading-tight text-white/60"
              >
                {cert}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}