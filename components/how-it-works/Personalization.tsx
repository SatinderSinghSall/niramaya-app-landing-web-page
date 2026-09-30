import {
  ArrowUpRight,
  BarChart3,
  CircleUserRound,
  Goal,
  Sparkles,
} from "lucide-react";
import Container from "@/components/common/Container";

const pillars = [
  {
    icon: CircleUserRound,
    number: "01",
    title: "Your information",
    description:
      "Your onboarding and health information create the foundation for your wellness experience.",
  },
  {
    icon: Goal,
    number: "02",
    title: "Your goals",
    description:
      "Your wellness goals give you a clear direction and a way to organize what you want to work toward.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Your discovery",
    description:
      "Explore wellness content, Yoga and Ayurveda experiences, recommendations, search and favorites.",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Your progress",
    description:
      "Keep track of your progress and continue updating your wellness journey over time.",
  },
];

export default function Personalization() {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-28">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Intro */}
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex rounded-full bg-[#EEF2E6] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#4D6A50]">
              Built around you
            </span>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#263F31] sm:text-5xl">
              One experience.
              <span className="block text-[#4D6A50]">
                Different parts of your journey.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#6D796F] sm:text-base">
              Niramaya connects the information you provide with the tools you
              use throughout the app, helping your profile, goals, discovery and
              progress live within the same wellness experience.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#263F31]">
              <span>Designed for continuity</span>
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>

          {/* Pillars */}
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <article
                  key={pillar.number}
                  className={`group relative overflow-hidden border border-[#E3E7DF] p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                    index === 0
                      ? "rounded-t-[2rem] sm:rounded-t-none sm:rounded-tl-[2rem]"
                      : index === 1
                        ? "sm:rounded-tr-[2rem]"
                        : index === 2
                          ? "sm:rounded-bl-[2rem]"
                          : "rounded-b-[2rem] sm:rounded-b-none sm:rounded-br-[2rem]"
                  }`}
                >
                  <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-[#EEF2E6] transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF2E6] text-[#4D6A50]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="text-xs font-semibold text-[#929B92]">
                        {pillar.number}
                      </span>
                    </div>

                    <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-[#263F31]">
                      {pillar.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#6D796F]">
                      {pillar.description}
                    </p>

                    <div className="mt-7 h-px w-10 bg-[#4D6A50]/30 transition-all duration-500 group-hover:w-full" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
