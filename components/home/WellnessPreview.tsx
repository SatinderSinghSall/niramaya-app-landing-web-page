import Link from "next/link";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";

const areas = [
  "Physical wellbeing",
  "Mental wellbeing",
  "Lifestyle",
  "Nutrition",
  "Sleep",
  "Movement",
];

export default function WellnessPreview() {
  return (
    <section className="bg-[#263F31] py-24 text-white sm:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Wellness"
            title="Wellness has many dimensions."
            description="Niramaya takes a broader view of everyday wellbeing, helping you explore the areas that matter to you."
            align="left"
          />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {areas.map((area) => (
              <div key={area} className="border border-white/15 bg-white/5 p-5">
                <p className="text-sm font-medium text-white">{area}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <Link
            href="/wellness"
            className="text-sm font-semibold text-[#D8E2D4] hover:text-white"
          >
            Explore wellness →
          </Link>
        </div>
      </Container>
    </section>
  );
}
