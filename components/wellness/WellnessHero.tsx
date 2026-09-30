import Link from "next/link";
import { ArrowRight, Compass, Leaf, Sparkles, SunMedium } from "lucide-react";
import Container from "@/components/common/Container";

export default function WellnessHero() {
  return (
    <section className="relative overflow-hidden bg-[#EEF2E6]">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full border border-[#4D6A50]/10" />
      <div className="pointer-events-none absolute bottom-0 right-[-100px] h-96 w-96 rounded-full bg-[#DCE6D8]/40" />

      <Container>
        <div className="grid min-h-[680px] items-center gap-14 py-20 lg:grid-cols-[1fr_0.9fr] lg:py-24">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#4D6A50]/15 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#4D6A50]">
              <Sparkles className="h-3.5 w-3.5" />
              Niramaya Wellness
            </div>

            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-[#263F31] sm:text-6xl lg:text-7xl">
              Explore wellness
              <span className="block text-[#4D6A50]">in your own way.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#6D796F] sm:text-lg">
              Discover wellness-oriented content, recommendations, Yoga and
              Ayurveda through experiences designed to fit into your personal
              wellness journey.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/yoga"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#263F31] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4D6A50] hover:shadow-xl"
              >
                Explore Yoga
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <Link
                href="/ayurveda"
                className="inline-flex items-center justify-center rounded-full border border-[#263F31]/15 bg-white/60 px-6 py-3.5 text-sm font-semibold text-[#263F31] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Explore Ayurveda
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-[500px]">
            <div className="absolute inset-8 rounded-[2.5rem] bg-[#263F31]" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white p-5 shadow-[0_30px_80px_rgba(38,63,49,0.15)] sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#929B92]">
                    Discover
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold text-[#263F31]">
                    Your wellness space
                  </h2>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEF2E6]">
                  <Compass className="h-5 w-5 text-[#4D6A50]" />
                </div>
              </div>

              <div className="mt-7 grid gap-3">
                <div className="group relative overflow-hidden rounded-3xl bg-[#263F31] p-6 text-white">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/10" />

                  <div className="relative">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                      <SunMedium className="h-5 w-5 text-[#B8C9B3]" />
                    </div>

                    <p className="mt-8 text-xs uppercase tracking-[0.15em] text-white/45">
                      Practice
                    </p>

                    <h3 className="mt-1 text-xl font-semibold">Yoga</h3>

                    <p className="mt-2 text-xs leading-5 text-white/50">
                      Explore practices, categories and yoga content.
                    </p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-3xl border border-[#E3E7DF] bg-[#FAFBF8] p-6">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#EEF2E6]" />

                  <div className="relative">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF2E6]">
                      <Leaf className="h-5 w-5 text-[#4D6A50]" />
                    </div>

                    <p className="mt-8 text-xs uppercase tracking-[0.15em] text-[#929B92]">
                      Tradition
                    </p>

                    <h3 className="mt-1 text-xl font-semibold text-[#263F31]">
                      Ayurveda
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#929B92]">
                      Discover Ayurvedic wellness content and recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
