import Link from "next/link";
import { ArrowRight, Compass, Leaf, Sparkles, SunMedium } from "lucide-react";
import Container from "@/components/common/Container";

export default function WellnessHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#DCE3D9] bg-[#EEF2E6]">
      {/* ============================================================ */}
      {/* SUBTLE BACKGROUND DETAIL                                    */}
      {/* ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-24 h-80 w-80 rounded-full border border-[#4D6A50]/[0.08]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-[-180px] h-[500px] w-[500px] rounded-full border border-[#4D6A50]/[0.06]"
      />

      <Container>
        <div className="relative grid items-center gap-10 py-10 sm:gap-12 sm:py-12 lg:min-h-[560px] lg:grid-cols-[1.02fr_0.78fr] lg:gap-16 lg:py-14 xl:min-h-[590px]">
          {/* ======================================================== */}
          {/* LEFT — HERO COPY                                         */}
          {/* ======================================================== */}

          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 border border-[#C8D5C5] bg-white/70 px-3.5 py-2">
              <Sparkles
                className="h-3.5 w-3.5 text-[#4D6A50]"
                strokeWidth={1.8}
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4D6A50]">
                Niramaya Wellness
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 max-w-3xl text-[3.2rem] font-semibold leading-[0.96] tracking-[-0.05em] text-[#263F31] sm:text-[4.2rem] lg:text-[4.65rem] xl:text-[5rem]">
              Explore wellness
              <span className="block text-[#4D6A50]">in your own way.</span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#6D796F] sm:text-base">
              Discover wellness content, recommendations, Yoga and Ayurveda
              through experiences designed to fit naturally into your everyday
              wellbeing.
            </p>

            {/* Actions */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/yoga"
                className="group inline-flex h-[48px] items-center justify-center gap-3 rounded-full bg-[#263F31] pl-6 pr-2 text-sm font-semibold !text-white shadow-[0_8px_24px_rgba(38,63,49,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3F5942] hover:shadow-[0_12px_28px_rgba(38,63,49,0.16)]"
              >
                <span className="!text-white">Explore Yoga</span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4 !text-white" />
                </span>
              </Link>

              <Link
                href="/ayurveda"
                className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full border border-[#263F31]/15 bg-white/65 px-6 text-sm font-semibold !text-[#263F31] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#4D6A50]/30 hover:bg-white"
              >
                <span className="!text-[#263F31]">Explore Ayurveda</span>

                <ArrowRight className="h-4 w-4 !text-[#4D6A50]" />
              </Link>
            </div>

            {/* Small supporting line */}
            <div className="mt-7 flex items-center gap-3">
              <div className="flex -space-x-1.5">
                <span className="h-5 w-5 rounded-full border-2 border-[#EEF2E6] bg-[#BFD0BA]" />
                <span className="h-5 w-5 rounded-full border-2 border-[#EEF2E6] bg-[#D9C8B4]" />
                <span className="h-5 w-5 rounded-full border-2 border-[#EEF2E6] bg-[#AFC2AA]" />
              </div>

              <span className="text-xs text-[#7A857B]">
                Explore practices that fit your journey.
              </span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT — WELLNESS PREVIEW                                 */}
          {/* ======================================================== */}

          <div className="relative mx-auto w-full max-w-[470px] lg:justify-self-end">
            {/* Offset brand layer */}
            <div className="absolute inset-4 rounded-[2rem] bg-[#263F31]/[0.08]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-4 shadow-[0_24px_70px_rgba(38,63,49,0.13)] sm:p-5">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#E5EAE2] px-1 pb-4">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#929B92]">
                    Discover
                  </p>

                  <h2 className="mt-1 text-xl font-semibold tracking-[-0.02em] text-[#263F31] sm:text-[1.35rem]">
                    Your wellness space
                  </h2>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF2E6]">
                  <Compass
                    className="h-[18px] w-[18px] text-[#4D6A50]"
                    strokeWidth={1.7}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="mt-4 space-y-3">
                {/* Yoga */}
                <div className="group relative overflow-hidden rounded-[1.4rem] bg-[#263F31] p-5 text-white sm:p-6">
                  <div
                    aria-hidden="true"
                    className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-white/[0.08]"
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                        <SunMedium
                          className="h-4 w-4 text-[#B8C9B3]"
                          strokeWidth={1.7}
                        />
                      </div>

                      <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/30">
                        01
                      </span>
                    </div>

                    <p className="mt-7 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#B8C9B3]/70">
                      Practice
                    </p>

                    <div className="mt-1 flex items-end justify-between gap-3">
                      <h3 className="text-xl font-semibold tracking-[-0.02em]">
                        Yoga
                      </h3>

                      <ArrowRight className="h-4 w-4 text-white/35 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white/70" />
                    </div>

                    <p className="mt-2 max-w-xs text-xs leading-5 text-white/45">
                      Explore practices, categories and yoga content.
                    </p>
                  </div>
                </div>

                {/* Ayurveda */}
                <div className="group relative overflow-hidden rounded-[1.4rem] border border-[#E2E7DF] bg-[#FAFBF8] p-5 sm:p-6">
                  <div
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#EEF2E6]"
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF2E6]">
                        <Leaf
                          className="h-4 w-4 text-[#4D6A50]"
                          strokeWidth={1.7}
                        />
                      </div>

                      <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#A0AAA1]">
                        02
                      </span>
                    </div>

                    <p className="mt-7 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#929B92]">
                      Tradition
                    </p>

                    <div className="mt-1 flex items-end justify-between gap-3">
                      <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#263F31]">
                        Ayurveda
                      </h3>

                      <ArrowRight className="h-4 w-4 text-[#4D6A50]/40 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#4D6A50]" />
                    </div>

                    <p className="mt-2 max-w-xs text-xs leading-5 text-[#929B92]">
                      Discover Ayurvedic wellness content and recommendations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom meta */}
              <div className="mt-4 flex items-center justify-between border-t border-[#E5EAE2] pt-4">
                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#A0AAA1]">
                  Wellness discovery
                </span>

                <span className="flex items-center gap-1.5 text-[10px] font-medium text-[#4D6A50]">
                  Personalised
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C65D3C]" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
