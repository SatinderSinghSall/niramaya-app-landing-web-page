import { Heart, Search, Sparkles, Bookmark } from "lucide-react";
import Container from "@/components/common/Container";

const items = [
  {
    icon: Sparkles,
    number: "01",
    title: "Discover",
    description:
      "Explore wellness content and recommendations through the Explore experience.",
  },
  {
    icon: Search,
    number: "02",
    title: "Search",
    description:
      "Find Yoga and Ayurveda content using the application's search experience.",
  },
  {
    icon: Bookmark,
    number: "03",
    title: "Save",
    description:
      "Keep supported wellness content available through your Favorites.",
  },
  {
    icon: Heart,
    number: "04",
    title: "Continue",
    description:
      "Return to the content and experiences that fit into your ongoing journey.",
  },
];

export default function WellnessOverview() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-[#EEF2E6] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#4D6A50]">
            Explore wellness
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-[#263F31] sm:text-5xl">
            More than a destination.
            <span className="block text-[#4D6A50]">
              A place to keep exploring.
            </span>
          </h2>

          <p className="mt-6 text-sm leading-7 text-[#6D796F] sm:text-base">
            Niramaya brings different wellness discovery tools together so you
            can browse, search, save and return to content that interests you.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group rounded-[1.75rem] border border-[#E3E7DF] bg-[#FAFBF8] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF2E6] text-[#4D6A50]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="text-xs font-semibold text-[#929B92]">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-[#263F31]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6D796F]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
