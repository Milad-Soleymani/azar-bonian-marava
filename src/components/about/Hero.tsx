import { ChevronDown } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";

const GREEN = "#39FFA0";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div>
          <Eyebrow>Who We Are</Eyebrow>

          <h1 className="text-4xl font-extrabold uppercase leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            About Azar
            <br />
            Bonyan Marava
          </h1>

          <p className="mt-6 max-w-md text-white/60">
            Building lasting infrastructure and connecting global markets
            through reliable construction projects and international trade.
          </p>

          <a
            href="#our-story"
            className="mt-10 inline-flex items-center gap-3 text-sm text-white/70 hover:text-white"
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full border"
              style={{ borderColor: `${GREEN}60` }}
            >
              <ChevronDown
                className="h-4 w-4"
                style={{ color: GREEN }}
              />
            </span>

            Scroll Down
          </a>
        </div>

        {/* Abstract Graphic */}
        <div className="relative flex h-72 items-center justify-center sm:h-96">
          <div
            className="absolute h-40 w-72 rounded-full blur-3xl"
            style={{ backgroundColor: `${GREEN}25` }}
          />

          <svg
            viewBox="0 0 400 300"
            className="relative h-full w-full max-w-lg"
          >
            <g
              fill="none"
              stroke={GREEN}
              strokeWidth="1.2"
              opacity="0.9"
            >
              <polygon points="200,30 300,90 300,180 200,240 100,180 100,90" />

              <polygon
                points="200,30 260,60 260,150 200,180 140,150 140,60"
                opacity="0.6"
              />

              <line
                x1="200"
                y1="30"
                x2="200"
                y2="240"
                opacity="0.4"
              />

              <line
                x1="100"
                y1="90"
                x2="300"
                y2="180"
                opacity="0.4"
              />

              <line
                x1="300"
                y1="90"
                x2="100"
                y2="180"
                opacity="0.4"
              />

              <rect
                x="160"
                y="110"
                width="80"
                height="80"
                transform="rotate(20 200 150)"
                opacity="0.5"
              />
            </g>

            <ellipse
              cx="200"
              cy="255"
              rx="130"
              ry="14"
              fill={GREEN}
              opacity="0.15"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}