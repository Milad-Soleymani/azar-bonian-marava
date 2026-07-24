import { CheckCircle2 } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import { WHY_CHOOSE_US } from "@/data/constants/about";

const GREEN = "#39FFA0";

export default function WhyChoose() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Eyebrow>Why Choose Us</Eyebrow>

      <div className="mt-6 space-y-4">
        {WHY_CHOOSE_US.map((item) => (
          <div
            key={item.title}
            className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4"
          >
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0"
              style={{ color: GREEN }}
            />

            <div>
              <h4 className="font-semibold">
                {item.title}
              </h4>

              <p className="mt-1 text-sm text-white/60">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

        <div className="mt-6 flex h-40 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent">
          <p className="text-xs uppercase tracking-widest text-white/40">
            Project / Skyline Photo
          </p>
        </div>
      </div>
    </section>
  );
}