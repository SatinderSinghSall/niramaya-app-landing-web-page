"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E3E7DF] bg-white text-[#263F31]"
      >
        <span className="text-xl leading-none">{open ? "×" : "☰"}</span>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full border-t border-[#E3E7DF] bg-white shadow-sm">
          <nav className="mx-auto max-w-7xl px-5 py-5 sm:px-6">
            <div className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-[#EEF1EB] py-4 text-sm font-medium text-[#263F31] transition-colors hover:text-[#4D6A50]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/app"
                onClick={() => setOpen(false)}
                className="mt-5 inline-flex items-center justify-center rounded-lg bg-[#4D6A50] px-5 py-3 text-sm font-medium text-white"
              >
                Explore App
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
