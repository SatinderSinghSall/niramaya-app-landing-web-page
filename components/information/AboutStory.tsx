import { Compass, HeartPulse, Layers3 } from "lucide-react";
import Container from "@/components/common/Container";

const items = [
  {
    number: "01",
    icon: HeartPulse,
    title: "Start with your context",
    text: "Niramaya begins with a structured onboarding experience covering personal details, physical health, wellbeing, lifestyle, nutrition, sleep, fitness, Yoga and preferences.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Turn information into direction",
    text: "Your wellness information becomes part of the wider application experience, connecting your profile with goals, progress and wellness exploration.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Keep everything connected",
    text: "Goals, progress, wellness content, profile management and consultation workflows come together within one connected experience.",
  },
];

export default function AboutStory() {
  return (
    <section className="relative overflow-hidden bg-[#F7F8F4]">
      {/* Quiet background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full border border-[#4D6A50]/[0.055]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 bottom-[-220px] h-[480px] w-[480px] rounded-full border border-[#4D6A50]/[0.045]"
      />

      <Container>
        <div className="relative py-20 sm:py-24 lg:py-28">
          {/* ===================================================== */}
          {/* INTRO                                                 */}
          {/* ===================================================== */}

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            {/* Section label */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#4D6A50]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4D6A50]">
                  The idea behind Niramaya
                </p>
              </div>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A0AAA1]">
                01 / Our approach
              </p>
            </div>

            {/* Main statement */}
            <div>
              <h2 className="max-w-4xl text-[2.75rem] font-semibold leading-[1] tracking-[-0.045em] text-[#263F31] sm:text-5xl lg:text-[4.25rem]">
                Wellness starts with{" "}
                <span className="text-[#4D6A50]">
                  understanding the whole picture.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-7 text-[#6D796F] sm:text-lg sm:leading-8">
                Niramaya is designed around a personalized wellness journey.
                Instead of treating wellness as a collection of disconnected
                tools, the platform brings your information, goals, progress and
                discovery together in one experience.
              </p>
            </div>
          </div>

          {/* ===================================================== */}
          {/* STORY                                                  */}
          {/* ===================================================== */}

          <div className="mt-16 border-y border-[#DDE3D9] lg:mt-20">
            <div className="grid md:grid-cols-3">
              {items.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className={[
                      "group relative py-9 sm:py-10 lg:py-12",
                      index !== 0
                        ? "border-t border-[#DDE3D9] md:border-l md:border-t-0 md:pl-8 lg:pl-10"
                        : "",
                      index !== items.length - 1 ? "md:pr-8 lg:pr-10" : "",
                    ].join(" ")}
                  >
                    {/* Top row */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold tracking-[0.16em] text-[#9AA49B]">
                        {item.number}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8E0D5] bg-[#EEF2E6] transition-all duration-300 group-hover:border-[#4D6A50]/25 group-hover:bg-[#E4EBDF]">
                        <Icon
                          className="h-[17px] w-[17px] text-[#4D6A50]"
                          strokeWidth={1.7}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-8">
                      <h3 className="max-w-xs text-xl font-semibold leading-[1.15] tracking-[-0.025em] text-[#263F31]">
                        {item.title}
                      </h3>

                      <p className="mt-4 max-w-sm text-sm leading-6 text-[#727D74]">
                        {item.text}
                      </p>
                    </div>

                    {/* Bottom detail */}
                    <div className="mt-8 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C65D3C]" />
                      <span className="h-px w-8 bg-[#CBD7C8] transition-all duration-300 group-hover:w-12" />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Small closing statement */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs uppercase tracking-[0.16em] text-[#9AA49B]">
              Personal · Practical · Connected
            </p>

            <div className="flex items-center gap-2 text-xs text-[#6D796F]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4D6A50]" />
              One connected wellness experience
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
