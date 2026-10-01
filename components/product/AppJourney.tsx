import { BarChart3, HeartPulse, Leaf, Target } from "lucide-react";

import Container from "@/components/common/Container";

const journey = [
  {
    number: "01",
    icon: HeartPulse,
    title: "Understand",
    text: "Build your wellness profile.",
  },
  {
    number: "02",
    icon: Target,
    title: "Set goals",
    text: "Choose what you want to work toward.",
  },
  {
    number: "03",
    icon: Leaf,
    title: "Explore",
    text: "Discover wellness content and practices.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Track",
    text: "Record and review your progress.",
  },
];

export default function AppJourney() {
  return (
    <section className="relative overflow-hidden border-y border-[#DCE4D8] bg-[#EEF2E6]">
      {/* Very subtle background detail */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-[#D9E3D5]" />

      <Container>
        <div className="relative py-16 sm:py-20 lg:py-[88px]">
          {/* =====================================================
              HEADER
          ====================================================== */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-[#4D6A50]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4D6A50]">
                Your journey
              </span>

              <span className="h-px w-7 bg-[#4D6A50]" />
            </div>

            <h2 className="mt-5 text-4xl font-semibold leading-[1] tracking-[-0.045em] text-[#263F31] sm:text-5xl lg:text-[3.6rem]">
              Understand
              <span className="mx-2 text-[#9BA99A] sm:mx-3">→</span>
              Explore
              <span className="mx-2 text-[#9BA99A] sm:mx-3">→</span>
              Track
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#6D796F] sm:text-base">
              The app connects the different parts of your wellness experience
              into one continuous journey.
            </p>
          </div>

          {/* =====================================================
              JOURNEY
          ====================================================== */}
          <div className="relative mt-14 lg:mt-16">
            {/* Desktop connecting line */}
            <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[28px] hidden h-px bg-[#B8C9B3] lg:block" />

            <div className="grid lg:grid-cols-4">
              {journey.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className={`relative px-5 text-center sm:px-8 lg:px-7 ${
                      index !== journey.length - 1
                        ? "border-b border-[#D9E2D5] pb-10 lg:border-b-0 lg:pb-0"
                        : ""
                    } ${index !== 0 ? "pt-10 lg:pt-0" : ""}`}
                  >
                    {/* Mobile connector */}
                    {index !== journey.length - 1 && (
                      <div className="absolute bottom-0 left-1/2 h-10 w-px bg-[#B8C9B3] lg:hidden" />
                    )}

                    {/* Icon */}
                    <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#B8C9B3] bg-[#EEF2E6]">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#263F31]">
                        <Icon className="h-4 w-4 text-[#D8E4D4]" />
                      </div>
                    </div>

                    {/* Number */}
                    <p className="mt-5 text-[10px] font-semibold tracking-[0.2em] text-[#98A398]">
                      {step.number}
                    </p>

                    {/* Title */}
                    <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] text-[#263F31]">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mx-auto mt-2 max-w-[190px] text-xs leading-5 text-[#7B877D]">
                      {step.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =====================================================
              BOTTOM NOTE
          ====================================================== */}
          <div className="mt-12 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C7D3C3]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#89968B]">
              Personal · Practical · Connected
            </p>

            <span className="h-px w-8 bg-[#C7D3C3]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
