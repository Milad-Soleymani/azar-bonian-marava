import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";

const GREEN = "#39FFA0";

export default function Story() {
  return (
    <section id="our-story" className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

        {/* Image */}
        <div className="flex h-72 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent sm:h-96">
          <div className="text-center">
            <Image
              src="/assets/logoBlackBg.png"
              alt="Azar Bonyan Marava"
              width={600}
              height={600}
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <Eyebrow>Our Story</Eyebrow>

          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Our Story
          </h2>

          <div
            className="space-y-5 border-l-2 pl-6"
            style={{ borderColor: `${GREEN}50` }}
          >
            <p className="text-white/60">
              Founded in 2016, Azar Bonyan Marava began with a vision to
              deliver world-class engineering solutions that drive progress
              and create lasting impact.
            </p>

            <p className="text-white/60">
              Through continuous innovation and the adoption of advanced
              technologies, we have delivered complex projects across
              diverse industries with excellence.
            </p>

            <p className="text-white/60">
              We are committed to our clients, our people, and the
              communities we serve — building sustainable solutions for a
              smarter and better future.
            </p>

            <p className="text-white/60">
              Our long-term vision is to be a global leader in engineering
              and technology, shaping a future built on innovation,
              integrity, and sustainability.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}