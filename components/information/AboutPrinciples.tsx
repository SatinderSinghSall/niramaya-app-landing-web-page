import { CircleCheck, Goal, Leaf, LineChart, UserRound } from "lucide-react";
import Container from "@/components/common/Container";

const principles = [
  {
    number: "01",
    icon: UserRound,
    title: "Personal",
    text: "The experience is built around information users provide about themselves and their wellness context.",
  },
  {
    number: "02",
    icon: Goal,
    title: "Goal-oriented",
    text: "Users can establish wellness goals and use progress features to follow their journey.",
  },
  {
    number: "03",
    icon: LineChart,
    title: "Progress-aware",
    text: "Progress functionality gives users a way to review movement toward their goals.",
  },
  {
    number: "04",
    icon: Leaf,
    title: "Wellness-focused",
    text: "Yoga, Ayurveda and other wellness-oriented experiences are part of the broader platform.",
  },
  {
    number: "05",
    icon: CircleCheck,
    title: "Connected",
    text: "Profile, goals, exploration, favorites, consultation and account features work as parts of one application.",
  },
];

export default function AboutPrinciples() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Container>
        <div className="py-20 sm:py-24 lg:py-28">
          {/* Intro */}
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#4D6A50]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4D6A50]">
                  Our approach
                </p>
              </div>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A0AAA1]">
                02 / What guides Niramaya
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-[2.75rem] font-semibold leading-[1] tracking-[-0.045em] text-[#263F31] sm:text-5xl lg:text-[4.15rem]">
                Designed around the{" "}
                <span className="text-[#4D6A50]">whole wellness journey.</span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-7 text-[#6D796F] sm:text-lg sm:leading-8">
                Niramaya brings several parts of a wellness experience together
                within one mobile platform — from understanding your context to
                setting goals, discovering wellness and following progress.
              </p>
            </div>
          </div>

          {/* Principles */}
          <div className="mt-16 border-y border-[#DDE3D9] lg:mt-20">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group grid gap-6 border-b border-[#DDE3D9] py-7 last:border-b-0 sm:grid-cols-[72px_56px_0.65fr_1fr] sm:items-center sm:gap-6 sm:py-8"
                >
                  {/* Number */}
                  <span className="text-[11px] font-bold tracking-[0.16em] text-[#A0AAA1]">
                    {item.number}
                  </span>

                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DCE4D9] bg-[#F3F6EF] transition-all duration-300 group-hover:border-[#4D6A50]/25 group-hover:bg-[#EAF0E5]">
                    <Icon
                      className="h-[17px] w-[17px] text-[#4D6A50]"
                      strokeWidth={1.7}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#263F31] sm:text-[1.35rem]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="max-w-xl text-sm leading-6 text-[#727D74]">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Closing detail */}
          <div className="mt-9 flex items-center justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A0AAA1]">
              Personal · Practical · Connected
            </p>

            <div className="hidden items-center gap-2 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C65D3C]" />
              <span className="h-px w-8 bg-[#D2DBCF]" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
