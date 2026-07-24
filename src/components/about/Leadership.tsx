import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import { LEADERSHIP } from "@/data/constants/about";

const GREEN = "#39FFA0";

export default function Leadership() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <Eyebrow>Our Leadership</Eyebrow>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {LEADERSHIP.map((person) => (
          <Card
            key={person.name}
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
                {person.role}
              </p>

              <p className="mt-2 text-sm text-white/60">
                {person.desc}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}