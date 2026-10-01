"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative lg:hidden">
      {/* =====================================================
          MENU TOGGLE
      ===================================================== */}

      <button
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="
          group
          flex
          h-[44px]
          w-[44px]
          items-center
          justify-center
          rounded-[10px]
          border
          border-[#DEDAD1]
          bg-[#FCFBF7]
          text-[#214438]
          transition-all
          duration-200
          hover:border-[#214438]
          hover:bg-[#F4F1E9]
          active:scale-[0.97]
        "
      >
        {open ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 5L15 15M15 5L5 15"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 6H16M4 10H16M4 14H16"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      {open && (
        <div
          className="
            fixed
            left-3
            right-3
            top-[82px]
            z-50
            overflow-hidden
            rounded-[18px]
            border
            border-[#E2DED5]
            bg-[#FCFBF7]
            shadow-[0_20px_55px_rgba(31,52,43,0.16)]
          "
        >
          {/* =================================================
              MENU BRAND HEADER
          ================================================= */}

          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-[#E8E4DC]
              px-5
              py-[17px]
            "
          >
            <div className="flex items-center gap-3">
              {/* Brand mark */}

              <span
                className="
                  flex
                  h-[32px]
                  w-[32px]
                  items-center
                  justify-center
                  rounded-[8px]
                  bg-[#214438]
                  text-[#FCFBF7]
                "
              >
                <span className="font-serif text-[17px] leading-none">N</span>
              </span>

              {/* Brand text */}

              <div className="flex flex-col">
                <span
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-[#214438]
                  "
                >
                  Niramaya
                </span>

                <span
                  className="
                    mt-[3px]
                    text-[9px]
                    text-[#918D84]
                  "
                >
                  Everyday wellbeing
                </span>
              </div>
            </div>

            {/* Accent dot */}

            <span className="h-[7px] w-[7px] rounded-full bg-[#B86F52]" />
          </div>

          {/* =================================================
              NAVIGATION ITEMS
          ================================================= */}

          <nav className="px-4 py-2">
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`
                    group
                    flex
                    min-h-[58px]
                    items-center
                    justify-between
                    border-b
                    border-[#ECE8E0]
                    px-3
                    last:border-b-0
                    transition-colors
                    duration-200
                    ${
                      isActive
                        ? "text-[#214438]"
                        : "text-[#59635C] hover:text-[#214438]"
                    }
                  `}
                >
                  {/* Label */}

                  <span
                    className={`
                      text-[16px]
                      tracking-[-0.01em]
                      ${isActive ? "font-semibold" : "font-medium"}
                    `}
                  >
                    {item.label}
                  </span>

                  {/* Arrow */}

                  <span
                    className={`
                      flex
                      h-[30px]
                      w-[30px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      transition-all
                      duration-200
                      ${
                        isActive
                          ? "bg-[#214438] text-white"
                          : "bg-[#F0EEE7] text-[#858A84] group-hover:bg-[#214438] group-hover:text-white"
                      }
                    `}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 7H11.5M7.5 3L11.5 7L7.5 11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* =================================================
              CTA
          ================================================= */}

          <div
            className="
              border-t
              border-[#E8E4DC]
              bg-[#F8F6F0]
              p-4
            "
          >
            <Link
              href="/app"
              onClick={() => setOpen(false)}
              className="
                group
                flex
                h-[52px]
                w-full
                items-center
                justify-between
                rounded-[10px]
                bg-[#214438]
                px-5
                text-white
                shadow-[0_5px_14px_rgba(33,68,56,0.13)]
                transition-all
                duration-300
                hover:bg-[#18362C]
                active:scale-[0.99]
              "
            >
              <span
                className="
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.11em]
                  !text-white
                "
              >
                Explore App
              </span>

              <span
                className="
                  flex
                  h-[29px]
                  w-[29px]
                  items-center
                  justify-center
                  rounded-full
                  bg-white/15
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:bg-white/20
                "
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 7H11.5M7.5 3L11.5 7L7.5 11"
                    stroke="#FFFFFF"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
