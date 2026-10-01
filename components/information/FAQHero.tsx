import { HelpCircle, Search } from "lucide-react";
import Container from "@/components/common/Container";

export default function FAQHero() {
  return (
    <section className="border-b border-white/10 bg-[#263F31] text-white">
      <Container>
        <div className="relative py-12 sm:py-14 lg:py-16">
          {/* Subtle background detail */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full border border-white/[0.05]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-48 -left-32 h-72 w-72 rounded-full border border-white/[0.04]"
          />

          <div className="relative mx-auto max-w-4xl text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 border border-white/10 bg-white/[0.05] px-3.5 py-2">
              <HelpCircle
                className="h-3.5 w-3.5 text-[#B8C9B3]"
                strokeWidth={1.7}
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                Help Center
              </span>
            </div>

            {/* Heading */}
            <h1 className="mx-auto mt-5 max-w-4xl text-[3rem] font-semibold leading-[0.96] tracking-[-0.055em] text-white sm:text-[4rem] lg:text-[4.5rem]">
              Frequently asked
              <span className="text-[#B8C9B3]"> questions.</span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
              Find clear answers about Niramaya, getting started, goals,
              progress, wellness experiences and other platform features.
            </p>

            {/* Search */}
            <div className="mx-auto mt-7 max-w-2xl">
              <div className="flex h-[54px] items-center border border-white/10 bg-[#F7F8F4] px-4 shadow-[0_12px_35px_rgba(0,0,0,0.12)] transition-colors focus-within:border-[#B8C9B3]/50">
                <Search
                  className="h-[18px] w-[18px] shrink-0 text-[#7D887F]"
                  strokeWidth={1.7}
                />

                <input
                  type="text"
                  placeholder="Search a question"
                  aria-label="Search frequently asked questions"
                  className="ml-3 min-w-0 flex-1 bg-transparent text-sm text-[#263F31] outline-none placeholder:text-[#9AA39B]"
                />

                <span className="hidden border-l border-[#DDE3D9] pl-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#9AA39B] sm:block">
                  FAQ
                </span>
              </div>
            </div>

            {/* Small helper */}
            <p className="mt-4 text-[10px] uppercase tracking-[0.16em] text-white/25">
              Search by topic, feature or question
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
