import Link from "next/link";
import { ArrowDown, ArrowRight, HeartPulse, Leaf, Target } from "lucide-react";
import Container from "@/components/common/Container";

export default function AppHero() {
  return (
    <section className="relative overflow-hidden bg-[#263F31] text-white">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -bottom-48 -left-32 h-[500px] w-[500px] rounded-full border border-white/5" />

      <Container>
        <div className="grid min-h-[720px] items-center gap-16 py-20 lg:grid-cols-[1fr_0.85fr] lg:py-24">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B8C9B3]" />
              The Niramaya app
            </div>

            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Your wellness journey,
              <span className="block text-[#B8C9B3]">in one place.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
              From your wellness profile and goals to Yoga, Ayurveda,
              consultation and progress, Niramaya brings the experience together
              in one mobile application.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#screens"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#263F31] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EEF2E6] hover:shadow-xl"
              >
                See the app
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#263F31]/10 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <Link
                href="/features"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/5"
              >
                Explore features
              </Link>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-3">
              {[
                {
                  icon: HeartPulse,
                  label: "Profile",
                },
                {
                  icon: Target,
                  label: "Goals",
                },
                {
                  icon: Leaf,
                  label: "Wellness",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <Icon className="h-4 w-4 text-[#B8C9B3]" />

                    <p className="mt-4 text-xs font-semibold text-white/65">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Phone composition */}
          <div className="relative mx-auto flex w-full max-w-[430px] justify-center">
            <div className="absolute top-10 h-[520px] w-[250px] rounded-[3rem] bg-[#4D6A50]/30 blur-3xl" />

            <div className="relative w-[270px] rounded-[3rem] border-[7px] border-[#17271D] bg-[#17271D] p-2 shadow-[0_40px_100px_rgba(0,0,0,0.35)] sm:w-[290px]">
              <div className="overflow-hidden rounded-[2.3rem] bg-[#EEF2E6]">
                {/* Temporary screenshot slot */}
                <div className="flex h-[550px] flex-col">
                  <div className="flex items-center justify-between px-5 pt-5">
                    <div>
                      <div className="h-2 w-16 rounded-full bg-[#C9D5C5]" />
                      <div className="mt-2 h-3 w-24 rounded-full bg-[#263F31]/20" />
                    </div>

                    <div className="h-9 w-9 rounded-full bg-white" />
                  </div>

                  <div className="mx-4 mt-7 rounded-[1.5rem] bg-[#263F31] p-5 text-white">
                    <div className="h-2 w-16 rounded-full bg-white/20" />
                    <div className="mt-3 h-6 w-32 rounded-full bg-white/10" />

                    <div className="mt-7 h-2 w-full rounded-full bg-white/10">
                      <div className="h-2 w-2/3 rounded-full bg-[#B8C9B3]" />
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 px-4">
                    <div className="h-28 rounded-2xl bg-white" />
                    <div className="h-28 rounded-2xl bg-white" />
                  </div>

                  <div className="mx-4 mt-4 h-32 rounded-2xl bg-white" />

                  <div className="mt-auto px-4 pb-5">
                    <div className="h-14 rounded-2xl bg-[#DCE6D8]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-2 hidden rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md sm:block">
              <p className="text-[10px] uppercase tracking-[0.15em] text-white/40">
                Mobile experience
              </p>

              <p className="mt-1 text-xs font-semibold text-white/80">
                Built around your journey
              </p>
            </div>
          </div>
        </div>

        <div className="pb-8 text-center">
          <a
            href="#screens"
            className="inline-flex flex-col items-center gap-2 text-white/30 transition-colors hover:text-white/60"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Scroll to explore
            </span>

            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </Container>
    </section>
  );
}
