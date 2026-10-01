"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X, Smartphone } from "lucide-react";

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

const appScreens = [
  Screen1,
  Screen2,
  Screen3,
  Screen4,
  Screen5,
  Screen6,
  Screen7,
  Screen8,
  Screen9,
  Screen10,
  Screen11,
  Screen12,
  Screen13,
  Screen14,
  Screen15,
  Screen16,
  Screen17,
  Screen18,
  Screen19,
  Screen20,
  Screen21,
  Screen22,
  Screen23,
  Screen24,
  Screen25,
  Screen26,
  Screen27,
  Screen28,
];

export default function LandingAppNotice() {
  const [open, setOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(0);

  /*
   * Open modal after 5 seconds
   */
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 5000);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  /*
   * Lock page scrolling while modal is open
   */
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  /*
   * Change app screenshot every 2 seconds
   */
  useEffect(() => {
    if (!open) return;

    const interval = window.setInterval(() => {
      setCurrentScreen((previous) => {
        return (previous + 1) % appScreens.length;
      });
    }, 2000);

    return () => {
      window.clearInterval(interval);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 z-[100]
        flex items-center justify-center
        bg-[#263F31]/60
        px-3 py-4
        sm:px-5 sm:py-6
        backdrop-blur-[3px]
      "
      role="dialog"
      aria-modal="true"
      aria-labelledby="app-notice-title"
    >
      {/* 
        IMPORTANT:
        No onClick on the backdrop.
        Clicking outside the modal therefore does NOTHING.
      */}

      <div
        className="
          relative
          flex w-full
          max-w-3xl
          overflow-hidden
          border border-[#D3DED0]
          bg-[#F7F8F4]
          shadow-[0_24px_80px_rgba(38,63,49,0.28)]

          max-h-[calc(100svh-2rem)]
          sm:max-h-[calc(100svh-3rem)]
        "
      >
        {/* CLOSE BUTTON */}

        <button
          type="button"
          aria-label="Close"
          title="Close"
          onClick={() => setOpen(false)}
          className="
            absolute right-3 top-3 z-30
            flex h-9 w-9
            cursor-pointer
            items-center justify-center
            rounded-full
            border border-[#D3DED0]
            bg-white
            text-[#263F31]
            transition-colors duration-200
            hover:bg-[#EEF2E6]
            focus:outline-none
            focus:ring-2
            focus:ring-[#4D6A50]/20

            sm:right-4 sm:top-4
            sm:h-10 sm:w-10
          "
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.8} />
        </button>

        <div
          className="
            grid w-full
            md:grid-cols-[0.82fr_1.18fr]
          "
        >
          {/* =====================================================
              APP SCREENSHOT
          ====================================================== */}

          <div
            className="
              relative
              flex
              min-h-[255px]
              items-center
              justify-center
              overflow-hidden
              bg-[#E7EEE2]
              px-6
              pt-8
              pb-6

              sm:min-h-[310px]
              sm:px-8

              md:min-h-[460px]
              md:px-8
              md:py-10
            "
          >
            {/* Decorative circle */}

            <div
              className="
                absolute
                -left-16
                -top-16
                h-36
                w-36
                rounded-full
                border
                border-[#B8C9B3]
                sm:h-44
                sm:w-44
              "
            />

            <div
              className="
                absolute
                -bottom-20
                -right-20
                h-48
                w-48
                rounded-full
                border
                border-[#B8C9B3]
              "
            />

            {/* Phone */}

            <div
              className="
                relative
                z-10
                w-[125px]
                overflow-hidden
                rounded-[22px]
                border-[4px]
                border-[#263F31]
                bg-[#263F31]
                shadow-[0_16px_35px_rgba(38,63,49,0.22)]

                sm:w-[150px]
                sm:rounded-[25px]

                md:w-[185px]
                md:rounded-[28px]
                md:border-[5px]
              "
            >
              <Image
                src={appScreens[currentScreen]}
                alt={`Niramaya mobile app screen ${currentScreen + 1}`}
                width={390}
                height={844}
                priority={currentScreen === 0}
                className="
                  block
                  h-auto
                  w-full
                  object-cover
                "
              />
            </div>

            {/* Screen counter */}

            <div
              className="
                absolute
                bottom-4
                left-1/2
                z-20
                -translate-x-1/2
                rounded-full
                border border-[#D3DED0]
                bg-white/90
                px-3
                py-1
                text-[9px]
                font-semibold
                tracking-[0.14em]
                text-[#4D6A50]
                backdrop-blur-sm
              "
            >
              {String(currentScreen + 1).padStart(2, "0")} / 28
            </div>
          </div>

          {/* =====================================================
              CONTENT
          ====================================================== */}

          <div
            className="
              overflow-y-auto
              px-6
              py-7

              sm:px-9
              sm:py-9

              md:flex
              md:flex-col
              md:justify-center
              md:overflow-visible
              md:px-10
              md:py-10
            "
          >
            {/* Eyebrow */}

            <div className="mb-5 flex items-center gap-2 sm:mb-6">
              <span
                className="
                  flex h-8 w-8
                  shrink-0
                  items-center justify-center
                  rounded-full
                  bg-[#263F31]
                  text-white
                "
              >
                <Smartphone className="h-4 w-4" />
              </span>

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#4D6A50]
                "
              >
                Niramaya Mobile App
              </span>
            </div>

            {/* Heading */}

            <h2
              id="app-notice-title"
              className="
                max-w-md
                text-[28px]
                font-semibold
                leading-[1.08]
                tracking-[-0.04em]
                text-[#263F31]

                sm:text-3xl

                md:text-4xl
              "
            >
              Something meaningful is still being built.
            </h2>

            {/* Description */}

            <p
              className="
                mt-4
                max-w-lg
                text-[14px]
                leading-6
                text-[#68766B]

                sm:mt-5
                sm:text-[15px]
                sm:leading-7
              "
            >
              The Niramaya mobile application is currently in the development
              phase. We are working on bringing the complete wellness experience
              together in one thoughtful app.
            </p>

            {/* Status */}

            <div
              className="
                mt-5
                border-y
                border-[#D3DED0]
                py-4

                sm:mt-6
                sm:py-5
              "
            >
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#C65D3C]" />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#4D6A50]
                  "
                >
                  Currently in development
                </span>
              </div>
            </div>

            {/* Developers */}

            <div className="mt-5 sm:mt-6">
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#929B92]
                "
              >
                Developed by
              </p>

              <div
                className="
                  mt-3
                  grid
                  gap-2
                  sm:grid-cols-2
                  sm:gap-4
                "
              >
                <div className="border-l-2 border-[#B8C9B3] pl-3">
                  <p className="text-[13px] font-semibold text-[#263F31]">
                    Satinder Singh Sall
                  </p>
                </div>

                <div className="border-l-2 border-[#B8C9B3] pl-3">
                  <p className="text-[13px] font-semibold text-[#263F31]">
                    Soni Vaubhav Kumar
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom note */}

            <p
              className="
                mt-5
                max-w-lg
                text-[11px]
                leading-5
                text-[#929B92]

                sm:mt-6
                sm:text-xs
              "
            >
              Thank you for exploring Niramaya while we continue building the
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
