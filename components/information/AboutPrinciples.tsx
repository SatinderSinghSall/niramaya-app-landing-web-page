import { CircleCheck, Goal, Leaf, LineChart, UserRound } from "lucide-react";
import Container from "@/components/common/Container";

const principles = [
  {
    icon: UserRound,
    title: "Personal",
    text: "The experience is built around information users provide about themselves and their wellness context.",
  },
  {
    icon: Goal,
    title: "Goal-oriented",
    text: "Users can establish wellness goals and use progress features to follow their journey.",
  },
  {
    icon: LineChart,
    title: "Progress-aware",
    text: "Progress functionality gives users a way to review movement toward their goals.",
  },
  {
    icon: Leaf,
    title: "Wellness-focused",
    text: "Yoga, Ayurveda and other wellness-oriented experiences are part of the broader platform.",
  },
  {
    icon: CircleCheck,
    title: "Connected",
    text: "Profile, goals, exploration, favorites, consultation and account features work as parts of one application.",
  },
];

export default function AboutPrinciples() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4D6A50]">
            Our approach
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#263F31] sm:text-5xl">
            Designed around the whole wellness journey.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#6D796F]">
            Niramaya combines several parts of a wellness experience into one
            mobile platform.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-[#E3E7DF] bg-[#E3E7DF] sm:grid-cols-2 lg:grid-cols-5">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="bg-white p-7 transition hover:bg-[#F7F8F4]"
              >
                <Icon className="h-6 w-6 text-[#4D6A50]" />

                <h3 className="mt-8 text-lg font-semibold text-[#263F31]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6D796F]">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
