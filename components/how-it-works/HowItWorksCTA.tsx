import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import Container from "@/components/common/Container";

export default function HowItWorksCTA() {
  return (
    <section className="bg-[#EEF2E6] py-10 sm:py-12 lg:py-14">
      <Container>
        <div className="relative overflow-hidden border border-[#D3DED0] bg-[#263F31]">
          {/* ======================================================== */}
          {/* BACKGROUND DETAIL                                        */}
          {/* ======================================================== */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-32 h-[330px] w-[330px] rounded-full border border-white/[0.055]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 left-[42%] h-[360px] w-[360px] rounded-full border border-white/[0.035]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[15%] top-1/2 h-1 w-1 rounded-full bg-[#C65D3C]"
          />

          {/* ======================================================== */}
          {/* MAIN CONTENT                                              */}
          {/* ======================================================== */}

          <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 xl:px-16">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
              {/* ==================================================== */}
              {/* COPY                                                   */}
              {/* ==================================================== */}

              <div className="max-w-3xl">
                {/* Eyebrow */}
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10">
                    <Leaf
                      className="h-3.5 w-3.5 text-[#B8C9B3]"
                      strokeWidth={1.7}
                    />
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8C9B3]">
                    Your journey starts here
                  </span>
                </div>

                {/* Heading */}
                <h2 className="mt-5 max-w-2xl text-[2.2rem] font-semibold leading-[1.02] tracking-[-0.04em] !text-white sm:text-[2.8rem] lg:text-[3.15rem]">
                  Make wellbeing part of your everyday.
                </h2>

                {/* Description */}
                <p className="mt-4 max-w-xl text-sm leading-7 !text-white/50 sm:text-[15px]">
                  Explore Niramaya and bring your profile, goals, wellness
                  discovery and progress together in one place.
                </p>
              </div>

              {/* ==================================================== */}
              {/* ACTIONS                                                */}
              {/* ==================================================== */}

              <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
                {/* Primary */}
                <Link
                  href="/app"
                  className="group inline-flex h-[50px] items-center justify-center gap-3 rounded-full bg-[#F5F7F1] pl-6 pr-2 !text-[#263F31] shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.13)]"
                >
                  <span className="whitespace-nowrap text-sm font-semibold !text-[#263F31]">
                    Explore Niramaya
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#263F31] transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight
                      className="h-4 w-4 !text-white"
                      strokeWidth={1.8}
                    />
                  </span>
                </Link>

                {/* Secondary */}
                <Link
                  href="/features"
                  className="group inline-flex h-[50px] items-center justify-center gap-3 rounded-full border border-white/20 bg-transparent px-6 !text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.07]"
                >
                  <span className="whitespace-nowrap text-sm font-semibold !text-white">
                    Explore features
                  </span>

                  <ArrowRight
                    className="h-4 w-4 !text-white/60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:!text-white"
                    strokeWidth={1.8}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* FOOTER STRIP                                             */}
          {/* ======================================================== */}

          <div className="relative border-t border-white/10 px-6 py-4 sm:px-10 lg:px-14 xl:px-16">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] !text-white/25">
                Niramaya
              </span>

              <div className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[#C65D3C]" />

                <span className="text-xs !text-white/30">
                  Personal · Practical · Connected
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
