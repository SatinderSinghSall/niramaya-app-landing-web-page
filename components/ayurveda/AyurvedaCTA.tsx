import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import Container from "@/components/common/Container";

export default function AyurvedaCTA() {
  return (
    <section className="bg-[#F4F1E8]">
      <Container>
        <div className="py-10 sm:py-12 lg:py-14">
          <div className="relative overflow-hidden border border-[#D8D1BF] bg-[#30372D]">
            {/* Subtle background detail */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/[0.06]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/[0.025]"
            />

            <div className="relative flex flex-col gap-8 px-6 py-9 sm:px-9 sm:py-10 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-11">
              {/* Copy */}
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center border border-white/10 bg-white/[0.06]">
                    <Leaf
                      className="h-4 w-4 text-[#DAD5C2]"
                      strokeWidth={1.7}
                    />
                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#DAD5C2]">
                    Continue exploring
                  </span>
                </div>

                <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-[2.6rem]">
                  Explore Ayurveda
                  <span className="text-[#DAD5C2]"> with Niramaya.</span>
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-6 text-white/55">
                  Discover content, recommendations and consultation workflows
                  within the Niramaya experience.
                </p>
              </div>

              {/* Action */}
              <Link
                href="/app"
                className="group inline-flex h-[50px] shrink-0 items-center justify-center gap-3 rounded-full bg-[#F7F6F0] pl-6 pr-2 text-sm font-semibold !text-[#30372D] transition-colors duration-200 hover:bg-white"
              >
                <span className="!text-[#30372D]">Explore the app</span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#30372D]">
                  <ArrowRight
                    className="h-4 w-4 !text-white transition-transform duration-200 group-hover:translate-x-0.5"
                    strokeWidth={1.8}
                  />
                </span>
              </Link>
            </div>

            {/* Bottom metadata */}
            <div className="relative flex items-center justify-between border-t border-white/[0.08] px-6 py-3.5 sm:px-9 lg:px-12">
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
                Niramaya Ayurveda
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/25">
                Explore · Learn · Connect
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
