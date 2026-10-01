import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import Container from "@/components/common/Container";

import screen18 from "@/assets/images/app-screenshots/Screen-18.jpg";
import screen19 from "@/assets/images/app-screenshots/Screen-19.jpg";
import screen20 from "@/assets/images/app-screenshots/Screen-20.jpg";

export default function AyurvedaConsultation() {
  return (
    <section className="relative overflow-hidden border-y border-[#3B4639] bg-[#30372D] text-white">
      {/* Subtle background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-white/[0.06]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 -left-40 h-[500px] w-[500px] rounded-full bg-white/[0.025]"
      />

      <Container>
        <div className="relative grid items-center gap-12 py-14 sm:py-16 lg:min-h-[570px] lg:grid-cols-[0.78fr_1.22fr] lg:gap-8 lg:py-12">
          {/* ====================================================== */}
          {/* COPY                                                     */}
          {/* ====================================================== */}

          <div className="relative z-20 max-w-xl">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/35">
                04
              </span>

              <span className="h-px w-7 bg-white/20" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#DAD5C2]">
                Ayurvedic consultation
              </span>
            </div>

            <h2 className="mt-5 max-w-lg text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-[3.6rem]">
              When you want to go
              <span className="block text-[#DAD5C2]">beyond discovery.</span>
            </h2>

            <p className="mt-5 max-w-md text-[15px] leading-7 text-white/55">
              Niramaya includes a consultation workflow designed around
              connecting users with Ayurvedic professionals.
            </p>

            <Link
              href="/app"
              className="group mt-7 inline-flex h-12 items-center gap-3 rounded-full bg-[#F7F6F0] pl-6 pr-2 text-sm font-semibold !text-[#30372D] transition-colors duration-200 hover:bg-white"
            >
              <span className="!text-[#30372D]">Explore consultation</span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#30372D]">
                <ArrowRight
                  className="h-4 w-4 !text-white transition-transform duration-200 group-hover:translate-x-0.5"
                  strokeWidth={1.8}
                />
              </span>
            </Link>
          </div>

          {/* ====================================================== */}
          {/* THREE APP SCREENS                                        */}
          {/* ====================================================== */}

          <div className="relative mx-auto h-[390px] w-full max-w-[590px] sm:h-[450px] lg:h-[510px]">
            {/* Ground shadow */}
            <div
              aria-hidden="true"
              className="absolute bottom-5 left-1/2 h-24 w-80 -translate-x-1/2 rounded-full bg-black/20 blur-3xl"
            />

            {/* -------------------------------------------------- */}
            {/* LEFT — SCREEN 19                                   */}
            {/* -------------------------------------------------- */}

            <div className="absolute left-[3%] top-12 z-10 w-[145px] rotate-[-7deg] sm:left-[4%] sm:w-[175px] lg:top-16 lg:w-[195px]">
              <div className="rounded-[2.2rem] border-[6px] border-[#20261F] bg-[#20261F] p-[3px] shadow-[0_25px_55px_rgba(0,0,0,0.25)]">
                <div className="overflow-hidden rounded-[1.8rem]">
                  <Image
                    src={screen19}
                    alt="Niramaya consultation app screen"
                    width={1080}
                    height={2400}
                    className="block h-auto w-full"
                  />
                </div>
              </div>
            </div>

            {/* -------------------------------------------------- */}
            {/* CENTER — SCREEN 18                                  */}
            {/* -------------------------------------------------- */}

            <div className="absolute left-1/2 top-0 z-30 w-[190px] -translate-x-1/2 sm:w-[220px] lg:w-[245px]">
              <div className="rounded-[2.6rem] border-[7px] border-[#20261F] bg-[#20261F] p-[3px] shadow-[0_35px_75px_rgba(0,0,0,0.32)]">
                <div className="overflow-hidden rounded-[2.15rem]">
                  <Image
                    src={screen18}
                    alt="Niramaya consultation experience"
                    width={1080}
                    height={2400}
                    priority
                    className="block h-auto w-full"
                  />
                </div>
              </div>
            </div>

            {/* -------------------------------------------------- */}
            {/* RIGHT — SCREEN 20                                   */}
            {/* -------------------------------------------------- */}

            <div className="absolute right-[3%] top-12 z-10 w-[145px] rotate-[7deg] sm:right-[4%] sm:w-[175px] lg:top-16 lg:w-[195px]">
              <div className="rounded-[2.2rem] border-[6px] border-[#20261F] bg-[#20261F] p-[3px] shadow-[0_25px_55px_rgba(0,0,0,0.25)]">
                <div className="overflow-hidden rounded-[1.8rem]">
                  <Image
                    src={screen20}
                    alt="Niramaya consultation app screen"
                    width={1080}
                    height={2400}
                    className="block h-auto w-full"
                  />
                </div>
              </div>
            </div>

            {/* Small product label */}
            <div className="absolute bottom-0 left-1/2 z-40 -translate-x-1/2">
              <div className="flex items-center gap-2 border border-white/10 bg-[#30372D] px-4 py-2.5">
                <CalendarDays
                  className="h-3.5 w-3.5 text-[#DAD5C2]"
                  strokeWidth={1.7}
                />

                <span className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55">
                  Consultation in Niramaya
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
