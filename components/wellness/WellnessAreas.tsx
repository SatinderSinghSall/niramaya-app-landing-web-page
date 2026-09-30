import Link from "next/link";
import { ArrowUpRight, Leaf, SunMedium } from "lucide-react";
import Container from "@/components/common/Container";

export default function WellnessAreas() {
  return (
    <section className="bg-[#EEF2E6] py-24 sm:py-28">
      <Container>
        <div className="mb-14 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4D6A50]">
              Two ways to explore
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#263F31] sm:text-5xl">
              Find what speaks to you.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#6D796F]">
            Yoga and Ayurveda each have their own dedicated experience inside
            Niramaya.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <Link
            href="/yoga"
            className="group relative min-h-[420px] overflow-hidden rounded-[2rem] bg-[#263F31] p-8 text-white transition-transform duration-500 hover:-translate-y-1 sm:p-10"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-125" />

            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                  <SunMedium className="h-6 w-6 text-[#B8C9B3]" />
                </div>

                <ArrowUpRight className="h-6 w-6 text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <div className="mt-20">
                <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                  Movement & practice
                </p>

                <h3 className="mt-3 text-4xl font-semibold tracking-[-0.035em]">
                  Yoga
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-white/55">
                  Explore Yoga categories, practices, details and
                  recommendations within the Niramaya experience.
                </p>

                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#B8C9B3]">
                  Explore Yoga
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="/ayurveda"
            className="group relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[#DCE4D7] bg-white p-8 text-[#263F31] transition-transform duration-500 hover:-translate-y-1 sm:p-10"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#EEF2E6] transition-transform duration-700 group-hover:scale-125" />

            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF2E6]">
                  <Leaf className="h-6 w-6 text-[#4D6A50]" />
                </div>

                <ArrowUpRight className="h-6 w-6 text-[#929B92] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <div className="mt-20">
                <p className="text-xs uppercase tracking-[0.18em] text-[#929B92]">
                  Traditional wellness
                </p>

                <h3 className="mt-3 text-4xl font-semibold tracking-[-0.035em]">
                  Ayurveda
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-[#6D796F]">
                  Discover Ayurvedic content, recommendations and consultation
                  workflows within Niramaya.
                </p>

                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#4D6A50]">
                  Explore Ayurveda
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
}
