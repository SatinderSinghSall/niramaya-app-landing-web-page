import Link from "next/link";
import Container from "@/components/common/Container";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="border-t border-[#E3E7DF] bg-[#F7F8F2]">
      <Container>
        <div className="py-12 sm:py-14 lg:py-16">
          <div className="overflow-hidden rounded-[24px] bg-[#203D30]">
            <div className="grid items-center gap-10 px-7 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1fr_auto] lg:gap-16 lg:px-16 lg:py-16">
              {/* LEFT */}
              <div className="max-w-2xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#AFC1B3] sm:text-[11px]">
                  Start your journey
                </p>

                <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-[3.25rem]">
                  Better wellness starts with understanding yourself.
                </h2>

                <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#B8C8BC]">
                  Discover Niramaya and take a more intentional approach to your
                  everyday wellbeing.
                </p>
              </div>

              {/* RIGHT CTA */}
              <div className="lg:pr-2">
                <Link
                  href="/app"
                  className="group inline-flex w-full items-center justify-between gap-8 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-semibold text-[#203D30] shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F4F6F1] hover:shadow-[0_12px_30px_rgba(0,0,0,0.16)] sm:w-auto"
                >
                  <span className="whitespace-nowrap">Explore Niramaya</span>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#203D30] text-white transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight
                      size={16}
                      strokeWidth={1.9}
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </div>
            </div>

            {/* BOTTOM BRAND LINE */}
            <div className="mx-7 border-t border-white/10 sm:mx-10 lg:mx-16">
              <div className="flex items-center justify-between py-4">
                <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#718A7B]">
                  Niramaya
                </span>

                <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#718A7B]">
                  Everyday wellbeing
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
