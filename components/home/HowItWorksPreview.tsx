import Link from "next/link";
import Container from "@/components/common/Container";
import {
  ArrowRight,
  ArrowUpRight,
  UserRound,
  Target,
  Compass,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create your profile",
    text: "Share information that helps Niramaya understand your personal wellness context.",
    detail: "Your starting point",
    icon: UserRound,
  },
  {
    number: "02",
    title: "Set your goals",
    text: "Choose the areas of wellbeing you want to focus on and define meaningful goals.",
    detail: "What matters to you",
    icon: Target,
  },
  {
    number: "03",
    title: "Explore your wellness",
    text: "Discover relevant wellness information, Yoga and Ayurveda experiences.",
    detail: "Learn & discover",
    icon: Compass,
  },
  {
    number: "04",
    title: "Track your progress",
    text: "Keep an eye on your goals and see how your wellness journey develops.",
    detail: "Keep moving forward",
    icon: TrendingUp,
  },
];

export default function HowItWorksPreview() {
  return (
    <section className="border-b border-[#E3E7DF] bg-[#F7F8F2]">
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          {/* HEADER */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#456354] sm:text-[11px]">
              How it works
            </p>

            <h2 className="mt-4 text-[2.65rem] font-semibold leading-[1.04] tracking-[-0.045em] text-[#203D30] sm:text-5xl lg:text-[3.8rem]">
              Simple steps.
              <br />A more intentional journey.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#6D796F] sm:text-[16px]">
              Niramaya is built to make your wellness journey easier to
              understand, easier to follow and easier to continue.
            </p>
          </div>

          {/* STEPS */}
          <div className="relative mt-12 sm:mt-14 lg:mt-16">
            {/* CONNECTING LINE */}
            <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-[#CDD8CC] lg:block" />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="group relative flex min-h-[360px] flex-col rounded-2xl border border-[#DCE4D9] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C6D4C6] hover:shadow-[0_14px_35px_rgba(32,61,48,0.07)] sm:p-7"
                  >
                    {/* TOP ROW */}
                    <div className="flex items-start justify-between">
                      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#CFDACE] bg-[#F7F8F2] text-[#456354] transition-all duration-300 group-hover:border-[#203D30] group-hover:bg-[#203D30] group-hover:text-white">
                        <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
                      </div>

                      <span className="pt-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#9AA59B]">
                        Step {index + 1}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div className="mt-10">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#B86F52]">
                        {step.detail}
                      </p>

                      <h3 className="mt-3 text-[20px] font-semibold leading-[1.2] tracking-[-0.025em] text-[#203D30]">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-[#6D796F]">
                        {step.text}
                      </p>
                    </div>

                    {/* CARD FOOTER */}
                    <div className="mt-auto pt-8">
                      <div className="flex items-center justify-between border-t border-[#E8ECE5] pt-5">
                        <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#A0AAA1]">
                          Niramaya
                        </span>

                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F4EE] text-[#456354] transition-all duration-300 group-hover:bg-[#E6EEE4] group-hover:text-[#203D30]">
                          <ArrowUpRight
                            size={15}
                            strokeWidth={1.8}
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-center sm:mt-12">
            <Link
              href="/how-it-works"
              className="group inline-flex items-center gap-3 rounded-full bg-[#203D30] px-5 py-3 text-sm font-semibold !text-white shadow-[0_8px_24px_rgba(32,61,48,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2B4D3D] hover:shadow-[0_12px_28px_rgba(32,61,48,0.18)]"
            >
              <span className="!text-white">Learn how Niramaya works</span>

              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#203D30] transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
