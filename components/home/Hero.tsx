"use client";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/common/Container";

import Screen1 from "@/assets/images/app-screenshots/Screen-1.jpg";
import Screen2 from "@/assets/images/app-screenshots/Screen-24.jpg";
import Screen3 from "@/assets/images/app-screenshots/Screen-7.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#E4E7DF] bg-[#EEF2E6]">
      <Container>
        <div
          className="
            grid
            min-h-[calc(100vh-82px)]
            items-center
            gap-14
            py-16
            sm:py-20
            lg:grid-cols-[0.92fr_1.08fr]
            lg:gap-8
            lg:py-20
            xl:gap-14
            xl:py-24
          "
        >
          {/* =====================================================
              LEFT — HERO CONTENT
          ===================================================== */}

          <div className="relative z-10 max-w-[680px]">
            {/* Eyebrow */}

            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#B86F52]" />

              <p
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#42604E]
                "
              >
                Personalized everyday wellness
              </p>
            </div>

            {/* Heading */}

            <h1
              className="
                max-w-[680px]
                text-[3.4rem]
                font-semibold
                leading-[0.98]
                tracking-[-0.045em]
                text-[#203D30]
                sm:text-[4.4rem]
                lg:text-[4.5rem]
                xl:text-[5.2rem]
              "
            >
              Wellness that
              <br />
              fits your
              <br />
              everyday life.
            </h1>

            {/* Description */}

            <p
              className="
                mt-7
                max-w-[590px]
                text-[17px]
                leading-8
                text-[#66756B]
                sm:text-[18px]
              "
            >
              Understand your wellbeing, build healthier habits, and discover
              personalized guidance through yoga, Ayurveda, goals, and everyday
              wellness with Niramaya.
            </p>

            {/* =================================================
                CTA BUTTONS
            ================================================= */}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {/* Primary */}

              <Link
                href="/app"
                className="
    group
    inline-flex
    h-[56px]
    min-w-[240px]
    items-center
    justify-between
    rounded-[10px]
    bg-[#214438]
    px-5
    text-white
    shadow-[0_8px_24px_rgba(33,68,56,0.16)]
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:bg-[#18362C]
    hover:shadow-[0_12px_30px_rgba(33,68,56,0.22)]
  "
              >
                <span
                  className="
      whitespace-nowrap
      text-[13px]
      font-bold
      uppercase
      tracking-[0.10em]
      text-white
    "
                >
                  Explore Niramaya
                </span>

                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white/15
                    text-white
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:bg-white/20
                  "
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 7H11.5M7.5 3L11.5 7L7.5 11"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>

              {/* Secondary */}

              <Link
                href="/how-it-works"
                className="
                  group
                  inline-flex
                  h-[54px]
                  items-center
                  justify-center
                  gap-3
                  rounded-[9px]
                  border
                  border-[#D5DDD4]
                  bg-[#F9FAF6]
                  px-6
                  text-[14px]
                  font-medium
                  text-[#294438]
                  transition-all
                  duration-300
                  hover:border-[#AEBCAF]
                  hover:bg-white
                "
              >
                <span>How it works</span>

                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M2 7H11.5M7.5 3L11.5 7L7.5 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            {/* =================================================
                SMALL FEATURE LINE
            ================================================= */}

            <div
              className="
                mt-9
                flex
                flex-wrap
                items-center
                gap-x-5
                gap-y-3
                text-[12px]
                font-medium
                text-[#718078]
              "
            >
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B86F52]" />
                Personalized wellness
              </span>

              <span className="hidden h-3 w-px bg-[#CCD4CA] sm:block" />

              <span>Goals & progress</span>

              <span className="hidden h-3 w-px bg-[#CCD4CA] sm:block" />

              <span>Yoga & Ayurveda</span>
            </div>
          </div>

          {/* =====================================================
              RIGHT — REAL APP SCREENS
          ===================================================== */}

          <div className="relative mx-auto w-full max-w-[650px]">
            {/* Small visual label */}

            <div
              className="
                absolute
                left-1/2
                top-0
                z-20
                hidden
                -translate-x-1/2
                items-center
                gap-2
                rounded-full
                border
                border-[#D9DED5]
                bg-[#F8F9F5]
                px-4
                py-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-[#50675A]
                shadow-sm
                sm:flex
              "
            >
              {/* <span className="h-1.5 w-1.5 rounded-full bg-[#B86F52]" /> */}
              Niramaya mobile app
            </div>

            {/* Decorative frame */}

            <div
              className="
                absolute
                left-1/2
                top-[8%]
                h-[82%]
                w-[78%]
                -translate-x-1/2
                rounded-[3rem]
                border
                border-[#DCE3D8]
                bg-[#E5EADF]
              "
            />

            {/* =================================================
                SCREEN COMPOSITION
            ================================================= */}

            <div
              className="
                relative
                mx-auto
                flex
                min-h-[560px]
                items-center
                justify-center
                pt-10
                sm:min-h-[620px]
                lg:min-h-[650px]
              "
            >
              {/* LEFT PHONE */}

              <div
                className="
                  absolute
                  left-[3%]
                  top-[15%]
                  z-10
                  w-[31%]
                  rotate-[-7deg]
                  transition-transform
                  duration-500
                  hover:rotate-[-4deg]
                  sm:left-[5%]
                "
              >
                <div
                  className="
                    overflow-hidden
                    rounded-[2rem]
                    border-[5px]
                    border-[#18382D]
                    bg-[#18382D]
                    shadow-[0_25px_50px_rgba(30,55,44,0.20)]
                  "
                >
                  <div className="overflow-hidden rounded-[1.55rem] bg-white">
                    <Image
                      src={Screen2}
                      alt="Niramaya mobile app screen"
                      className="h-auto w-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* MAIN PHONE */}

              <div
                className="
                  relative
                  z-30
                  w-[43%]
                  max-w-[285px]
                  transition-transform
                  duration-500
                  hover:-translate-y-2
                "
              >
                <div
                  className="
                    overflow-hidden
                    rounded-[2.4rem]
                    border-[6px]
                    border-[#17382C]
                    bg-[#17382C]
                    shadow-[0_35px_70px_rgba(30,55,44,0.25)]
                  "
                >
                  {/* Speaker */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-[9px]
                      z-10
                      h-[5px]
                      w-16
                      -translate-x-1/2
                      rounded-full
                      bg-[#0E261E]
                    "
                  />

                  <div className="overflow-hidden rounded-[1.9rem] bg-white">
                    <Image
                      src={Screen1}
                      alt="Niramaya wellness app"
                      className="h-auto w-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT PHONE */}

              <div
                className="
                  absolute
                  right-[3%]
                  top-[20%]
                  z-20
                  w-[31%]
                  rotate-[7deg]
                  transition-transform
                  duration-500
                  hover:rotate-[4deg]
                  sm:right-[5%]
                "
              >
                <div
                  className="
                    overflow-hidden
                    rounded-[2rem]
                    border-[5px]
                    border-[#214438]
                    bg-[#214438]
                    shadow-[0_25px_50px_rgba(30,55,44,0.18)]
                  "
                >
                  <div className="overflow-hidden rounded-[1.55rem] bg-white">
                    <Image
                      src={Screen3}
                      alt="Niramaya wellness and progress screen"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* =================================================
                  SMALL FLOATING INFO
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-[7%]
                  left-[7%]
                  z-40
                  hidden
                  rounded-[12px]
                  border
                  border-[#DDE3DA]
                  bg-[#FBFCF8]
                  px-4
                  py-3
                  shadow-[0_12px_30px_rgba(35,55,45,0.10)]
                  sm:block
                "
              >
                <p className="text-[10px] uppercase tracking-[0.12em] text-[#8B948D]">
                  Your wellbeing
                </p>

                <p className="mt-1 text-sm font-semibold text-[#294438]">
                  One day at a time.
                </p>
              </div>

              <div
                className="
                  absolute
                  bottom-[11%]
                  right-[7%]
                  z-40
                  hidden
                  rounded-[12px]
                  border
                  border-[#DDE3DA]
                  bg-[#214438]
                  px-4
                  py-3
                  text-white
                  shadow-[0_12px_30px_rgba(35,55,45,0.15)]
                  sm:block
                "
              >
                <p className="text-[10px] uppercase tracking-[0.12em] text-white/60">
                  Progress
                </p>

                <p className="mt-1 text-sm font-semibold">Keep going</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
