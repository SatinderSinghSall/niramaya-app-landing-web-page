import {
  BarChart3,
  HeartPulse,
  Leaf,
  Search,
  Target,
  UserRound,
} from "lucide-react";

import Container from "@/components/common/Container";

const features = [
  {
    number: "01",
    icon: UserRound,
    title: "Wellness profile",
    text: "Keep your personal wellness information organized in one dedicated profile.",
  },
  {
    number: "02",
    icon: Target,
    title: "Personal goals",
    text: "Set meaningful wellness goals and keep your journey focused.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Progress tracking",
    text: "Record and review your progress as your wellness journey develops.",
  },
  {
    number: "04",
    icon: Search,
    title: "Explore & discover",
    text: "Find wellness content, recommendations and experiences that interest you.",
  },
  {
    number: "05",
    icon: Leaf,
    title: "Yoga & Ayurveda",
    text: "Explore dedicated Yoga and Ayurvedic wellness experiences.",
  },
  {
    number: "06",
    icon: HeartPulse,
    title: "Consultation",
    text: "Access the consultation workflow and stay connected with your wellness journey.",
  },
];

export default function AppFeatures() {
  return (
    <section className="relative overflow-hidden border-y border-[#DCE4D8] bg-[#EEF2E6]">
      {/* Subtle background detail */}
      <div className="pointer-events-none absolute -left-48 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#D9E3D5]" />

      <div className="pointer-events-none absolute -right-56 -top-56 h-[520px] w-[520px] rounded-full border border-[#D9E3D5]" />

      <Container>
        <div className="relative py-16 sm:py-20 lg:py-[88px]">
          {/* =====================================================
              HEADER
          ====================================================== */}
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#4D6A50]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4D6A50]">
                  Inside the app
                </span>
              </div>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#98A398]">
                06 connected experiences
              </p>
            </div>

            <div>
              <h2 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#263F31] sm:text-5xl lg:text-[3.7rem]">
                The essentials of your
                <span className="block text-[#4D6A50]">wellness journey.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6D796F] sm:text-base">
                Niramaya brings the core parts of your wellness experience
                together, from understanding yourself and setting goals to
                discovering practices and following your progress.
              </p>
            </div>
          </div>

          {/* =====================================================
              FEATURE LIST
          ====================================================== */}
          <div className="mt-14 border-y border-[#D3DED0]">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.number}
                  className={`group grid gap-5 py-7 sm:grid-cols-[64px_56px_0.7fr_1fr] sm:items-center sm:gap-6 lg:grid-cols-[72px_64px_0.8fr_1.2fr] lg:gap-8 ${
                    index !== features.length - 1
                      ? "border-b border-[#D3DED0]"
                      : ""
                  }`}
                >
                  {/* Number */}
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#98A398]">
                    {feature.number}
                  </span>

                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B8C9B3] bg-[#F4F6F0]">
                    <Icon className="h-4 w-4 text-[#4D6A50]" />
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#263F31] transition-colors duration-300 group-hover:text-[#4D6A50]">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="max-w-xl text-sm leading-6 text-[#78857A]">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* =====================================================
              BOTTOM NOTE
          ====================================================== */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C7D3C3]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#89968B]">
                Personal · Practical · Connected
              </p>
            </div>

            <p className="text-xs text-[#89968B]">
              One experience, connected around you.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
