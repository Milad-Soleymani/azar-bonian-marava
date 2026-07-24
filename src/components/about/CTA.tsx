import { ArrowRight } from "lucide-react";

const GREEN = "#39FFA0";

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.04] to-transparent p-10 sm:flex-row">
        <div>
          <h3 className="text-2xl font-bold">
            Let's Build the Future Together
          </h3>

          <p className="mt-2 text-white/60">
            Ready to start your next engineering project?
          </p>
        </div>

        <a
          href="/contact"
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold text-black"
          style={{ backgroundColor: GREEN }}
        >
          Contact Us
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}