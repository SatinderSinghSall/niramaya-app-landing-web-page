import { CircleUserRound, Goal, Compass, BarChart3 } from "lucide-react";
import Container from "@/components/common/Container";

const journey = [
  {
    icon: CircleUserRound,
    title: "Know your starting point",
    text: "Your profile and onboarding information form the foundation of your experience.",
  },
  {
    icon: Goal,
    title: "Set your direction",
    text: "Your wellness goals give you something meaningful to work toward.",
  },
  {
    icon: Compass,
    title: "Explore",
    text: "Discover Yoga, Ayurveda and other wellness-oriented content.",
  },
  {
    icon: BarChart3,
    title: "Keep track",
    text: "Use progress tracking to continue recording and reviewing your journey.",
  },
];

export default function WellnessJourney() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4D6A50]">
              The bigger picture
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#263F31] sm:text-5xl">
              Wellness works better
              <span className="block text-[#4D6A50]">as a journey.</span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#6D796F] sm:text-base">
              The wellness experiences in Niramaya are connected to the wider
              application, from your profile and goals to discovery and
              progress.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-8 hidden h-[calc(100%-64px)] w-px bg-[#DCE4D7] sm:block" />

            <div className="space-y-5">
              {journey.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="relative flex gap-5 rounded-3xl border border-[#E3E7DF] bg-[#FAFBF8] p-6 transition-all duration-300 hover:border-[#4D6A50]/20 hover:bg-white hover:shadow-lg sm:pl-4"
                  >
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EEF2E6] text-[#4D6A50]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#929B92]">
                          0{index + 1}
                        </span>

                        <h3 className="font-semibold text-[#263F31]">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-[#6D796F]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
