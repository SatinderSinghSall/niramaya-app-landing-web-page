import { HeartPulse, Compass, Layers3 } from "lucide-react";
import Container from "@/components/common/Container";

const items = [
  {
    number: "01",
    icon: HeartPulse,
    title: "Start with your context",
    text: "Niramaya begins with a structured onboarding experience covering areas such as personal details, physical health, wellbeing, lifestyle, nutrition, sleep, fitness, Yoga and preferences.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Turn information into direction",
    text: "Your wellness information becomes part of the wider application experience, helping connect your profile with goals, progress and wellness exploration.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Keep everything connected",
    text: "Goals, progress, wellness content, health-profile management and consultation workflows are brought together rather than treated as completely separate experiences.",
  },
];

export default function AboutStory() {
  return (
    <section className="bg-[#F7F8F4] py-24 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4D6A50]">
              The idea behind Niramaya
            </p>

            <h2 className="mt-4 max-w-lg text-4xl font-semibold tracking-[-0.035em] text-[#263F31] sm:text-5xl">
              Wellness starts with understanding yourself.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-[#6D796F]">
              Niramaya is designed around a personalized wellness journey.
              Instead of presenting wellness as a collection of disconnected
              tools, the platform connects personal information, goals, progress
              and wellness discovery within one experience.
            </p>

            <div className="mt-12 divide-y divide-[#DDE3D9] border-y border-[#DDE3D9]">
              {items.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="grid gap-5 py-7 sm:grid-cols-[70px_1fr]"
                  >
                    <div className="flex items-start justify-between sm:block">
                      <span className="text-sm font-semibold text-[#929B92]">
                        {item.number}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center bg-[#E8EEE2] sm:mt-5">
                        <Icon className="h-5 w-5 text-[#4D6A50]" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#263F31]">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-2xl leading-7 text-[#6D796F]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
