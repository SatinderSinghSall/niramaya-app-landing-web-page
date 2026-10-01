"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      title="Back to top"
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50
        flex h-12 w-12 items-center justify-center
        cursor-pointer
        rounded-full
        border border-[#B8C9B3]
        bg-[#263F31]
        text-white
        shadow-[0_8px_24px_rgba(38,63,49,0.18)]
        transition-all duration-300

        hover:bg-[#4D6A50]
        hover:shadow-[0_10px_28px_rgba(38,63,49,0.22)]

        focus:outline-none
        focus:ring-2
        focus:ring-[#4D6A50]/20

        sm:bottom-7
        sm:right-7

        ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }
      `}
    >
      <ArrowUp className="h-5 w-5" strokeWidth={2} />
    </button>
  );
}
