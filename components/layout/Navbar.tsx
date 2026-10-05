"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E7E3DA] bg-[#FCFBF7]">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-10 xl:px-12">
        <div className="flex h-[84px] items-center">
          {/* =====================================================
              BRAND
          ===================================================== */}

          <Link
            href="/"
            aria-label="Niramaya home"
            className="group flex shrink-0 items-center gap-3.5"
          >
            <span
              className="
                flex h-[44px] w-[44px]
                items-center justify-center
                rounded-[10px]
                bg-[#214438]
                text-[#FCFBF7]
                transition-all duration-300
                group-hover:bg-[#B86F52]
              "
            >
              <span className="font-serif text-[22px] leading-none">N</span>
            </span>

            <span className="flex flex-col">
              <span
                className="
                  text-[19px]
                  font-semibold
                  leading-[1]
                  tracking-[0.17em]
                  text-[#243A30]
                "
              >
                NIRAMAYA
              </span>

              <span
                className="
                  mt-[6px]
                  text-[8px]
                  font-medium
                  uppercase
                  leading-none
                  tracking-[0.28em]
                  text-[#8A877F]
                "
              >
                Everyday Wellbeing
              </span>
            </span>
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}

          <nav className="ml-auto hidden items-center lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    group relative
                    mx-[2px]
                    px-[18px]
                    py-[31px]
                    text-[17px]
                    font-medium
                    tracking-[-0.01em]
                    transition-colors
                    duration-200

                    ${
                      isActive
                        ? "text-[#214438]"
                        : "text-[#5F6962] hover:text-[#214438]"
                    }
                  `}
                >
                  {item.label}

                  {/* Active / hover indicator */}
                  <span
                    className={`
                      absolute
                      bottom-[19px]
                      left-[18px]
                      right-[18px]
                      h-[2px]
                      rounded-full
                      bg-[#B86F52]
                      origin-center
                      transition-transform
                      duration-300

                      ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }
                    `}
                  />
                </Link>
              );
            })}

            {/* =================================================
                DIVIDER
            ================================================= */}

            <span className="mx-5 h-8 w-px bg-[#DDD9D0]" />

            {/* =================================================
                EXPLORE APP
            ================================================= */}

            <Link
              href="/app"
              className="
                group
                inline-flex
                h-[47px]
                items-center
                gap-3
                rounded-[10px]
                bg-[#214438]
                px-5
                shadow-[0_4px_12px_rgba(33,68,56,0.12)]
                transition-all
                duration-300
                hover:-translate-y-[1px]
                hover:bg-[#18362C]
                hover:shadow-[0_7px_18px_rgba(33,68,56,0.18)]
              "
            >
              <span
                className="
                  whitespace-nowrap
                  text-[13px]
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                  !text-white
                "
              >
                Explore App
              </span>

              <span
                className="
                  flex h-[27px] w-[27px]
                  shrink-0
                  items-center justify-center
                  rounded-full
                  bg-white/15
                  transition-all
                  duration-300
                  group-hover:translate-x-[2px]
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

            {/* =================================================
                ADMIN PANEL
            ================================================= */}

            <a
              href="https://niramaya-admin-panel.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                ml-3
                inline-flex
                h-[47px]
                items-center
                gap-2.5
                rounded-[10px]
                border
                border-[#C9D4CE]
                bg-[#FCFBF7]
                px-5
                shadow-[0_3px_10px_rgba(33,68,56,0.06)]
                transition-all
                duration-300
                hover:-translate-y-[1px]
                hover:border-[#214438]
                hover:bg-[#F3F6F1]
                hover:shadow-[0_6px_16px_rgba(33,68,56,0.10)]
              "
            >
              <span
                className="
                  whitespace-nowrap
                  text-[13px]
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                  text-[#214438]
                "
              >
                Admin Panel
              </span>

              <span
                className="
                  flex
                  h-[25px]
                  w-[25px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#214438]/8
                  transition-all
                  duration-300
                  group-hover:translate-x-[2px]
                  group-hover:bg-[#214438]/12
                "
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10L10 4M5 4H10V9"
                    stroke="#214438"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </nav>

          {/* =====================================================
              MOBILE
          ===================================================== */}

          <div className="ml-auto lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
