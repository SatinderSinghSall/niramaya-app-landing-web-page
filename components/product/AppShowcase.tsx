import { Activity, BarChart3, HeartPulse, Leaf, Target } from "lucide-react";
import Container from "@/components/common/Container";

const stats = [
  {
    icon: HeartPulse,
    label: "Wellness profile",
  },
  {
    icon: Target,
    label: "Goals",
  },
  {
    icon: BarChart3,
    label: "Progress",
  },
  {
    icon: Leaf,
    label: "Yoga & Ayurveda",
  },
];

export default function AppShowcase() {
  return (
    <section className="overflow-hidden bg-[#EEF2E6] py-24 sm:py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4D6A50]">
              One connected experience
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-[#263F31] sm:text-5xl">
              Everything you need,
              <span className="block text-[#4D6A50]">
                without losing the bigger picture.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#6D796F] sm:text-base">
              Your profile, goals, progress and wellness discovery tools live
              together inside the Niramaya mobile experience.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-3">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-[#DCE4D7] bg-white p-4"
                  >
                    <Icon className="h-4 w-4 text-[#4D6A50]" />

                    <p className="mt-4 text-xs font-semibold text-[#263F31]">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Screenshot frame */}
          <div className="relative">
            <div className="absolute -right-10 top-10 h-64 w-64 rounded-full bg-[#D9E4D5] blur-3xl" />

            <div className="relative rounded-[2.5rem] border border-[#DCE4D7] bg-white p-4 shadow-[0_30px_80px_rgba(38,63,49,0.12)] sm:p-6">
              <div className="flex items-center justify-between border-b border-[#E3E7DF] pb-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#929B92]">
                    App preview
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#263F31]">
                    Dashboard experience
                  </p>
                </div>

                <Activity className="h-5 w-5 text-[#4D6A50]" />
              </div>

              {/* Real screenshot goes here */}
              <div className="mt-5 flex min-h-[420px] items-center justify-center rounded-[2rem] bg-[#F5F7F2] p-6">
                <div className="w-full max-w-[250px] overflow-hidden rounded-[2.4rem] border-[6px] border-[#263F31] bg-[#263F31] p-1.5 shadow-2xl">
                  <div className="flex h-[470px] flex-col rounded-[2rem] bg-[#EEF2E6]">
                    <div className="px-5 pt-6">
                      <div className="h-2 w-14 rounded-full bg-[#C8D3C5]" />
                      <div className="mt-3 h-5 w-32 rounded-full bg-[#263F31]/15" />
                    </div>

                    <div className="mx-4 mt-7 rounded-3xl bg-[#263F31] p-5">
                      <div className="h-2 w-20 rounded-full bg-white/20" />
                      <div className="mt-3 h-6 w-28 rounded-full bg-white/10" />

                      <div className="mt-7 h-2 rounded-full bg-white/10">
                        <div className="h-2 w-3/5 rounded-full bg-[#B8C9B3]" />
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 px-4">
                      <div className="h-24 rounded-2xl bg-white" />
                      <div className="h-24 rounded-2xl bg-white" />
                    </div>

                    <div className="mx-4 mt-4 h-28 rounded-2xl bg-white" />
                  </div>
                </div>
              </div>

              <p className="mt-4 text-center text-xs text-[#929B92]">
                Replace this preview with the actual Niramaya mobile screenshot.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
