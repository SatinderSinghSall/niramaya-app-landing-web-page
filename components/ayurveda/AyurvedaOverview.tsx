import { BookOpen, Search, Sparkles, Target } from "lucide-react";
import Container from "@/components/common/Container";

const features = [
  {
    icon: BookOpen,
    title: "Ayurvedic content",
    description:
      "Explore dedicated Ayurveda content through the Niramaya wellness experience.",
  },
  {
    icon: Sparkles,
    title: "Recommendations",
    description:
      "Discover Ayurvedic recommendations available through the application.",
  },
  {
    icon: Search,
    title: "Search & discovery",
    description:
      "Find Ayurveda content through search and the wider Explore experience.",
  },
  {
    icon: Target,
    title: "Goal-oriented discovery",
    description:
      "The application supports Ayurveda recommendations connected with wellness goals.",
  },
];

export default function AyurvedaOverview() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#716A4F]">
              The Ayurveda experience
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#30372D] sm:text-5xl">
              Discover.
              <span className="block text-[#716A4F]">Learn. Explore.</span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#6F746B] sm:text-base">
              Niramaya brings Ayurveda content and recommendations into its
              broader wellness discovery experience.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="rounded-3xl border border-[#E7E3D8] bg-[#FFFDF8] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F1EEE3] text-[#716A4F]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-7 text-xl font-semibold text-[#30372D]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#6F746B]">
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
