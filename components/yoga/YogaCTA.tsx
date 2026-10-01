import Link from "next/link";
import { ArrowRight, SunMedium } from "lucide-react";
import Container from "@/components/common/Container";

export default function YogaCTA() {
  return (
    <section className="bg-[#EEF2E6] py-10 sm:py-12 lg:py-14">
      <Container>
        <div className="relative overflow-hidden border border-[#D3DED0] bg-[#263F31]">
          {/* Subtle background detail */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full border border-white/[0.06]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 left-1/3 h-72 w-72 rounded-full border border-white/[0.04]"
          />

          <div className="relative px-6 py-9 sm:px-10 sm:py-11 lg:px-14 lg:py-12 xl:px-16">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              {/* Copy */}
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
                    <SunMedium
                      className="h-4 w-4 text-[#B8C9B3]"
                      strokeWidth={1.7}
                    />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8C9B3]">
                    Continue your journey
                  </span>
                </div>

                <h2 className="mt-5 max-w-xl text-[2rem] font-semibold leading-[1] tracking-[-0.045em] text-white sm:text-[2.6rem]">
                  Ready to make space for
                  <span className="text-[#B8C9B3]"> Yoga?</span>
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-6 text-white/45 sm:text-[15px]">
                  Discover Yoga practices and wellness content inside the
                  Niramaya app.
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/app"
                className="group inline-flex h-[50px] shrink-0 items-center justify-center gap-3 rounded-full bg-[#F5F7F1] pl-6 pr-2 text-sm font-semibold !text-[#263F31] shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
              >
                <span className="whitespace-nowrap !text-[#263F31]">
                  Explore Yoga in the app
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#263F31]">
                  <ArrowRight className="h-4 w-4 !text-white transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </div>
          </div>

          {/* Bottom identity strip */}
          <div className="relative border-t border-white/[0.08] px-6 py-3.5 sm:px-10 lg:px-14 xl:px-16">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
                Niramaya Yoga
              </span>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C65D3C]" />

                <span className="text-[9px] font-medium uppercase tracking-[0.17em] text-white/25">
                  Explore · Practice · Discover
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
