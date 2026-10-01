import Container from "@/components/common/Container";

const points = [
  {
    number: "01",
    title: "Start with yourself",
    text: "Understand your routines, preferences and everyday needs before deciding what should change.",
  },
  {
    number: "02",
    title: "Make wellness practical",
    text: "Turn good intentions into simple actions that can naturally fit into your everyday life.",
  },
  {
    number: "03",
    title: "Notice your progress",
    text: "Set meaningful goals and see how small, consistent choices add up over time.",
  },
  {
    number: "04",
    title: "Look at the whole picture",
    text: "Bring movement, lifestyle, Yoga, Ayurveda and everyday wellbeing into one broader view.",
  },
];

export default function WhyNiramaya() {
  return (
    <section className="relative overflow-hidden border-b border-[#E3E7DF] bg-[#F8F8F3]">
      <Container>
        <div className="pb-24 pt-12 sm:pb-28 sm:pt-14 lg:pb-32 lg:pt-16">
          {/* BIG SECTION TITLE */}

          <div className="mb-14 text-center sm:mb-16">
            <h2
              className="
            text-5xl
            font-semibold
            leading-[0.95]
            tracking-[-0.045em]
            text-[#203D30]
            sm:text-6xl
            lg:text-[5.5rem]
          "
            >
              Why Niramaya?
            </h2>
          </div>

          {/* MAIN CONTENT */}

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            {/* LEFT SIDE */}

            <div className="lg:sticky lg:top-32 lg:self-start">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#B86F52]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#456354]">
                  Why Niramaya
                </span>
              </div>

              <h2
                className="
                  mt-7
                  max-w-[480px]
                  text-4xl
                  font-semibold
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-[#203D30]
                  sm:text-5xl
                  lg:text-[4rem]
                "
              >
                Wellness should
                <br />
                feel more
                <br />
                <span className="text-[#B86F52]">personal.</span>
              </h2>

              <p
                className="
                  mt-7
                  max-w-[390px]
                  text-[15px]
                  leading-7
                  text-[#6D796F]
                  sm:text-base
                "
              >
                Niramaya brings the different parts of everyday wellbeing
                together — without making the journey feel complicated.
              </p>

              {/* Small brand detail */}

              <div className="mt-12 hidden lg:block">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D8DED6] bg-white text-[#456354]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M8 13.5C11.04 11.95 12.8 9.7 12.8 6.8C12.8 4.75 11.05 3 8 2.5C4.95 3 3.2 4.75 3.2 6.8C3.2 9.7 4.96 11.95 8 13.5Z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M8 3V11"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#456354]">
                      The Niramaya approach
                    </p>

                    <p className="mt-1 text-xs text-[#929B92]">
                      Understand · Practice · Progress
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}

            <div>
              <div className="mb-8 max-w-[650px]">
                <p className="text-sm leading-7 text-[#6D796F] sm:text-[16px]">
                  Instead of treating wellbeing as one score or one habit,
                  Niramaya gives you a clearer way to understand the small
                  things that shape how you feel every day.
                </p>
              </div>

              {/* JOURNEY */}

              <div className="relative">
                {/* Vertical line */}

                <div className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-[#DDE3DA] sm:block" />

                <div className="space-y-0">
                  {points.map((point, index) => (
                    <article
                      key={point.number}
                      className="
                        group
                        relative
                        border-t
                        border-[#DDE3DA]
                        py-8
                        sm:py-10
                      "
                    >
                      <div className="grid gap-6 sm:grid-cols-[40px_1fr_auto] sm:items-start sm:gap-8">
                        {/* NUMBER */}

                        <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#D8DED6] bg-[#F8F8F3] text-[11px] font-semibold tracking-[0.12em] text-[#B86F52] transition-all duration-300 group-hover:border-[#B86F52] group-hover:bg-[#B86F52] group-hover:text-white">
                          {point.number}
                        </div>

                        {/* CONTENT */}

                        <div className="max-w-[570px]">
                          <h3
                            className="
                              text-[22px]
                              font-semibold
                              tracking-[-0.025em]
                              text-[#203D30]
                              transition-colors
                              duration-300
                              group-hover:text-[#456354]
                              sm:text-[25px]
                            "
                          >
                            {point.title}
                          </h3>

                          <p
                            className="
                              mt-3
                              text-[14px]
                              leading-6
                              text-[#707B73]
                              sm:text-[15px]
                              sm:leading-7
                            "
                          >
                            {point.text}
                          </p>
                        </div>

                        {/* ARROW */}

                        <span
                          className="
                            hidden
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#DCE2D9]
                            bg-white
                            text-[#456354]
                            transition-all
                            duration-300
                            group-hover:translate-x-1
                            group-hover:border-[#456354]
                            sm:flex
                          "
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M3 11L11 3M5 3H11V9"
                              stroke="currentColor"
                              strokeWidth="1.3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </article>
                  ))}

                  <div className="border-t border-[#DDE3DA]" />
                </div>
              </div>

              {/* BOTTOM NOTE */}

              <div className="mt-9 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B86F52]" />

                <p className="text-xs font-medium tracking-wide text-[#7D877F]">
                  Small steps. A clearer picture. A more personal journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
