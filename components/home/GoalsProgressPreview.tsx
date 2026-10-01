import Link from "next/link";
import Container from "@/components/common/Container";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Circle,
  Target,
  TrendingUp,
} from "lucide-react";

const goals = [
  {
    label: "Morning movement",
    status: "On track",
  },
  {
    label: "Better sleep",
    status: "In progress",
  },
  {
    label: "Daily hydration",
    status: "Completed",
  },
];

export default function GoalsProgressPreview() {
  return (
    <section className="border-b border-[#E3E7DF] bg-[#F7F8F2]">
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          {/* SECTION HEADER */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#456354] sm:text-[11px]">
              Goals & progress
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-[#203D30] sm:text-5xl lg:text-[3.7rem]">
              Small intentions.
              <br />
              Visible progress.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#6D796F] sm:text-[16px]">
              Turn the things you want to improve into simple, meaningful goals
              you can return to and keep moving forward.
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="mt-12 grid items-center gap-10 lg:mt-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            {/* IMAGE SIDE */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[26px]">
                <img
                  src="https://ayush.com/cdn/shop/articles/dranju_article_header.webp?v=1779918767"
                  alt="Wellness goals journal with healthy food and natural surroundings"
                  className="h-[430px] w-full object-cover object-center sm:h-[510px] lg:h-[540px]"
                />

                {/* IMAGE SCRIM */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#203D30]/35 via-transparent to-transparent" />

                {/* IMAGE LABEL */}
                <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
                  <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/90 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#203D30] backdrop-blur-sm">
                    <Target size={14} strokeWidth={1.7} />
                    Your wellness journey
                  </div>
                </div>
              </div>

              {/* FLOATING PROGRESS CARD */}
              <div className="absolute -bottom-7 right-4 w-[245px] rounded-2xl border border-[#DCE4D9] bg-white p-5 shadow-[0_18px_45px_rgba(32,61,48,0.12)] sm:right-6 sm:w-[270px] lg:-right-8">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#9AA59B]">
                      Wellness journey
                    </p>

                    <p className="mt-1.5 text-[17px] font-semibold tracking-[-0.02em] text-[#203D30]">
                      Your goals
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF3EB] text-[#456354]">
                    <TrendingUp size={16} strokeWidth={1.7} />
                  </div>
                </div>

                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.14em] text-[#9AA59B]">
                      Progress
                    </p>

                    <p className="mt-1 text-2xl font-semibold tracking-[-0.04em] text-[#203D30]">
                      72%
                    </p>
                  </div>

                  <p className="text-[10px] font-medium text-[#456354]">
                    On your way
                  </p>
                </div>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#E8ECE5]">
                  <div className="h-full w-[72%] rounded-full bg-[#456354]" />
                </div>
              </div>
            </div>

            {/* CONTENT SIDE */}
            <div className="pt-5 lg:pt-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B86F52]">
                Make progress personal
              </p>

              <h3 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-[#203D30] sm:text-4xl">
                Keep your intentions close and your progress visible.
              </h3>

              <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#6D796F]">
                Whether you're working on movement, sleep, nutrition or
                something more personal, Niramaya gives you a simple place to
                set goals and see how your efforts are developing.
              </p>

              {/* GOAL LIST */}
              <div className="mt-8 border-t border-[#DCE4D9]">
                {goals.map((goal, index) => {
                  const completed = index === 2;

                  return (
                    <div
                      key={goal.label}
                      className="group flex items-center justify-between border-b border-[#DCE4D9] py-4"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-full ${
                            completed
                              ? "bg-[#456354] text-white"
                              : "border border-[#CDD8CC] bg-white text-[#A0AAA1]"
                          }`}
                        >
                          {completed ? (
                            <Check size={14} strokeWidth={2} />
                          ) : (
                            <Circle size={13} strokeWidth={1.5} />
                          )}
                        </span>

                        <div>
                          <p className="text-sm font-medium text-[#203D30]">
                            {goal.label}
                          </p>

                          <p className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-[#9AA59B]">
                            Goal {String(index + 1).padStart(2, "0")}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${
                          completed ? "text-[#456354]" : "text-[#9AA59B]"
                        }`}
                      >
                        {goal.status}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href="/features"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#203D30] px-4 py-2.5 text-[13px] font-semibold !text-white shadow-[0_7px_20px_rgba(32,61,48,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2B4D3D] hover:shadow-[0_10px_25px_rgba(32,61,48,0.16)]"
                >
                  <span className="!text-white">Discover goals & progress</span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#203D30] transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight size={14} strokeWidth={2} />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* BOTTOM DETAIL */}
          <div className="mt-14 flex items-center justify-center gap-3 sm:mt-16">
            <span className="h-px w-8 bg-[#D5DED3]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#8C988E]">
              Progress is built one step at a time
            </p>

            <ArrowUpRight
              size={13}
              strokeWidth={1.6}
              className="text-[#8C988E]"
            />

            <span className="h-px w-8 bg-[#D5DED3]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
