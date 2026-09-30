import Link from "next/link";
import { ArrowRight, Leaf, Search, Sparkles, UserRound } from "lucide-react";
import Container from "@/components/common/Container";

export default function AyurvedaHero() {
  return (
    <section className="relative overflow-hidden bg-[#F4F1E8]">
      <div className="pointer-events-none absolute -left-28 top-0 h-80 w-80 rounded-full border border-[#8A815F]/10" />
      <div className="pointer-events-none absolute -right-24 bottom-[-100px] h-96 w-96 rounded-full bg-[#E7E2D3]" />

      <Container>
        <div className="grid min-h-[680px] items-center gap-16 py-20 lg:grid-cols-[1fr_0.9fr] lg:py-24">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#8A815F]/15 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#716A4F]">
              <Leaf className="h-3.5 w-3.5" />
              Niramaya Ayurveda
            </div>

            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-[#30372D] sm:text-6xl lg:text-7xl">
              Explore the wisdom
              <span className="block text-[#716A4F]">of Ayurveda.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#6F746B] sm:text-lg">
              Discover Ayurvedic wellness content, recommendations, search and
              consultation workflows within the Niramaya experience.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/app"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#30372D] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4D6A50] hover:shadow-xl"
              >
                Explore in the app
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <Link
                href="/wellness"
                className="inline-flex items-center justify-center rounded-full border border-[#30372D]/15 bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#30372D] transition-all hover:bg-white"
              >
                Back to wellness
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-[470px]">
            <div className="absolute inset-7 rounded-[2.5rem] bg-[#716A4F]" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-[#FFFDF8] p-5 shadow-[0_30px_80px_rgba(70,65,45,0.14)] sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9B9A8E]">
                    Ayurveda
                  </p>

                  <h2 className="mt-1 text-2xl font-semibold text-[#30372D]">
                    Discover wellness
                  </h2>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F1EEE3]">
                  <Leaf className="h-5 w-5 text-[#716A4F]" />
                </div>
              </div>

              <div className="mt-7 grid gap-3">
                <div className="rounded-[1.5rem] bg-[#716A4F] p-6 text-white">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <Sparkles className="h-5 w-5 text-[#E9E4D3]" />
                  </div>

                  <p className="mt-9 text-[10px] uppercase tracking-[0.18em] text-white/45">
                    Explore
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold">
                    Ayurvedic content
                  </h3>

                  <p className="mt-3 text-xs leading-5 text-white/55">
                    Browse wellness-oriented Ayurveda information and
                    recommendations.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-[#F1EEE3] p-5">
                    <Search className="h-4 w-4 text-[#716A4F]" />
                    <p className="mt-6 text-xs font-semibold text-[#30372D]">
                      Search
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#30372D] p-5 text-white">
                    <UserRound className="h-4 w-4 text-[#DAD5C2]" />
                    <p className="mt-6 text-xs font-semibold">Consultation</p>
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
