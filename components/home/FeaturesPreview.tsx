import Link from "next/link";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";

const features = [
  {
    title: "Health Profile",
    description:
      "Keep important aspects of your health and wellbeing organized in one place.",
  },
  {
    title: "Goals",
    description:
      "Define meaningful wellness goals and turn intentions into measurable progress.",
  },
  {
    title: "Progress",
    description:
      "See how your efforts are developing over time and stay connected to your journey.",
  },
  {
    title: "Explore",
    description:
      "Discover wellness content and recommendations across different areas of wellbeing.",
  },
  {
    title: "Yoga",
    description:
      "Explore Yoga practices and information based on your wellness interests.",
  },
  {
    title: "Ayurveda",
    description:
      "Discover Ayurveda-focused information and wellness recommendations.",
  },
];

export default function FeaturesPreview() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Features"
          title="Everything you need for a more intentional wellness journey."
          description="Niramaya brings together the tools and experiences that help you understand, plan, explore and progress."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-[#E3E7DF] bg-[#FBFCFA] p-7 transition-colors hover:border-[#C9D5C6]"
            >
              <span className="text-sm font-semibold text-[#4D6A50]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-7 text-xl font-semibold text-[#263F31]">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#6D796F]">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/features"
            className="text-sm font-semibold text-[#4D6A50] hover:text-[#263F31]"
          >
            Explore all features →
          </Link>
        </div>
      </Container>
    </section>
  );
}
