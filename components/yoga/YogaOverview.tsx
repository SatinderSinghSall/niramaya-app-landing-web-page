import { BookOpen, Filter, Search, Target } from "lucide-react";
import Container from "@/components/common/Container";

const features = [
  {
    icon: BookOpen,
    title: "Yoga content",
    description:
      "Browse Yoga content through a dedicated experience inside Niramaya.",
  },
  {
    icon: Filter,
    title: "Categories",
    description:
      "Use the Yoga category experience to explore practices by available categories.",
  },
  {
    icon: Search,
    title: "Search & discovery",
    description:
      "Find Yoga content through the wider Explore and Search experience.",
  },
  {
    icon: Target,
    title: "Recommendations",
    description:
      "Niramaya supports personalized and goal-oriented Yoga recommendations.",
  },
];

export default function YogaOverview() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4D6A50]">
              The Yoga experience
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#263F31] sm:text-5xl">
              Explore practice
              <span className="block text-[#4D6A50]">
                beyond a single screen.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#6D796F] sm:text-base">
              The Yoga module combines content discovery, categories, search,
              details and recommendations into one dedicated experience.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="rounded-3xl border border-[#E3E7DF] bg-[#FAFBF8] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF2E6] text-[#4D6A50]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-7 text-xl font-semibold text-[#263F31]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#6D796F]">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
