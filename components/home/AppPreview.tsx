import Link from "next/link";
import Image from "next/image";
import Container from "@/components/common/Container";
import {
  ArrowRight,
  Check,
  HeartPulse,
  Target,
  TrendingUp,
  Sparkles,
} from "lucide-react";

import Screen1 from "@/assets/images/app-screenshots/Screen-1.jpg";
import Screen2 from "@/assets/images/app-screenshots/Screen-2.jpg";
import Screen3 from "@/assets/images/app-screenshots/Screen-3.jpg";

const highlights = [
  {
    icon: HeartPulse,
    label: "Your wellness",
    value: "All in one place",
  },
  {
    icon: Target,
    label: "Your goals",
    value: "Simple & focused",
  },
  {
    icon: TrendingUp,
    label: "Your progress",
    value: "See the journey",
  },
];

export default function AppPreview() {
  return (
    <section className="overflow-hidden border-b border-[#E3E7DF] bg-white">
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          {/* =====================================================
              SECTION INTRO
          ====================================================== */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#456354] sm:text-[11px]">
              The Niramaya app
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-[#203D30] sm:text-5xl lg:text-[3.7rem]">
              Your wellness journey,
              <br />
              wherever you are.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#6D796F] sm:text-[16px]">
              Bring your profile, goals, progress and wellness exploration
              together in one calm, simple experience.
            </p>
          </div>

          {/* =====================================================
              APP SHOWCASE
          ====================================================== */}
          <div className="relative mt-12 overflow-hidden rounded-[28px] border border-[#DCE4D9] bg-[#EEF2E6] sm:mt-14 lg:mt-16">
            <div className="grid min-h-[570px] items-center lg:grid-cols-[0.9fr_1.1fr]">
              {/* =================================================
                  LEFT CONTENT
              ================================================== */}
              <div className="px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
                <div className="max-w-md">
                  {/* ICON */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#203D30] text-white">
                    <Sparkles size={18} strokeWidth={1.6} aria-hidden="true" />
                  </div>

                  {/* EYEBROW */}
                  <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B86F52]">
                    One place for your wellbeing
                  </p>

                  {/* TITLE */}
                  <h3 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-[#203D30] sm:text-4xl">
                    A simpler way to stay connected to yourself.
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-5 text-[15px] leading-7 text-[#6D796F]">
                    From understanding your wellness context to setting goals
                    and noticing progress, Niramaya keeps the pieces of your
                    journey together without making wellness feel complicated.
                  </p>

                  {/* =================================================
                      HIGHLIGHTS
                  ================================================== */}
                  <div className="mt-8 space-y-3">
                    {highlights.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.label}
                          className="flex items-center gap-3 rounded-xl border border-[#D8E1D5] bg-white/60 px-4 py-3 transition-colors duration-200 hover:bg-white"
                        >
                          {/* ICON */}
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E5ECE2] text-[#456354]">
                            <Icon
                              size={16}
                              strokeWidth={1.6}
                              aria-hidden="true"
                            />
                          </span>

                          {/* TEXT */}
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-[#203D30]">
                              {item.label}
                            </p>

                            <p className="mt-0.5 text-[11px] text-[#89958B]">
                              {item.value}
                            </p>
                          </div>

                          {/* CHECK */}
                          <Check
                            size={15}
                            strokeWidth={2}
                            className="ml-auto text-[#6A846E]"
                            aria-hidden="true"
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* =================================================
                      CTA
                  ================================================== */}
                  <div className="mt-8">
                    <Link
                      href="/app"
                      className="group inline-flex items-center gap-3 rounded-full bg-[#203D30] px-4 py-2.5 text-[13px] font-semibold !text-white shadow-[0_8px_22px_rgba(32,61,48,0.13)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2B4D3D] hover:shadow-[0_12px_28px_rgba(32,61,48,0.17)]"
                    >
                      <span className="!text-white">Discover the app</span>

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#203D30] transition-transform duration-300 group-hover:translate-x-0.5">
                        <ArrowRight
                          size={14}
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* =================================================
                  RIGHT — REAL APP SCREENSHOTS
              ================================================== */}
              <div className="relative flex min-h-[480px] items-center justify-center px-6 pb-12 pt-10 sm:px-10 lg:min-h-[570px] lg:px-8 lg:pb-0">
                {/* ---------------------------------------------
                    SUBTLE BACKGROUND CIRCLES
                ---------------------------------------------- */}
                <div className="absolute h-[330px] w-[330px] rounded-full border border-[#D6DFD2] sm:h-[420px] sm:w-[420px]" />

                <div className="absolute h-[250px] w-[250px] rounded-full border border-[#DCE4D9] sm:h-[320px] sm:w-[320px]" />

                {/* =================================================
                    LEFT SCREEN — SCREEN 2
                ================================================== */}
                <div className="absolute left-[4%] z-10 hidden w-[150px] -rotate-[7deg] overflow-hidden rounded-[24px] border-[5px] border-[#203D30] bg-[#203D30] shadow-[0_20px_40px_rgba(32,61,48,0.16)] sm:block lg:left-[7%] lg:w-[165px]">
                  <Image
                    src={Screen2}
                    alt="Niramaya app screen"
                    className="h-auto w-full"
                  />
                </div>

                {/* =================================================
                    MAIN SCREEN — SCREEN 1
                ================================================== */}
                <div className="relative z-20 w-[210px] overflow-hidden rounded-[30px] border-[6px] border-[#203D30] bg-[#203D30] shadow-[0_28px_55px_rgba(32,61,48,0.20)] sm:w-[235px]">
                  <Image
                    src={Screen1}
                    alt="Niramaya app home screen"
                    className="h-auto w-full"
                    priority
                  />
                </div>

                {/* =================================================
                    RIGHT SCREEN — SCREEN 3
                ================================================== */}
                <div className="absolute right-[4%] z-10 hidden w-[150px] rotate-[7deg] overflow-hidden rounded-[24px] border-[5px] border-[#203D30] bg-[#203D30] shadow-[0_20px_40px_rgba(32,61,48,0.16)] sm:block lg:right-[7%] lg:w-[165px]">
                  <Image
                    src={Screen3}
                    alt="Niramaya app progress screen"
                    className="h-auto w-full"
                  />
                </div>

                {/* =================================================
                    FLOATING GOALS CARD
                ================================================== */}
                <div className="absolute left-[3%] top-[18%] z-30 hidden rounded-2xl border border-[#D6E0D3] bg-white px-4 py-3 shadow-[0_14px_30px_rgba(32,61,48,0.10)] sm:block lg:left-[5%]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8EFE5] text-[#456354]">
                      <Target size={14} strokeWidth={1.7} aria-hidden="true" />
                    </span>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.12em] text-[#9AA59B]">
                        Goals
                      </p>

                      <p className="mt-0.5 text-xs font-semibold text-[#203D30]">
                        Stay focused
                      </p>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    FLOATING PROGRESS CARD
                ================================================== */}
                <div className="absolute bottom-[16%] right-[3%] z-30 hidden rounded-2xl border border-[#D6E0D3] bg-white px-4 py-3 shadow-[0_14px_30px_rgba(32,61,48,0.10)] sm:block lg:right-[5%]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F2E9E3] text-[#B86F52]">
                      <TrendingUp
                        size={14}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </span>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.12em] text-[#9AA59B]">
                        Progress
                      </p>

                      <p className="mt-0.5 text-xs font-semibold text-[#203D30]">
                        Keep moving
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              BOTTOM DETAIL
          ====================================================== */}
          <div className="mt-10 flex items-center justify-center gap-3 sm:mt-12">
            <span className="h-px w-8 bg-[#D6DED3]" />

            <p className="text-center text-[10px] font-medium uppercase tracking-[0.16em] text-[#8B978D]">
              Wellness that stays with you
            </p>

            <span className="h-px w-8 bg-[#D6DED3]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
