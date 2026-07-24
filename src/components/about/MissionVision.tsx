"use client";

import { Eye, Target } from "lucide-react";
import { useTranslations } from "next-intl";

import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";

const GREEN = "#39FFA0";

export default function MissionVision() {
  const t = useTranslations("about.mission");

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Eyebrow>{t("title")}</Eyebrow>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Mission */}
        <Card className="text-center sm:text-left rtl:sm:text-right">
          <div className="flex flex-col items-center gap-4 sm:flex-row rtl:sm:flex-row-reverse">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border"
              style={{ borderColor: `${GREEN}50` }}
            >
              <Target
                className="h-6 w-6"
                style={{ color: GREEN }}
              />
            </div>

            <div>
              <h3 className="mb-1 text-lg font-semibold">
                {t("missionTitle")}
              </h3>

              <p className="text-sm text-white/60">
                {t("missionText")}
              </p>
            </div>
          </div>
        </Card>

        {/* Vision */}
        <Card className="text-center sm:text-left rtl:sm:text-right">
          <div className="flex flex-col items-center gap-4 sm:flex-row rtl:sm:flex-row-reverse">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border"
              style={{ borderColor: `${GREEN}50` }}
            >
              <Eye
                className="h-6 w-6"
                style={{ color: GREEN }}
              />
            </div>

            <div>
              <h3 className="mb-1 text-lg font-semibold">
                {t("visionTitle")}
              </h3>

              <p className="text-sm text-white/60">
                {t("visionText")}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}