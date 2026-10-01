import Container from "@/components/common/Container";
import ResourceCard from "./ResourceCard";

const resources = [
  {
    category: "Wellness practice",
    title: "Yoga",
    description:
      "Explore the Yoga experience and discover information and practices available through Niramaya.",
    href: "/yoga",
    icon: "leaf" as const,
  },
  {
    category: "Wellness tradition",
    title: "Ayurveda",
    description:
      "Explore Niramaya's Ayurveda experience and its wellness-oriented recommendations.",
    href: "/ayurveda",
    icon: "leaf" as const,
  },
  {
    category: "Goals",
    title: "Goals & Progress",
    description:
      "Understand how Niramaya connects goal setting with progress tracking throughout the app.",
    href: "/features",
    icon: "target" as const,
  },
  {
    category: "Getting started",
    title: "How It Works",
    description:
      "Follow the Niramaya journey from authentication and onboarding through wellness exploration.",
    href: "/how-it-works",
    icon: "compass" as const,
  },
  {
    category: "Product",
    title: "The Niramaya App",
    description:
      "See the mobile experience and understand the main areas available within the application.",
    href: "/app",
    icon: "heart" as const,
  },
  {
    category: "Information",
    title: "Frequently Asked Questions",
    description:
      "Find answers to common questions about Niramaya, its features and its wellness focus.",
    href: "/faq",
    icon: "book" as const,
  },
];

export default function ResourceGrid() {
  return (
    <section className="bg-white">
      <Container>
        <div className="py-14 sm:py-16 lg:py-20">
          {/* Header */}
          <div className="grid gap-6 border-b border-[#DDE3D9] pb-8 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold tracking-[0.18em] text-[#9AA49B]">
                  01
                </span>

                <span className="h-px w-7 bg-[#C9D4C6]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4D6A50]">
                  Resource library
                </span>
              </div>

              <h2 className="mt-5 text-[2.7rem] font-semibold leading-none tracking-[-0.05em] text-[#263F31] sm:text-4xl lg:text-[3.5rem]">
                A simple place to <span className="text-[#4D6A50]">start.</span>
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-[#6D796F]">
              Browse guides and product areas across the Niramaya experience.
              Choose a topic to learn more.
            </p>
          </div>

          {/* Resource grid */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {resources.map((resource, index) => (
              <ResourceCard
                key={resource.title}
                number={String(index + 1).padStart(2, "0")}
                category={resource.category}
                title={resource.title}
                description={resource.description}
                href={resource.href}
                icon={resource.icon}
              />
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 flex items-center justify-between border-t border-[#DDE3D9] pt-5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9AA49B]">
              Niramaya Resources
            </span>

            <span className="hidden text-xs text-[#929B92] sm:block">
              Guides · Wellness · Product
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
