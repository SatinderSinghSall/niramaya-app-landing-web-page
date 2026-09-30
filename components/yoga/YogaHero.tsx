import Link from "next/link";
import { ArrowRight, Play, Search, Sparkles, SunMedium } from "lucide-react";
import Container from "@/components/common/Container";

export default function YogaHero() {
  return (
    <section className="relative overflow-hidden bg-[#263F31] text-white">
      <div className="pointer-events-none absolute -right-32 top-[-100px] h-[500px] w-[500px] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute bottom-[-180px] left-[-100px] h-[420px] w-[420px] rounded-full border border-white/5" />

      <Container>
        <div className="grid min-h-[680px] items-center gap-16 py-20 lg:grid-cols-[1fr_0.85fr] lg:py-24">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
              <SunMedium className="h-3.5 w-3.5 text-[#B8C9B3]" />
              Niramaya Yoga
            </div>

            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Make space for
              <span className="block text-[#B8C9B3]">mindful practice.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
              Explore Yoga content, practice categories, details and
              recommendations through the Niramaya wellness experience.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/app"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#263F31] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EEF2E6] hover:shadow-xl"
              >
                Explore in the app
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#263F31]/10 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <Link
                href="/wellness"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/5"
              >
                Back to wellness
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-[460px]">
            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-sm">
              <div className="rounded-[2rem] bg-[#EEF2E6] p-6 text-[#263F31]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#929B92]">
                      Yoga library
                    </p>
                    <h2 className="mt-1 text-2xl font-semibold">
                      Find your practice
                    </h2>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <Search className="h-4 w-4 text-[#4D6A50]" />
                  </div>
                </div>

                <div className="mt-7 rounded-[1.5rem] bg-[#263F31] p-6 text-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <Play className="ml-0.5 h-5 w-5 text-[#B8C9B3]" />
                  </div>

                  <p className="mt-10 text-xs uppercase tracking-[0.18em] text-white/40">
                    Explore
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold">
                    Yoga practices
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/50">
                    Browse categories and discover detailed Yoga content.
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white p-4">
                    <div className="h-2 w-16 rounded-full bg-[#DCE4D7]" />
                    <div className="mt-3 h-2 w-10 rounded-full bg-[#EEF2E6]" />
                  </div>

                  <div className="rounded-2xl bg-white p-4">
                    <div className="h-2 w-14 rounded-full bg-[#DCE4D7]" />
                    <div className="mt-3 h-2 w-12 rounded-full bg-[#EEF2E6]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#B8C9B3]" />
                <span className="text-xs font-semibold text-white/70">
                  Explore at your pace
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
