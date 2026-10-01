"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import { useEffect, useState } from "react";

import Container from "@/components/common/Container";

import screen1 from "@/assets/images/app-screenshots/Screen-1.jpg";
import screen2 from "@/assets/images/app-screenshots/Screen-2.jpg";
import screen3 from "@/assets/images/app-screenshots/Screen-3.jpg";
import screen4 from "@/assets/images/app-screenshots/Screen-4.jpg";
import screen5 from "@/assets/images/app-screenshots/Screen-5.jpg";
import screen6 from "@/assets/images/app-screenshots/Screen-6.jpg";
import screen7 from "@/assets/images/app-screenshots/Screen-7.jpg";
import screen8 from "@/assets/images/app-screenshots/Screen-8.jpg";
import screen9 from "@/assets/images/app-screenshots/Screen-9.jpg";
import screen10 from "@/assets/images/app-screenshots/Screen-10.jpg";
import screen11 from "@/assets/images/app-screenshots/Screen-11.jpg";
import screen12 from "@/assets/images/app-screenshots/Screen-12.jpg";
import screen13 from "@/assets/images/app-screenshots/Screen-13.jpg";
import screen14 from "@/assets/images/app-screenshots/Screen-14.jpg";
import screen15 from "@/assets/images/app-screenshots/Screen-15.jpg";
import screen16 from "@/assets/images/app-screenshots/Screen-16.jpg";
import screen17 from "@/assets/images/app-screenshots/Screen-17.jpg";
import screen18 from "@/assets/images/app-screenshots/Screen-18.jpg";
import screen19 from "@/assets/images/app-screenshots/Screen-19.jpg";
import screen20 from "@/assets/images/app-screenshots/Screen-20.jpg";
import screen21 from "@/assets/images/app-screenshots/Screen-21.jpg";
import screen22 from "@/assets/images/app-screenshots/Screen-22.jpg";
import screen23 from "@/assets/images/app-screenshots/Screen-23.jpg";
import screen24 from "@/assets/images/app-screenshots/Screen-24.jpg";
import screen25 from "@/assets/images/app-screenshots/Screen-25.jpg";
import screen26 from "@/assets/images/app-screenshots/Screen-26.jpg";
import screen27 from "@/assets/images/app-screenshots/Screen-27.jpg";
import screen28 from "@/assets/images/app-screenshots/Screen-28.jpg";

const screens: StaticImageData[] = [
  screen1,
  screen2,
  screen3,
  screen4,
  screen5,
  screen6,
  screen7,
  screen8,
  screen9,
  screen10,
  screen11,
  screen12,
  screen13,
  screen14,
  screen15,
  screen16,
  screen17,
  screen18,
  screen19,
  screen20,
  screen21,
  screen22,
  screen23,
  screen24,
  screen25,
  screen26,
  screen27,
  screen28,
];

const screenLabels = [
  "Create your account",
  "Build your profile",
  "Your wellness profile",
  "Personalized dashboard",
  "Set your wellness goals",
  "Track your goals",
  "Your progress",
  "Progress journal",
  "Explore wellness",
  "Wellness recommendations",
  "Wellness search",
  "Saved wellness content",
  "Yoga",
  "Yoga practices",
  "Ayurveda",
  "Ayurvedic wellness",
  "Ayurvedic content",
  "Consultations",
  "Consultation overview",
  "Book a consultation",
  "Consultation request",
  "Consultation history",
  "Profile management",
  "Notifications",
  "App settings",
  "Account settings",
  "Personalized experience",
  "Your Niramaya journey",
];

export default function AppHero() {
  const [startIndex, setStartIndex] = useState(0);

  /*
   * Every 2 seconds all three phones move to the next
   * group of screens.
   *
   * 01 + 02 + 03
   * 04 + 05 + 06
   * 07 + 08 + 09
   * ...
   * 28 + 01 + 02
   */
  useEffect(() => {
    const interval = window.setInterval(() => {
      setStartIndex((current) => (current + 3) % screens.length);
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

  const leftIndex = startIndex % screens.length;
  const centerIndex = (startIndex + 1) % screens.length;
  const rightIndex = (startIndex + 2) % screens.length;

  return (
    <section className="relative overflow-hidden bg-[#263F31] text-white">
      {/* Background detail */}
      <div className="pointer-events-none absolute -right-56 -top-64 h-[680px] w-[680px] rounded-full border border-white/[0.055]" />

      <div className="pointer-events-none absolute -bottom-72 -left-56 h-[600px] w-[600px] rounded-full border border-white/[0.045]" />

      <Container>
        <div className="relative grid items-center gap-8 py-10 sm:py-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-2 lg:py-14 xl:py-16">
          {/* =========================================================
              LEFT — HERO COPY
          ========================================================== */}
          <div className="relative z-10 max-w-[650px]">
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.035] px-3.5 py-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#B8C9B3]/10">
                <Leaf className="h-3 w-3 text-[#B8C9B3]" />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                The Niramaya app
              </span>
            </div>

            <h1 className="mt-6 max-w-[650px] text-[3.2rem] font-semibold leading-[0.94] tracking-[-0.055em] sm:text-[4.2rem] lg:text-[4.55rem] xl:text-[4.9rem]">
              Your wellness
              <br />
              journey,
              <span className="block text-[#B8C9B3]">in one place.</span>
            </h1>

            <p className="mt-6 max-w-[590px] text-[15px] leading-7 text-white/60 sm:text-base">
              From your wellness profile and goals to Yoga, Ayurveda,
              consultation and progress, Niramaya brings your everyday wellness
              experience together in one mobile application.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#screens"
                className="group inline-flex h-[48px] items-center justify-center gap-3 rounded-full bg-[#F5F7F1] pl-5 pr-2 !text-[#263F31] transition-colors duration-200 hover:bg-white"
              >
                <span className="text-sm font-semibold !text-[#263F31]">
                  See the app
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#263F31]">
                  <ArrowRight className="h-4 w-4 !text-white transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>

              <Link
                href="/features"
                className="inline-flex h-[48px] items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold !text-white transition-colors duration-200 hover:bg-white/[0.06]"
              >
                Explore features
              </Link>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#B8C9B3]/40" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                Personal · Practical · Connected
              </span>
            </div>
          </div>

          {/* =========================================================
              RIGHT — THREE PHONE COMPOSITION
          ========================================================== */}
          <div
            id="screens"
            className="relative flex min-h-[445px] items-center justify-center lg:min-h-[500px]"
          >
            {/* Soft background glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[310px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4D6A50]/20 blur-[85px]" />

            {/*
              IMPORTANT:
              No negative margins.
              No absolute positioning between phones.
              Small controlled gap only.

              This keeps all 3 phones visually separated.
            */}
            <div className="relative z-10 flex items-end justify-center gap-2 sm:gap-2.5 lg:gap-2.5">
              {/* LEFT PHONE */}
              <div className="w-[126px] shrink-0 sm:w-[145px] lg:w-[158px] xl:w-[170px]">
                <PhoneFrame
                  image={screens[leftIndex]}
                  label={screenLabels[leftIndex]}
                  side
                  priority
                />
              </div>

              {/* MAIN PHONE */}
              <div className="relative z-20 w-[168px] shrink-0 sm:w-[188px] lg:w-[204px] xl:w-[218px]">
                <PhoneFrame
                  image={screens[centerIndex]}
                  label={screenLabels[centerIndex]}
                  priority
                />
              </div>

              {/* RIGHT PHONE */}
              <div className="w-[126px] shrink-0 sm:w-[145px] lg:w-[158px] xl:w-[170px]">
                <PhoneFrame
                  image={screens[rightIndex]}
                  label={screenLabels[rightIndex]}
                  side
                />
              </div>
            </div>

            {/* Rotation indicator */}
            <div className="absolute bottom-1 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
              <span className="h-1.5 w-6 rounded-full bg-[#B8C9B3]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
                {String(startIndex + 1).padStart(2, "0")} / 28
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ================================================================
   PHONE FRAME
================================================================ */

function PhoneFrame({
  image,
  label,
  side = false,
  priority = false,
}: {
  image: StaticImageData;
  label: string;
  side?: boolean;
  priority?: boolean;
}) {
  return (
    <div
      className={[
        "relative w-full rounded-[2.35rem] border-[6px] border-[#17271D] bg-[#17271D] p-1.5",
        "shadow-[0_28px_65px_rgba(0,0,0,0.26)]",
        "transition-opacity duration-500",
        side ? "opacity-[0.84]" : "opacity-100",
      ].join(" ")}
    >
      <div className="overflow-hidden rounded-[1.95rem] bg-[#EEF2E6]">
        <div className="relative aspect-[9/20] w-full">
          <Image
            src={image}
            alt={label}
            fill
            priority={priority}
            sizes="(max-width: 640px) 126px, (max-width: 1024px) 158px, 218px"
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
