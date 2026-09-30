import { Activity, HeartPulse, Moon, Move, Wind } from "lucide-react";
import Container from "@/components/common/Container";

const categories = [
  {
    icon: Move,
    title: "Movement",
    text: "Explore Yoga practices through the available categories.",
  },
  {
    icon: Wind,
    title: "Breath & awareness",
    text: "Discover content presented as part of the Yoga experience.",
  },
  {
    icon: HeartPulse,
    title: "Wellness goals",
    text: "Explore Yoga recommendations connected to wellness goals.",
  },
  {
    icon: Moon,
    title: "Everyday practice",
    text: "Return to Yoga content whenever you want to continue exploring.",
  },
  {
    icon: Activity,
    title: "Practice details",
    text: "Open individual Yoga content to learn more about a practice.",
  },
];

export default function YogaCategories() {
  return (
    <section className="bg-[#EEF2E6] py-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4D6A50]">
            Explore categories
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#263F31] sm:text-5xl">
            A practice library to explore.
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#6D796F] sm:text-base">
            Yoga categories help organize the content available through the
            Niramaya experience.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group w-full max-w-[230px] rounded-[1.75rem] border border-[#DCE4D7] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF2E6] text-[#4D6A50]">
                  <Icon className="h-5 w-5" />
                </div>

                <span className="mt-5 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#929B92]">
                  0{index + 1}
                </span>

                <h3 className="mt-2 font-semibold text-[#263F31]">
                  {category.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#929B92]">
                  {category.text}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
