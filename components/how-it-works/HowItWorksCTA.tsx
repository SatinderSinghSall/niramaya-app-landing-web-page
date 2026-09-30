import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import Container from "@/components/common/Container";

export default function HowItWorksCTA() {
  return (
    <section className="bg-[#EEF2E6] py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-[#263F31] px-7 py-14 text-white sm:px-12 sm:py-16 lg:px-16">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-32 right-24 h-64 w-64 rounded-full border border-white/5" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                <Leaf className="h-5 w-5 text-[#B8C9B3]" />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-[#B8C9B3]">
                Your journey starts here
              </p>

              <h2 className="mt-3 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                Make wellness a part of your everyday journey.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                Explore the Niramaya experience and see how your profile, goals,
                wellness discovery and progress come together.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/app"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#263F31] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EEF2E6] hover:shadow-xl"
              >
                Explore the app
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#263F31]/10 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <Link
                href="/features"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/5"
              >
                See all features
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
