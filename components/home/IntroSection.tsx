import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";

export default function IntroSection() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="A different approach to wellness"
          title="Wellness is more than a single number."
          description="Niramaya brings different parts of your wellbeing together so you can understand where you are, define where you want to go, and build practical habits along the way."
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-5 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Understand yourself",
              text: "Build a clearer picture of your health, lifestyle, wellbeing and preferences.",
            },
            {
              number: "02",
              title: "Set meaningful goals",
              text: "Turn what matters to you into practical wellness goals you can work toward.",
            },
            {
              number: "03",
              title: "Keep moving forward",
              text: "Track progress and discover guidance that supports your ongoing journey.",
            },
          ].map((item) => (
            <div key={item.number} className="border-t border-[#DCE3D9] pt-6">
              <span className="text-sm font-semibold text-[#4D6A50]">
                {item.number}
              </span>

              <h3 className="mt-4 text-xl font-semibold text-[#263F31]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#6D796F]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
