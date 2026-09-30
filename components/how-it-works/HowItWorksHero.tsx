import Link from "next/link";
import {
  ArrowRight,
  Check,
  CircleUserRound,
  Compass,
  Goal,
  Leaf,
} from "lucide-react";
import Container from "@/components/common/Container";

const journeyItems = [
  {
    icon: CircleUserRound,
    label: "Your profile",
    description: "Start with your wellness information",
  },
  {
    icon: Goal,
    label: "Your goals",
    description: "Turn intentions into meaningful goals",
  },
  {
    icon: Compass,
    label: "Your journey",
    description: "Explore wellness content and guidance",
  },
];

export default function HowItWorksHero() {
  return (
    <section className="relative overflow-hidden bg-[#EEF2E6]">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full border border-[#4D6A50]/10" />
      <div className="pointer-events-none absolute -right-20 top-32 h-56 w-56 rounded-full border border-[#4D6A50]/10" />

      <Container>
        <div className="grid min-h-[680px] items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-28">
          {/* Left */}
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#4D6A50]/15 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#4D6A50]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4D6A50]" />
              How Niramaya works
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-[#263F31] sm:text-6xl lg:text-7xl">
              Your wellness journey,
              <span className="block text-[#4D6A50]">built around you.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#6D796F] sm:text-lg">
              Niramaya brings your wellness information, goals, progress,
              exploration and support into one connected experience.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {/* Custom primary button */}
              <Link
                href="/app"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#263F31] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4D6A50] hover:shadow-xl"
              >
                Explore the app
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              {/* Custom secondary button */}
              <Link
                href="/features"
                className="inline-flex items-center justify-center rounded-full border border-[#263F31]/15 bg-white/60 px-6 py-3.5 text-sm font-semibold text-[#263F31] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4D6A50]/30 hover:bg-white"
              >
                Explore features
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#6D796F]">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4D6A50]/10">
                  <Check className="h-3 w-3 text-[#4D6A50]" />
                </span>
                Personalized experience
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4D6A50]/10">
                  <Check className="h-3 w-3 text-[#4D6A50]" />
                </span>
                Connected wellness tools
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative mx-auto w-full max-w-[540px]">
            {/* Background card */}
            <div className="absolute inset-5 rounded-[2rem] bg-[#263F31]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white p-5 shadow-[0_30px_80px_rgba(38,63,49,0.16)] sm:p-7">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#E3E7DF] pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#929B92]">
                    Your journey
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-[#263F31]">
                    A connected experience
                  </h2>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEF2E6]">
                  <Leaf className="h-5 w-5 text-[#4D6A50]" />
                </div>
              </div>

              {/* Journey cards */}
              <div className="relative mt-6 space-y-4">
                <div className="absolute left-[21px] top-8 bottom-8 w-px bg-[#DDE4D9]" />

                {journeyItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="relative flex items-center gap-4 rounded-2xl border border-[#E3E7DF] bg-[#FAFBF8] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#4D6A50]/20 hover:shadow-md"
                    >
                      <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF2E6] text-[#4D6A50]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="text-sm font-semibold text-[#263F31]">
                            {item.label}
                          </h3>

                          <span className="text-[11px] font-semibold text-[#929B92]">
                            0{index + 1}
                          </span>
                        </div>

                        <p className="mt-1 text-xs leading-5 text-[#929B92]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom visual */}
              <div className="mt-5 rounded-2xl bg-[#263F31] p-5 text-white">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-white/50">
                      Keep moving
                    </p>
                    <p className="mt-1 text-sm font-medium">
                      Small steps become a journey.
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
                    <ArrowRight className="h-4 w-4" />
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
