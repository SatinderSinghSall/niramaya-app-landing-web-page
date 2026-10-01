import Link from "next/link";
import { ArrowRight, Download, Leaf } from "lucide-react";
import Container from "@/components/common/Container";

export default function AppDownloadCTA() {
  return (
    <section className="relative overflow-hidden border-t border-[#DCE4D8] bg-[#EEF2E6]">
      {/* Subtle editorial background detail */}
      <div className="pointer-events-none absolute -right-48 -top-48 h-[520px] w-[520px] rounded-full border border-[#D8E2D4]" />
      <div className="pointer-events-none absolute -left-32 -bottom-48 h-[420px] w-[420px] rounded-full border border-[#D8E2D4]" />

      <Container>
        <div className="relative py-14 sm:py-16 lg:py-20">
          <div className="relative overflow-hidden border border-[#CBD8C8] bg-[#263F31]">
            {/* Inner decorative circle */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/[0.08]" />

            <div className="relative grid gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16 lg:px-14 lg:py-14">
              {/* =====================================================
                  COPY
              ====================================================== */}
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
                    <Leaf className="h-4 w-4 text-[#B8C9B3]" />
                  </span>

                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B8C9B3]">
                    Take Niramaya with you
                  </span>
                </div>

                <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-4xl lg:text-[3.15rem]">
                  Your wellness journey,
                  <span className="block text-[#B8C9B3]">
                    wherever you are.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                  Keep your profile, goals, progress, wellness discovery, Yoga,
                  Ayurveda and consultation experience connected in one place.
                </p>
              </div>

              {/* =====================================================
                  ACTIONS
              ====================================================== */}
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
                <Link
                  href="/contact"
                  className="group inline-flex h-[50px] items-center justify-center gap-3 rounded-full bg-[#F5F7F1] pl-6 pr-2 !text-[#263F31] transition-all duration-300 hover:bg-white"
                >
                  <span className="whitespace-nowrap text-sm font-semibold !text-[#263F31]">
                    Get Niramaya
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#263F31] transition-transform duration-300 group-hover:translate-x-0.5">
                    <Download className="h-4 w-4 !text-white" />
                  </span>
                </Link>

                <Link
                  href="/how-it-works"
                  className="group inline-flex h-[50px] items-center justify-center gap-3 rounded-full border border-white/15 px-6 !text-white transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]"
                >
                  <span className="whitespace-nowrap text-sm font-semibold !text-white">
                    See how it works
                  </span>

                  <ArrowRight className="h-4 w-4 !text-white/60 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* =====================================================
                BOTTOM BRAND STRIP
            ====================================================== */}
            <div className="relative flex flex-col gap-2 border-t border-white/10 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                Niramaya mobile experience
              </p>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C65D3C]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                  Personal · Practical · Connected
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
