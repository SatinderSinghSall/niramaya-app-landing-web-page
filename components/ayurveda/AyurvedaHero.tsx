import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

import Container from "@/components/common/Container";

import screen15 from "@/assets/images/app-screenshots/Screen-15.jpg";
import screen16 from "@/assets/images/app-screenshots/Screen-16.jpg";
import screen17 from "@/assets/images/app-screenshots/Screen-17.jpg";

export default function AyurvedaHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#DDD8C9] bg-[#F4F1E8]">
      {/* Subtle background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-44 -top-44 h-[520px] w-[520px] rounded-full border border-[#8A815F]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-52 -right-36 h-[560px] w-[560px] rounded-full bg-[#E7E2D3]/60"
      />

      <Container>
        <div className="relative grid items-center gap-10 py-10 sm:py-12 lg:min-h-[570px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:py-10">
          {/* ====================================================== */}
          {/* LEFT — COPY                                             */}
          {/* ====================================================== */}

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 border border-[#D8D1BF] bg-[#FAF8F1] px-3.5 py-2">
              <Leaf className="h-3.5 w-3.5 text-[#716A4F]" strokeWidth={1.7} />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#716A4F]">
                Niramaya Ayurveda
              </span>
            </div>

            <h1 className="mt-6 max-w-[650px] text-[3.2rem] font-semibold leading-[0.94] tracking-[-0.055em] text-[#30372D] sm:text-[4rem] lg:text-[4.5rem]">
              Explore the wisdom
              <span className="block text-[#716A4F]">of Ayurveda.</span>
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#687068] sm:text-base">
              Discover Ayurvedic wellness content, recommendations, search and
              consultation experiences within Niramaya.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/app"
                className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#30372D] pl-6 pr-2 text-sm font-semibold !text-white transition-colors duration-200 hover:bg-[#4D6A50]"
              >
                <span className="!text-white">Explore in the app</span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <ArrowRight
                    className="h-4 w-4 !text-white transition-transform duration-200 group-hover:translate-x-0.5"
                    strokeWidth={1.8}
                  />
                </span>
              </Link>

              <Link
                href="/wellness"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#30372D]/15 bg-[#FAF8F1] px-6 text-sm font-semibold !text-[#30372D] transition-colors duration-200 hover:bg-white"
              >
                <span className="!text-[#30372D]">Back to wellness</span>
              </Link>
            </div>
          </div>

          {/* ====================================================== */}
          {/* RIGHT — THREE APP SCREENS                               */}
          {/* ====================================================== */}

          <div className="relative mx-auto h-[410px] w-full max-w-[560px] sm:h-[460px] lg:h-[500px]">
            {/* Soft grounding */}
            <div
              aria-hidden="true"
              className="absolute bottom-5 left-1/2 h-32 w-72 -translate-x-1/2 rounded-full bg-[#8A815F]/10 blur-3xl"
            />

            {/* Left phone */}
            <div className="absolute left-[4%] top-12 z-10 w-[150px] rotate-[-7deg] sm:left-[5%] sm:w-[175px] lg:left-[3%] lg:top-16 lg:w-[190px]">
              <div className="rounded-[2.1rem] border-[6px] border-[#30372D] bg-[#30372D] p-[3px] shadow-[0_22px_50px_rgba(48,55,45,0.14)]">
                <div className="overflow-hidden rounded-[1.7rem]">
                  <Image
                    src={screen16}
                    alt="Niramaya Ayurveda app screen"
                    width={1080}
                    height={2400}
                    className="block h-auto w-full"
                  />
                </div>
              </div>
            </div>

            {/* Center / main phone */}
            <div className="absolute left-1/2 top-0 z-30 w-[205px] -translate-x-1/2 sm:w-[235px] lg:w-[250px]">
              <div className="rounded-[2.65rem] border-[7px] border-[#30372D] bg-[#30372D] p-[3px] shadow-[0_30px_75px_rgba(48,55,45,0.2)]">
                <div className="overflow-hidden rounded-[2.2rem]">
                  <Image
                    src={screen15}
                    alt="Niramaya Ayurveda experience"
                    width={1080}
                    height={2400}
                    priority
                    className="block h-auto w-full"
                  />
                </div>
              </div>
            </div>

            {/* Right phone */}
            <div className="absolute right-[4%] top-12 z-10 w-[150px] rotate-[7deg] sm:right-[5%] sm:w-[175px] lg:right-[3%] lg:top-16 lg:w-[190px]">
              <div className="rounded-[2.1rem] border-[6px] border-[#30372D] bg-[#30372D] p-[3px] shadow-[0_22px_50px_rgba(48,55,45,0.14)]">
                <div className="overflow-hidden rounded-[1.7rem]">
                  <Image
                    src={screen17}
                    alt="Niramaya Ayurveda app screen"
                    width={1080}
                    height={2400}
                    className="block h-auto w-full"
                  />
                </div>
              </div>
            </div>

            {/* Small caption */}
            <div className="absolute bottom-0 left-1/2 z-40 -translate-x-1/2 border border-[#D8D1BF] bg-[#FAF8F1] px-4 py-2.5">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="h-1.5 w-1.5 rounded-full bg-[#716A4F]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#716A4F]">
                  Ayurveda in Niramaya
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
