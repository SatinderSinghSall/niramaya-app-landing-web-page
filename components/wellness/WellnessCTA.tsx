import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import Container from "@/components/common/Container";

export default function WellnessCTA() {
  return (
    <section className="bg-[#EEF2E6] py-10 sm:py-12 lg:py-14">
      <Container>
        <div className="relative overflow-hidden border border-[#D2DDD0] bg-[#263F31]">
          {/* Subtle background geometry */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-28 h-[300px] w-[300px] rounded-full border border-white/[0.055]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-36 left-[48%] h-[330px] w-[330px] rounded-full border border-white/[0.035]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[18%] top-1/2 h-1.5 w-1.5 rounded-full bg-[#C65D3C]"
          />

          {/* Main content */}
          <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 xl:px-16">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
              {/* Copy */}
              <div className="max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10">
                    <Leaf
                      className="h-3.5 w-3.5 text-[#B8C9B3]"
                      strokeWidth={1.7}
                    />
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8C9B3]">
                    Keep exploring
                  </span>
                </div>

                <h2 className="mt-5 max-w-2xl text-[2.25rem] font-semibold leading-[1.02] tracking-[-0.04em] !text-white sm:text-[2.8rem] lg:text-[3.2rem]">
                  Find a wellness experience that fits your journey.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 !text-white/50 sm:text-[15px]">
                  Explore Niramaya and discover Yoga, Ayurveda and other
                  wellness experiences in one place.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
                <Link
                  href="/app"
                  className="group inline-flex h-[50px] items-center justify-center gap-3 rounded-full bg-[#F5F7F1] pl-6 pr-2 !text-[#263F31] shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]"
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

                <Link
                  href="/how-it-works"
                  className="group inline-flex h-[50px] items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-6 !text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.06]"
                >
                  <span className="whitespace-nowrap text-sm font-semibold !text-white">
                    See how it works
                  </span>

                  <ArrowRight
                    className="h-4 w-4 !text-white/50 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:!text-white"
                    strokeWidth={1.8}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom strip */}
          <div className="relative border-t border-white/10 px-6 py-4 sm:px-10 lg:px-14 xl:px-16">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] !text-white/25">
                Niramaya Wellness
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
