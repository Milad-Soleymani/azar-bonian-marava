import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import { STATS } from "@/data/constants/about";

const GREEN = "#39FFA0";

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Eyebrow>Our Impact In Numbers</Eyebrow>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <Card key={stat.label} className="text-center">
            <div
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border"
              style={{ borderColor: `${GREEN}50` }}
            >
              <stat.icon
                className="h-5 w-5"
                style={{ color: GREEN }}
              />
            </div>

            <p className="text-3xl font-extrabold">
              {stat.value}
            </p>

            <p className="mt-1 text-sm text-white/60">
              {stat.label}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}