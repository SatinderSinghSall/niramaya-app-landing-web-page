import {
  Compass,
  HeartPulse,
  Target,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/common/Container";

const journey = [
  {
    icon: HeartPulse,
    title: "Understand",
    text: "Build your wellness profile.",
  },
  {
    icon: Target,
    title: "Set goals",
    text: "Choose what you want to work toward.",
  },
  {
    icon: Compass,
    title: "Explore",
    text: "Discover wellness content and practices.",
  },
  {
    icon: BarChart3,
    title: "Track",
    text: "Record and review your progress.",
  },
];

export default function AppJourney() {
  return (
    <section className="bg-[#EEF2E6] py-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4D6A50]">
            Your journey
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#263F31] sm:text-5xl">
            Understand → Explore → Track
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#6D796F] sm:text-base">
            The app connects the different parts of your wellness experience
            into one continuous journey.
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-[#CAD6C6] lg:block" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="relative rounded-[1.75rem] border border-[#DCE4D7] bg-white p-7 text-center"
                >
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#EEF2E6] bg-[#263F31] text-[#B8C9B3]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="mt-6 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#929B92]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-2 font-semibold text-[#263F31]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#929B92]">
                    {item.text}
                  </p>

                  {index < journey.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-7 z-20 hidden h-5 w-5 text-[#AAB7A6] lg:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
