import {
  BarChart3,
  HeartPulse,
  Leaf,
  Search,
  Target,
  UserRound,
} from "lucide-react";
import Container from "@/components/common/Container";

const features = [
  {
    icon: UserRound,
    number: "01",
    title: "Personal wellness profile",
    text: "Keep your health and wellness information within a dedicated profile.",
  },
  {
    icon: Target,
    number: "02",
    title: "Wellness goals",
    text: "Create goals and keep your wellness journey organized around what matters to you.",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Progress tracking",
    text: "Record and review progress through the dedicated progress experience.",
  },
  {
    icon: Search,
    number: "04",
    title: "Explore & search",
    text: "Discover Yoga, Ayurveda, recommendations and other wellness content.",
  },
  {
    icon: Leaf,
    number: "05",
    title: "Yoga & Ayurveda",
    text: "Access dedicated wellness experiences for Yoga and Ayurveda.",
  },
  {
    icon: HeartPulse,
    number: "06",
    title: "Consultation",
    text: "Explore the Ayurvedic consultation workflow available within the app.",
  },
];

export default function AppFeatures() {
  return (
    <section className="bg-[#263F31] py-24 text-white sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8C9B3]">
              What lives inside
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl">
              A complete wellness
              <span className="block text-[#B8C9B3]">experience.</span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/55 sm:text-base">
              The mobile app brings the core Niramaya modules together rather
              than treating each part of wellness as a separate experience.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.number}
                  className="group rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.075]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                      <Icon className="h-5 w-5 text-[#B8C9B3]" />
                    </div>

                    <span className="text-xs font-semibold text-white/25">
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/45">
                    {feature.text}
                  </p>

                  <div className="mt-6 h-px w-8 bg-[#B8C9B3]/30 transition-all duration-500 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
