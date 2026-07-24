import { Eye, Target } from "lucide-react";
import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";

const GREEN = "#39FFA0";

export default function MissionVision() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Eyebrow>Mission &amp; Vision</Eyebrow>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Mission */}
        <Card className="text-center sm:text-left">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
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
                Our Mission
              </h3>

              <p className="text-sm text-white/60">
                Deliver innovative engineering solutions that empower
                industries, enhance lives, and build a sustainable future.
              </p>
            </div>
          </div>
        </Card>

        {/* Vision */}
        <Card className="text-center sm:text-left">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
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
                Our Vision
              </h3>

              <p className="text-sm text-white/60">
                To be a globally trusted leader in engineering and
                technology, driving innovation and creating lasting impact.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}