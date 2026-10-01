import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, SunMedium } from "lucide-react";
import Container from "@/components/common/Container";

import yogaScreen from "@/assets/images/app-screenshots/Screen-13.jpg";

export default function YogaHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#263F31] text-white">
      {/* ============================================================ */}
      {/* BACKGROUND DETAIL                                            */}
      {/* ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -top-52 h-[620px] w-[620px] rounded-full border border-white/[0.07]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-64 -left-48 h-[560px] w-[560px] rounded-full border border-white/[0.06]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[32%] top-[18%] h-2 w-2 rounded-full bg-[#B8C9B3]/50"
      />

      <Container>
        <div className="relative grid items-center gap-12 py-12 sm:py-16 lg:min-h-[610px] lg:grid-cols-[1fr_0.82fr] lg:gap-16 lg:py-16 xl:grid-cols-[1fr_0.78fr] xl:gap-20">
          {/* ======================================================== */}
          {/* LEFT — HERO COPY                                         */}
          {/* ======================================================== */}

          <div className="relative z-10 max-w-[680px]">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 border border-white/10 bg-white/[0.045] px-3.5 py-2">
              <SunMedium
                className="h-3.5 w-3.5 text-[#B8C9B3]"
                strokeWidth={1.7}
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/65">
                Niramaya Yoga
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 max-w-3xl text-[3.3rem] font-semibold leading-[0.94] tracking-[-0.055em] sm:text-[4.4rem] lg:text-[5rem] xl:text-[5.35rem]">
              Make space for
              <span className="block text-[#B8C9B3]">mindful practice.</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[570px] text-[15px] leading-7 text-white/60 sm:text-base">
              Explore Yoga practices, categories and detailed wellness content
              through the Niramaya experience — designed to help you discover
              practices that fit your journey.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/app"
                className="group inline-flex h-[50px] items-center justify-center gap-3 rounded-full bg-[#F5F7F1] pl-6 pr-2 text-sm font-semibold !text-[#263F31] shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
              >
                <span className="whitespace-nowrap !text-[#263F31]">
                  Explore Yoga in the app
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#263F31]">
                  <ArrowRight className="h-4 w-4 !text-white transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>

              <Link
                href="/wellness"
                className="inline-flex h-[50px] items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold !text-white transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.05]"
              >
                <span className="!text-white">Back to wellness</span>
              </Link>
            </div>

            {/* Small supporting line */}
            <div className="mt-9 flex items-center gap-3">
              <span className="h-px w-8 bg-white/20" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                Explore · Practice · Discover
              </span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT — REAL APP SCREENSHOT                              */}
          {/* ======================================================== */}

          <div className="relative mx-auto w-full max-w-[410px] lg:justify-self-end">
            {/* Soft glow behind phone */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B8C9B3]/10 blur-3xl"
            />

            {/* Decorative ring */}
            <div
              aria-hidden="true"
              className="absolute -right-10 top-10 h-32 w-32 rounded-full border border-white/[0.08]"
            />

            {/* Phone */}
            <div className="relative z-10 mx-auto w-[230px] sm:w-[250px] lg:w-[270px]">
              <div className="relative overflow-hidden rounded-[2.2rem] border-[7px] border-[#17291F] bg-[#17291F] shadow-[0_35px_80px_rgba(0,0,0,0.32)]">
                {/* Phone top detail */}
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-[#17291F]"
                />

                <div className="relative aspect-[9/18.5] overflow-hidden rounded-[1.75rem] bg-[#EEF2E6]">
                  <Image
                    src={yogaScreen}
                    alt="Niramaya Yoga experience in the mobile app"
                    fill
                    priority
                    sizes="270px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* App label */}
              <div className="absolute -bottom-5 -left-16 hidden sm:block">
                <div className="flex items-center gap-2.5 border border-white/10 bg-[#304A3A] px-4 py-3 shadow-[0_15px_35px_rgba(0,0,0,0.16)]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#B8C9B3]/10">
                    <Sparkles
                      className="h-3.5 w-3.5 text-[#B8C9B3]"
                      strokeWidth={1.7}
                    />
                  </span>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">
                      Niramaya
                    </p>
                    <p className="mt-0.5 text-xs font-semibold text-white/75">
                      Explore at your pace
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating category detail */}
            <div className="absolute -right-3 bottom-12 z-20 hidden sm:block">
              <div className="border border-white/10 bg-[#304A3A]/95 px-4 py-3 backdrop-blur-sm">
                <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-white/35">
                  Wellness library
                </p>

                <p className="mt-1 text-sm font-semibold text-white/80">
                  Yoga practices
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================== */}
        {/* BOTTOM META                                                */}
        {/* ========================================================== */}

        <div className="relative border-t border-white/[0.08]">
          <div className="grid py-5 sm:grid-cols-3 sm:py-6">
            <div className="flex items-center gap-3 sm:border-r sm:border-white/[0.08] sm:pr-8">
              <span className="text-[10px] font-bold tracking-[0.16em] text-white/25">
                01
              </span>

              <span className="text-xs font-medium text-white/50">
                Explore Yoga
              </span>
            </div>

            <div className="mt-3 flex items-center gap-3 sm:mt-0 sm:border-r sm:border-white/[0.08] sm:px-8">
              <span className="text-[10px] font-bold tracking-[0.16em] text-white/25">
                02
              </span>

              <span className="text-xs font-medium text-white/50">
                Discover practices
              </span>
            </div>

            <div className="mt-3 flex items-center gap-3 sm:mt-0 sm:pl-8">
              <span className="text-[10px] font-bold tracking-[0.16em] text-white/25">
                03
              </span>

              <span className="text-xs font-medium text-white/50">
                Find what fits you
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
