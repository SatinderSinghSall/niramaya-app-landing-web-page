"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#E3E7DF]">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-base font-semibold text-[#263F31] sm:text-lg">
          {question}
        </span>

        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center border border-[#DDE3D9] transition ${
            open ? "bg-[#EEF2E6]" : "bg-white"
          }`}
        >
          <ChevronDown
            className={`h-4 w-4 text-[#4D6A50] transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ${
          open
            ? "grid-rows-[1fr] pb-6 opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-3xl pr-12 text-sm leading-7 text-[#6D796F]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
