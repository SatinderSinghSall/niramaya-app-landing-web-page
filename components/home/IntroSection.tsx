import Container from "@/components/common/Container";

const items = [
  {
    number: "01",
    title: "Understand yourself",
    text: "Build a clearer picture of your health, lifestyle, wellbeing and preferences.",
    label: "Know where you are",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M5.5 20C6.2 16.8 8.3 15 12 15s5.8 1.8 6.5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Set meaningful goals",
    text: "Turn what matters to you into practical wellness goals you can work toward.",
    label: "Choose what matters",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          d="M5 19L19 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8 5h11v11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Keep moving forward",
    text: "Track progress and discover guidance that supports your ongoing journey.",
    label: "Build your rhythm",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          d="M4 17L9 12L13 15L20 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 7h4v4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function IntroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#E1E5DD] bg-[#F8F9F5]">
      <Container>
        <div className="py-24 sm:py-28 lg:py-32">
          {/* =====================================================
              HEADER
          ===================================================== */}

          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#B86F52]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#456354]">
                  A different approach
                </span>
              </div>

              <p className="mt-5 text-sm font-medium text-[#89938C]">
                Wellness, without the overwhelm.
              </p>
            </div>

            <div className="max-w-[760px] lg:ml-auto">
              <h2
                className="
                  text-4xl
                  font-semibold
                  leading-[1.05]
                  tracking-[-0.035em]
                  text-[#203D30]
                  sm:text-5xl
                  lg:text-[3.7rem]
                "
              >
                Wellness is more than
                <br className="hidden sm:block" /> a single number.
              </h2>

              <p
                className="
                  mt-6
                  max-w-[680px]
                  text-[16px]
                  leading-7
                  text-[#68766D]
                  sm:text-[17px]
                  sm:leading-8
                "
              >
                Niramaya brings different parts of your wellbeing together so
                you can understand where you are, define where you want to go,
                and build practical habits along the way.
              </p>
            </div>
          </div>

          {/* =====================================================
              JOURNEY LINE
          ===================================================== */}

          <div className="relative mt-16 sm:mt-20">
            {/* Connecting line — desktop */}

            <div
              className="
                absolute
                left-[8%]
                right-[8%]
                top-[72px]
                hidden
                h-px
                bg-[#D8DED6]
                lg:block
              "
            />

            <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
              {items.map((item) => (
                <article
                  key={item.number}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[18px]
                    border
                    border-[#DDE3DA]
                    bg-[#FCFCF9]
                    p-6
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#C9D3C8]
                    hover:shadow-[0_18px_45px_rgba(39,62,50,0.08)]
                    sm:p-7
                    lg:min-h-[330px]
                    lg:p-8
                  "
                >
                  {/* Top row */}

                  <div className="relative z-10 flex items-start justify-between">
                    <span
                      className="
                        text-[12px]
                        font-semibold
                        tracking-[0.12em]
                        text-[#B86F52]
                      "
                    >
                      {item.number}
                    </span>

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#DCE2D9]
                        bg-[#F4F6F1]
                        text-[#365545]
                        transition-all
                        duration-300
                        group-hover:border-[#BFCDBF]
                        group-hover:bg-[#EAF0E8]
                      "
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* Main content */}

                  <div className="relative z-10 mt-12">
                    <p
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#929B94]
                      "
                    >
                      {item.label}
                    </p>

                    <h3
                      className="
                        mt-3
                        text-[22px]
                        font-semibold
                        tracking-[-0.02em]
                        text-[#203D30]
                        sm:text-[24px]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        max-w-[340px]
                        text-[14px]
                        leading-6
                        text-[#6D796F]
                      "
                    >
                      {item.text}
                    </p>
                  </div>

                  {/* Bottom accent */}

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[3px]
                      w-0
                      bg-[#B86F52]
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />
                </article>
              ))}
            </div>
          </div>

          {/* =====================================================
              BOTTOM STATEMENT
          ===================================================== */}

          <div
            className="
              mt-10
              flex
              flex-col
              gap-4
              border-t
              border-[#DDE3DA]
              pt-7
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p className="max-w-xl text-sm leading-6 text-[#7A857E]">
              A simple way to turn awareness into small, sustainable actions.
            </p>

            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#50665A]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B86F52]" />
              Understand
              <span className="text-[#B5BDB6]">→</span>
              Act
              <span className="text-[#B5BDB6]">→</span>
              Progress
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
