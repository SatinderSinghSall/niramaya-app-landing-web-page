import Image from "next/image";
import {
  BarChart3,
  HeartPulse,
  Leaf,
  Target,
  ArrowUpRight,
} from "lucide-react";

import Container from "@/components/common/Container";

import screen3 from "@/assets/images/app-screenshots/Screen-5.jpg";

const stats = [
  {
    icon: HeartPulse,
    label: "Wellness profile",
  },
  {
    icon: Target,
    label: "Personal goals",
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
    <section className="relative overflow-hidden border-b border-[#D9E2D5] bg-[#EEF2E6]">
      {/* Background detail */}
      <div className="pointer-events-none absolute -right-[260px] top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full border border-[#C8D6C4]/70" />

      <div className="pointer-events-none absolute -right-[140px] top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full border border-[#D5DFD1]/80" />

      <Container>
        <div className="relative grid items-center gap-10 py-12 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:py-16">
          {/* =========================================================
              LEFT CONTENT
          ========================================================== */}
          <div className="relative z-10 max-w-[570px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#4D6A50]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4D6A50]">
                One connected experience
              </p>
            </div>

            {/* Heading */}
            <h2 className="mt-4 max-w-[560px] text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.05em] text-[#263F31] sm:text-5xl lg:text-[3.65rem]">
              Everything you need,
              <span className="block text-[#4D6A50]">in one place.</span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-[500px] text-[15px] leading-7 text-[#68766B] sm:text-base">
              Your wellness profile, goals, progress and everyday discovery come
              together inside the Niramaya app.
            </p>

            {/* Feature list */}
            <div className="mt-7 max-w-[510px] border-y border-[#D2DDD0]">
              <div className="grid grid-cols-2">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className={[
                        "flex items-center gap-3 py-3.5",
                        index % 2 === 0
                          ? "border-r border-[#D2DDD0] pr-4"
                          : "pl-4",
                        index < 2 ? "border-b border-[#D2DDD0]" : "",
                      ].join(" ")}
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#C8D6C4] bg-[#F7F9F4]">
                        <Icon className="h-3.5 w-3.5 text-[#4D6A50]" />
                      </span>

                      <span className="text-xs font-semibold text-[#263F31]">
                        {stat.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom editorial line */}
            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#AEBDAA]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#788579]">
                Personal · Practical · Connected
              </p>
            </div>
          </div>

          {/* =========================================================
              RIGHT PRODUCT PRESENTATION
          ========================================================== */}
          <div className="relative flex min-h-[430px] items-center justify-center lg:min-h-[470px]">
            {/* Soft glow behind phone */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8D8C3]/50 blur-[75px]" />

            {/* Soft vertical product panel */}
            <div className="absolute left-1/2 top-1/2 h-[390px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-[3.5rem] bg-[#DCE6D8]" />

            {/* Phone */}
            <div className="relative z-10 w-[235px] sm:w-[255px] lg:w-[265px]">
              <div className="rounded-[3rem] border-[7px] border-[#17271D] bg-[#17271D] p-1.5 shadow-[0_32px_70px_rgba(38,63,49,0.2)]">
                <div className="overflow-hidden rounded-[2.35rem] bg-white">
                  <div className="relative aspect-[9/20] w-full">
                    <Image
                      src={screen3}
                      alt="Niramaya mobile application"
                      fill
                      priority
                      sizes="265px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Small product label */}
            <div className="absolute bottom-4 left-[calc(50%+105px)] z-20 hidden w-[150px] border border-[#C9D6C5] bg-[#F7F9F4] px-4 py-3 sm:block">
              <div className="flex items-center justify-between">
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#899489]">
                  Inside Niramaya
                </p>

                <ArrowUpRight className="h-3.5 w-3.5 text-[#4D6A50]" />
              </div>

              <p className="mt-1 text-xs font-semibold leading-5 text-[#263F31]">
                Built around your journey
              </p>
            </div>

            {/* Small decorative marker */}
            <div className="absolute left-[calc(50%-180px)] top-12 hidden h-2 w-2 rounded-full bg-[#C65D3C] sm:block" />
          </div>
        </div>
      </Container>
    </section>
  );
}
