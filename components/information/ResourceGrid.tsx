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
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4D6A50]">
              Explore topics
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-[#263F31] sm:text-5xl">
              A simple place to start.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#6D796F]">
            Resources currently point to the main educational and product
            experiences available across the Niramaya website.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
      </Container>
    </section>
  );
}
