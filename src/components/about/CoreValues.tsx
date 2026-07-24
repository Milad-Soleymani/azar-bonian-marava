import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import IconBadge from "@/components/ui/IconBadge";
import { CORE_VALUES } from "@/data/constants/about";

export default function CoreValues() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Eyebrow>Core Values</Eyebrow>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CORE_VALUES.map((value) => (
          <Card key={value.title}>
            <IconBadge icon={value.icon} />

            <h3 className="mb-2 font-semibold">
              {value.title}
            </h3>

            <p className="text-sm text-white/60">
              {value.desc}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}