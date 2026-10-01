import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/common/Container";

import Screen1 from "@/assets/images/app-screenshots/Screen-1.jpg";
import Screen2 from "@/assets/images/app-screenshots/Screen-2.jpg";
import Screen3 from "@/assets/images/app-screenshots/Screen-3.jpg";
import Screen4 from "@/assets/images/app-screenshots/Screen-4.jpg";
import Screen5 from "@/assets/images/app-screenshots/Screen-5.jpg";
import Screen6 from "@/assets/images/app-screenshots/Screen-6.jpg";
import Screen7 from "@/assets/images/app-screenshots/Screen-7.jpg";
import Screen8 from "@/assets/images/app-screenshots/Screen-8.jpg";
import Screen9 from "@/assets/images/app-screenshots/Screen-9.jpg";
import Screen10 from "@/assets/images/app-screenshots/Screen-10.jpg";
import Screen11 from "@/assets/images/app-screenshots/Screen-11.jpg";
import Screen12 from "@/assets/images/app-screenshots/Screen-12.jpg";
import Screen13 from "@/assets/images/app-screenshots/Screen-13.jpg";
import Screen14 from "@/assets/images/app-screenshots/Screen-14.jpg";
import Screen15 from "@/assets/images/app-screenshots/Screen-15.jpg";
import Screen16 from "@/assets/images/app-screenshots/Screen-16.jpg";
import Screen17 from "@/assets/images/app-screenshots/Screen-17.jpg";
import Screen18 from "@/assets/images/app-screenshots/Screen-18.jpg";
import Screen19 from "@/assets/images/app-screenshots/Screen-19.jpg";
import Screen20 from "@/assets/images/app-screenshots/Screen-20.jpg";
import Screen21 from "@/assets/images/app-screenshots/Screen-21.jpg";
import Screen22 from "@/assets/images/app-screenshots/Screen-22.jpg";
import Screen23 from "@/assets/images/app-screenshots/Screen-23.jpg";
import Screen24 from "@/assets/images/app-screenshots/Screen-24.jpg";
import Screen25 from "@/assets/images/app-screenshots/Screen-25.jpg";
import Screen26 from "@/assets/images/app-screenshots/Screen-26.jpg";
import Screen27 from "@/assets/images/app-screenshots/Screen-27.jpg";
import Screen28 from "@/assets/images/app-screenshots/Screen-28.jpg";

const screens = [
  { number: "01", image: Screen1 },
  { number: "02", image: Screen2 },
  { number: "03", image: Screen3 },
  { number: "04", image: Screen4 },
  { number: "05", image: Screen5 },
  { number: "06", image: Screen6 },
  { number: "07", image: Screen7 },
  { number: "08", image: Screen8 },
  { number: "09", image: Screen9 },
  { number: "10", image: Screen10 },
  { number: "11", image: Screen11 },
  { number: "12", image: Screen12 },
  { number: "13", image: Screen13 },
  { number: "14", image: Screen14 },
  { number: "15", image: Screen15 },
  { number: "16", image: Screen16 },
  { number: "17", image: Screen17 },
  { number: "18", image: Screen18 },
  { number: "19", image: Screen19 },
  { number: "20", image: Screen20 },
  { number: "21", image: Screen21 },
  { number: "22", image: Screen22 },
  { number: "23", image: Screen23 },
  { number: "24", image: Screen24 },
  { number: "25", image: Screen25 },
  { number: "26", image: Screen26 },
  { number: "27", image: Screen27 },
  { number: "28", image: Screen28 },
];

export default function AppScreens() {
  const featured = screens[0];
  const remainingScreens = screens.slice(1);

  return (
    <section
      id="screens"
      className="relative overflow-hidden border-y border-[#E0E6DC] bg-[#F7F8F4]"
    >
      {/* =========================================================
          BACKGROUND DETAIL
      ========================================================== */}

      <div className="pointer-events-none absolute -left-52 top-32 h-[440px] w-[440px] rounded-full border border-[#DDE5D9]" />

      <div className="pointer-events-none absolute -right-64 bottom-20 h-[560px] w-[560px] rounded-full border border-[#DDE5D9]" />

      <Container>
        <div className="relative py-16 sm:py-20 lg:py-24">
          {/* =====================================================
              HEADER
          ====================================================== */}

          <div className="grid gap-8 lg:grid-cols-[0.55fr_1fr] lg:items-end lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#4D6A50]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4D6A50]">
                  Inside Niramaya
                </span>
              </div>

              <p className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-[#9AA39A]">
                28 screens · one connected experience
              </p>
            </div>

            <div className="max-w-3xl">
              <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.045em] text-[#263F31] sm:text-5xl lg:text-[3.8rem]">
                See the app,
                <span className="block text-[#4D6A50]">screen by screen.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#6D796F] sm:text-base">
                Explore the real Niramaya mobile interface across its connected
                wellness experiences.
              </p>
            </div>
          </div>

          {/* =====================================================
              FEATURED SCREEN — SCREEN 01
          ====================================================== */}

          <div className="mt-14 lg:mt-16">
            <div className="relative overflow-hidden border border-[#D9E2D5] bg-[#EEF2E6]">
              {/* Decorative circle */}

              <div className="pointer-events-none absolute -right-28 -top-28 h-[380px] w-[380px] rounded-full border border-[#D4DED0]" />

              <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[420px] w-[420px] rounded-full bg-[#DCE7D8]/70 blur-3xl" />

              <div className="relative grid items-center lg:grid-cols-[0.75fr_1.25fr]">
                {/* Featured copy */}

                <div className="relative z-10 px-7 py-10 sm:px-10 lg:px-14 lg:py-14">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold tracking-[0.18em] text-[#89958A]">
                      {featured.number}
                    </span>

                    <span className="h-px w-8 bg-[#B8C8B3]" />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#4D6A50]">
                      App interface
                    </span>
                  </div>

                  <h3 className="mt-6 max-w-md text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#263F31] sm:text-5xl">
                    A closer look at
                    <span className="block text-[#4D6A50]">Niramaya.</span>
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-[#68766B]">
                    One connected mobile experience designed around your
                    everyday wellness journey.
                  </p>

                  <div className="mt-8 flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C65D3C]" />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#89958A]">
                      Screen 01 of 28
                    </span>
                  </div>
                </div>

                {/* Featured phone */}

                <div className="relative flex min-h-[480px] items-end justify-center overflow-hidden px-8 pt-10 sm:min-h-[540px] lg:min-h-[570px] lg:justify-center">
                  <div className="absolute bottom-[-180px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D8E4D4]/80 blur-3xl" />

                  <div className="relative z-10 w-[220px] sm:w-[245px] lg:w-[275px]">
                    <div className="rounded-[3rem] border-[6px] border-[#263F31] bg-[#17271D] p-1.5 shadow-[0_35px_80px_rgba(38,63,49,0.22)]">
                      <div className="relative aspect-[9/20] overflow-hidden rounded-[2.35rem] bg-white">
                        <Image
                          src={featured.image}
                          alt="Niramaya mobile app screen 01"
                          fill
                          priority
                          sizes="275px"
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              ALL 27 REMAINING SCREENS
          ====================================================== */}

          <div className="mt-5">
            <div className="mb-7 flex items-end justify-between border-b border-[#D9E2D5] pb-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4D6A50]">
                  Full interface
                </p>

                <h3 className="mt-2 text-xl font-semibold tracking-[-0.025em] text-[#263F31]">
                  Explore all screens
                </h3>
              </div>

              <p className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9AA39A] sm:block">
                02 — 28
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
              {remainingScreens.map((screen) => (
                <article
                  key={screen.number}
                  className="group relative overflow-hidden border border-[#DCE4D8] bg-white transition-all duration-300 hover:border-[#C6D3C2]"
                >
                  {/* Image area */}

                  <div className="relative flex h-[390px] items-end justify-center overflow-hidden bg-[#EEF2E6] px-4 pt-8">
                    {/* Number */}

                    <span className="absolute left-4 top-4 z-20 text-[10px] font-bold tracking-[0.16em] text-[#89958A]">
                      {screen.number}
                    </span>

                    {/* Small decorative line */}

                    <span className="absolute right-4 top-5 h-px w-7 bg-[#B8C9B3]" />

                    {/* Background circle */}

                    <div className="pointer-events-none absolute -bottom-28 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#DCE6D8]" />

                    {/* Phone */}

                    <div className="relative z-10 w-[155px] transition-transform duration-500 ease-out group-hover:-translate-y-2">
                      <div className="rounded-[2.35rem] border-[5px] border-[#263F31] bg-[#17271D] p-1 shadow-[0_22px_45px_rgba(38,63,49,0.18)]">
                        <div className="relative aspect-[9/20] overflow-hidden rounded-[1.8rem] bg-white">
                          <Image
                            src={screen.image}
                            alt={`Niramaya mobile app screen ${screen.number}`}
                            fill
                            sizes="155px"
                            className="object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Caption */}

                  <div className="flex items-center justify-between border-t border-[#E5E9E2] px-4 py-4">
                    <div>
                      <p className="text-xs font-semibold text-[#263F31]">
                        Screen {screen.number}
                      </p>

                      <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-[#9AA39A]">
                        Niramaya app
                      </p>
                    </div>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#DCE4D8] transition-all duration-300 group-hover:border-[#B8C9B3] group-hover:bg-[#EEF2E6]">
                      <ArrowUpRight className="h-3.5 w-3.5 text-[#7F8B81] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#4D6A50]" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* =====================================================
              FOOTER LINE
          ====================================================== */}

          <div className="mt-10 flex flex-col gap-3 border-t border-[#D9E2D5] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#89958A]">
              Personal · Practical · Connected
            </p>

            <p className="text-xs text-[#929B92]">
              28 screens across the Niramaya mobile experience.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
