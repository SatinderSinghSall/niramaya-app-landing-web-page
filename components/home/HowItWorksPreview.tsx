import Link from "next/link";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Create your profile",
    text: "Share information that helps Niramaya understand your personal wellness context.",
  },
  {
    number: "02",
    title: "Set your goals",
    text: "Choose the areas of wellbeing you want to focus on and define meaningful goals.",
  },
  {
    number: "03",
    title: "Explore your wellness",
    text: "Discover relevant wellness information, Yoga and Ayurveda experiences.",
  },
  {
    number: "04",
    title: "Track your progress",
    text: "Keep an eye on your goals and see how your wellness journey develops.",
  },
];

export default function HowItWorksPreview() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="How it works"
          title="Simple steps. A more intentional journey."
          description="Niramaya is built to make your wellness journey easier to understand and easier to continue."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number}>
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9D5C6] text-sm font-semibold text-[#4D6A50]">
                {step.number}
              </div>

              <h3 className="mt-6 text-lg font-semibold text-[#263F31]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#6D796F]">
                {step.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/how-it-works"
            className="text-sm font-semibold text-[#4D6A50] hover:text-[#263F31]"
          >
            Learn how Niramaya works →
          </Link>
        </div>
      </Container>
    </section>
  );
}
