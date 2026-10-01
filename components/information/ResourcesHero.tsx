import { ArrowRight, BookOpen, Search, Sparkles } from "lucide-react";
import Container from "@/components/common/Container";

const topics = ["Yoga", "Ayurveda", "Wellness", "Goals", "Progress"];

export default function ResourcesHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#DDE3D9] bg-[#F7F8F4]">
      {/* ============================================================ */}
      {/* SUBTLE BACKGROUND DETAIL                                    */}
      {/* ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -top-48 h-[560px] w-[560px] rounded-full border border-[#4D6A50]/[0.06]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 -left-40 h-[460px] w-[460px] rounded-full border border-[#4D6A50]/[0.05]"
      />

      <Container>
        <div className="relative py-12 sm:py-14 lg:py-16">
          {/* ======================================================== */}
          {/* MAIN HERO                                                 */}
          {/* ======================================================== */}

          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:gap-24">
            {/* ====================================================== */}
            {/* LEFT                                                     */}
            {/* ====================================================== */}

            <div className="relative z-10 max-w-3xl">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 border border-[#D3DED0] bg-white px-3.5 py-2">
                <BookOpen
                  className="h-3.5 w-3.5 text-[#4D6A50]"
                  strokeWidth={1.7}
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4D6A50]">
                  Niramaya Resources
                </span>
              </div>

              {/* Heading */}
              <h1 className="mt-6 max-w-3xl text-[3.2rem] font-semibold leading-[0.96] tracking-[-0.055em] text-[#263F31] sm:text-[4.25rem] lg:text-[4.7rem] xl:text-[5rem]">
                Explore wellness
                <span className="block text-[#4D6A50]">with more clarity.</span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#6D796F] sm:text-base">
                Browse practical resources across Yoga, Ayurveda, wellness
                goals, progress and getting started with Niramaya.
              </p>

              {/* Search */}
              <div className="mt-8 max-w-[620px]">
                <div className="group flex h-[56px] items-center border border-[#CDD8CA] bg-white px-4 shadow-[0_8px_30px_rgba(38,63,49,0.04)] transition-colors duration-200 focus-within:border-[#4D6A50]/40">
                  <Search
                    className="h-[19px] w-[19px] shrink-0 text-[#7D887F]"
                    strokeWidth={1.7}
                  />

                  <input
                    type="text"
                    placeholder="Search wellness resources"
                    aria-label="Search wellness resources"
                    className="ml-3 min-w-0 flex-1 bg-transparent text-sm text-[#263F31] outline-none placeholder:text-[#9AA39B]"
                  />

                  <button
                    type="button"
                    className="hidden h-9 items-center gap-2 rounded-full bg-[#263F31] px-4 text-xs font-semibold !text-white transition-colors hover:bg-[#4D6A50] sm:inline-flex"
                  >
                    <span className="!text-white">Search</span>
                    <ArrowRight className="h-3.5 w-3.5 !text-white" />
                  </button>
                </div>
              </div>

              {/* Popular topics */}
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="mr-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#929B92]">
                  Browse
                </span>

                {topics.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    className="rounded-full border border-[#D9E1D6] bg-white px-3.5 py-1.5 text-[11px] font-medium !text-[#59665D] transition-colors hover:border-[#B8C9B3] hover:bg-[#EEF2E6] hover:!text-[#263F31]"
                  >
                    <span className="!text-inherit">{topic}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* ====================================================== */}
            {/* RIGHT — RESOURCE PREVIEW                                */}
            {/* ====================================================== */}

            <div className="relative mx-auto w-full max-w-[400px] lg:justify-self-end">
              {/* Background ring */}
              <div
                aria-hidden="true"
                className="absolute -right-8 -top-8 h-36 w-36 rounded-full border border-[#4D6A50]/10"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full border border-[#4D6A50]/10"
              />

              {/* Main editorial panel */}
              <div className="relative border border-[#D5DED2] bg-white p-3 shadow-[0_20px_50px_rgba(38,63,49,0.07)]">
                <div className="relative flex min-h-[330px] flex-col justify-between overflow-hidden bg-[#263F31] p-7 sm:p-8">
                  {/* Decorative circle */}
                  <div
                    aria-hidden="true"
                    className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/[0.08]"
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8C9B3]">
                        Resource library
                      </span>

                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
                        <Sparkles
                          className="h-3.5 w-3.5 text-[#B8C9B3]"
                          strokeWidth={1.7}
                        />
                      </div>
                    </div>

                    <h2 className="mt-12 max-w-[280px] text-[2.4rem] font-semibold leading-[0.98] tracking-[-0.045em] text-white">
                      Learn.
                      <br />
                      Explore.
                      <br />
                      Understand.
                    </h2>
                  </div>

                  <div className="relative">
                    <div className="mb-5 h-px w-full bg-white/10" />

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/30">
                          Explore by topic
                        </p>

                        <p className="mt-1 text-sm font-medium text-white/65">
                          Wellness, Yoga & Ayurveda
                        </p>
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B8C9B3]">
                        <ArrowRight
                          className="h-4 w-4 text-[#263F31]"
                          strokeWidth={1.8}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating label */}
              <div className="absolute -bottom-5 -left-5 border border-[#D5DED2] bg-white px-4 py-3 shadow-[0_12px_30px_rgba(38,63,49,0.08)]">
                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C65D3C]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#68746B]">
                    Practical wellness knowledge
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* TOPIC STRIP                                              */}
          {/* ======================================================== */}

          <div className="relative mt-14 border-t border-[#DDE3D9] pt-6 lg:mt-16">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold tracking-[0.16em] text-[#A0AAA1]">
                  01
                </span>

                <span className="h-px w-6 bg-[#C9D4C6]" />

                <span className="text-xs font-medium text-[#657168]">
                  Learn something useful
                </span>
              </div>

              <div className="flex items-center gap-3 sm:justify-center">
                <span className="text-[10px] font-bold tracking-[0.16em] text-[#A0AAA1]">
                  02
                </span>

                <span className="h-px w-6 bg-[#C9D4C6]" />

                <span className="text-xs font-medium text-[#657168]">
                  Explore wellness topics
                </span>
              </div>

              <div className="flex items-center gap-3 sm:justify-end">
                <span className="text-[10px] font-bold tracking-[0.16em] text-[#A0AAA1]">
                  03
                </span>

                <span className="h-px w-6 bg-[#C9D4C6]" />

                <span className="text-xs font-medium text-[#657168]">
                  Build your understanding
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
