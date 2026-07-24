import Eyebrow from "@/components/ui/Eyebrow";
import { JOURNEY } from "@/data/constants/about";

const GREEN = "#39FFA0";

export default function Journey() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Eyebrow>Our Journey</Eyebrow>

      <div
        className="relative mt-6 space-y-8 border-l-2 pl-8"
        style={{ borderColor: `${GREEN}40` }}
      >
        {JOURNEY.map((item) => (
          <div
            key={`${item.year}-${item.title}`}
            className="relative"
          >
            <span
              className="absolute -left-[38px] top-1 flex h-4 w-4 rounded-full"
              style={{ backgroundColor: GREEN }}
            />

            <p
              className="text-sm font-bold"
              style={{ color: GREEN }}
            >
              {item.year}
            </p>

            <h4 className="mt-1 font-semibold">
              {item.title}
            </h4>

            <p className="mt-1 text-sm text-white/60">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}