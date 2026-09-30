import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";

const points = [
  {
    title: "Personal context",
    text: "Your wellness journey starts with understanding your individual needs, habits and preferences.",
  },
  {
    title: "Practical guidance",
    text: "Discover information and recommendations designed to help you make everyday wellness decisions.",
  },
  {
    title: "Progress that you can see",
    text: "Create goals and follow your progress instead of relying only on motivation.",
  },
  {
    title: "A broader view of wellbeing",
    text: "Explore physical wellbeing, lifestyle, movement, Yoga and Ayurveda in one place.",
  },
];

export default function WhyNiramaya() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="Why Niramaya"
          title="A calmer way to think about your wellbeing."
          description="Niramaya is designed around the idea that better wellness comes from understanding yourself and taking consistent, manageable steps."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-[#DCE3D9] bg-[#DCE3D9] sm:grid-cols-2">
          {points.map((point) => (
            <article key={point.title} className="bg-white p-8 sm:p-10">
              <div className="mb-6 h-10 w-10 rounded-lg bg-[#EEF2E6]" />

              <h3 className="text-xl font-semibold text-[#263F31]">
                {point.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#6D796F]">
                {point.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
