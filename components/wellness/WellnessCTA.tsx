import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import Container from "@/components/common/Container";

export default function WellnessCTA() {
  return (
    <section className="bg-[#EEF2E6] py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-[#4D6A50] px-7 py-14 text-white sm:px-12 lg:px-16">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -bottom-32 right-40 h-64 w-64 rounded-full border border-white/5" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                <Leaf className="h-5 w-5 text-[#DCE8D8]" />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                Keep exploring
              </p>

              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Find a wellness experience that fits your journey.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                Explore Niramaya and discover Yoga, Ayurveda and other wellness
                experiences in one place.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/app"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#263F31] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EEF2E6] hover:shadow-xl"
              >
                Explore the app
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#263F31]/10 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                See how it works
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
