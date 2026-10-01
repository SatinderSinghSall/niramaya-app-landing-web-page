import Link from "next/link";
import Container from "@/components/common/Container";

export default function FeatureCTA() {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] border border-[#D1DBCE] bg-[#EEF2E6]">
          {/* ========================================================= */}
          {/* SUBTLE BACKGROUND DETAIL                                  */}
          {/* ========================================================= */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#D2DDD0]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 right-28 h-72 w-72 rounded-full border border-[#D8E1D6]"
          />

          {/* ========================================================= */}
          {/* CONTENT                                                    */}
          {/* ========================================================= */}

          <div className="relative grid items-center gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1fr_auto] lg:px-14 lg:py-14 xl:px-16">
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C65D3C]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4D6A50]">
                  Continue your journey
                </p>
              </div>

              {/* Heading */}
              <h2 className="mt-4 max-w-2xl text-[2rem] font-semibold leading-[1.05] tracking-[-0.035em] text-[#263F31] sm:text-[2.6rem] lg:text-[3rem]">
                Your wellbeing deserves{" "}
                <span className="text-[#4D6A50]">a place of its own.</span>
              </h2>

              {/* Description */}
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#68756B] sm:text-[15px]">
                Bring your profile, goals, progress and everyday wellness
                exploration together with Niramaya.
              </p>

              {/* Buttons */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/app"
                  className="group inline-flex h-[50px] items-center justify-center gap-3 rounded-full bg-[#315440] pl-6 pr-2 text-sm font-semibold !text-white shadow-[0_8px_22px_rgba(49,84,64,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#263F31] hover:shadow-[0_12px_28px_rgba(49,84,64,0.22)]"
                >
                  <span className="!text-white">Explore Niramaya</span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 !text-white transition-transform duration-200 group-hover:translate-x-0.5">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-4 w-4 !text-white"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 10h11M10.5 5.5 15 10l-4.5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>

                <Link
                  href="/how-it-works"
                  className="group inline-flex h-[50px] items-center justify-center gap-2 rounded-full border border-[#C5D2C2] bg-[#F8FAF5] px-6 text-sm font-semibold text-[#263F31] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#315440] hover:bg-white"
                >
                  <span>See how it works</span>

                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 10h11M10.5 5.5 15 10l-4.5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* ========================================================= */}
            {/* RIGHT MINI PRODUCT MOMENT                                 */}
            {/* ========================================================= */}

            <div className="relative hidden lg:block">
              <div className="relative flex h-[190px] w-[220px] items-center justify-center">
                {/* Back card */}
                <div className="absolute right-4 top-5 h-[145px] w-[105px] rotate-[7deg] rounded-[18px] border border-[#D2DDD0] bg-[#F8FAF5] shadow-[0_15px_35px_rgba(38,63,49,0.08)]" />

                {/* Main card */}
                <div className="relative z-10 h-[165px] w-[120px] -rotate-[4deg] rounded-[20px] border-[5px] border-[#263F31] bg-[#263F31] shadow-[0_20px_45px_rgba(38,63,49,0.18)]">
                  <div className="h-full overflow-hidden rounded-[14px] bg-white p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[7px] font-bold uppercase tracking-[0.15em] text-[#4D6A50]">
                        Niramaya
                      </span>

                      <span className="h-1.5 w-1.5 rounded-full bg-[#4D6A50]" />
                    </div>

                    <div className="mt-4 rounded-xl bg-[#EEF2E6] p-3">
                      <p className="text-[7px] text-[#8A948B]">Your journey</p>

                      <p className="mt-1 text-[13px] font-semibold text-[#263F31]">
                        Keep going.
                      </p>

                      <div className="mt-3 h-1 rounded-full bg-[#D5DED2]">
                        <div className="h-full w-[72%] rounded-full bg-[#4D6A50]" />
                      </div>
                    </div>

                    <div className="mt-2 grid grid-cols-2 gap-1.5">
                      <div className="rounded-lg border border-[#E2E7DF] p-2">
                        <div className="h-1 w-7 rounded-full bg-[#D6DFD3]" />
                        <div className="mt-2 h-1.5 w-10 rounded-full bg-[#263F31]" />
                      </div>

                      <div className="rounded-lg border border-[#E2E7DF] p-2">
                        <div className="h-1 w-7 rounded-full bg-[#D6DFD3]" />
                        <div className="mt-2 h-1.5 w-8 rounded-full bg-[#4D6A50]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating label */}
                <div className="absolute bottom-0 left-0 z-20 rounded-full border border-[#D2DDD0] bg-white px-4 py-2 shadow-[0_10px_25px_rgba(38,63,49,0.10)]">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C65D3C]" />

                    <span className="whitespace-nowrap text-[10px] font-semibold text-[#263F31]">
                      Personal. Practical. Connected.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* BOTTOM BRAND LINE                                         */}
          {/* ========================================================= */}

          <div className="relative border-t border-[#D6DED3] px-6 py-4 sm:px-10 lg:px-14 xl:px-16">
            <div className="flex flex-col gap-2 text-[10px] font-medium uppercase tracking-[0.14em] text-[#8A948B] sm:flex-row sm:items-center sm:justify-between">
              <span>Niramaya</span>

              <span className="normal-case tracking-normal">
                Everyday wellbeing, thoughtfully connected.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
