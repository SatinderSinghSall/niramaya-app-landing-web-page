import {
  ArrowDown,
  BarChart3,
  Compass,
  HeartPulse,
  Leaf,
  LockKeyhole,
  Search,
  Target,
  UserRound,
} from "lucide-react";
import Container from "@/components/common/Container";

const steps = [
  {
    number: "01",
    eyebrow: "Start here",
    title: "Create your account",
    description:
      "Begin with the Niramaya authentication flow and create your personal account.",
    icon: UserRound,
    tag: "Account",
  },
  {
    number: "02",
    eyebrow: "Know yourself",
    title: "Build your wellness profile",
    description:
      "Share information about your personal details, physical health, wellbeing, lifestyle, nutrition, sleep, fitness, yoga and preferences.",
    icon: HeartPulse,
    tag: "Onboarding",
  },
  {
    number: "03",
    eyebrow: "See your picture",
    title: "Explore your dashboard",
    description:
      "Your dashboard brings relevant wellness information together so you can see your experience in one place.",
    icon: Compass,
    tag: "Dashboard",
  },
  {
    number: "04",
    eyebrow: "Choose your direction",
    title: "Set your wellness goals",
    description:
      "Create goals around the areas of wellness you want to work on and keep track of your journey.",
    icon: Target,
    tag: "Goals",
  },
  {
    number: "05",
    eyebrow: "Discover",
    title: "Explore wellness content",
    description:
      "Browse wellness-oriented content and recommendations through the Explore experience.",
    icon: Search,
    tag: "Explore",
  },
  {
    number: "06",
    eyebrow: "Find your practice",
    title: "Discover Yoga & Ayurveda",
    description:
      "Explore dedicated Yoga and Ayurveda experiences, with content available to browse and discover.",
    icon: Leaf,
    tag: "Wellness",
  },
  {
    number: "07",
    eyebrow: "Get support",
    title: "Explore consultation",
    description:
      "Use the consultation experience to explore Ayurvedic consultation workflows, including booking and consultation history.",
    icon: LockKeyhole,
    tag: "Consultation",
  },
  {
    number: "08",
    eyebrow: "Keep going",
    title: "Track your progress",
    description:
      "Record and review progress as you continue working toward your wellness goals.",
    icon: BarChart3,
    tag: "Progress",
  },
];

export default function Steps() {
  return (
    <section className="bg-[#263F31] py-24 text-white sm:py-28">
      <Container>
        {/* Section intro */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
            The journey
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            From your first step
            <span className="block text-[#B8C9B3]">to everyday progress.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Niramaya connects the different parts of your wellness experience so
            you can move from understanding yourself to setting goals, exploring
            wellness and tracking your progress.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-20 max-w-6xl">
          {/* Desktop center line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className="relative lg:grid lg:min-h-[300px] lg:grid-cols-2 lg:items-center"
                >
                  {/* Center number */}
                  <div className="absolute left-1/2 top-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#263F31] text-xs font-bold text-[#B8C9B3] lg:flex">
                    {step.number}
                  </div>

                  <div
                    className={`${
                      isLeft
                        ? "lg:col-start-1 lg:pr-20"
                        : "lg:col-start-2 lg:pl-20"
                    }`}
                  >
                    <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.075] sm:p-8">
                      {/* Large decorative number */}
                      <span className="pointer-events-none absolute -right-3 -top-7 text-[100px] font-semibold leading-none text-white/[0.025] transition-transform duration-500 group-hover:scale-110">
                        {step.number}
                      </span>

                      <div className="relative">
                        <div className="flex items-start justify-between gap-5">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B8C9B3]/10 text-[#B8C9B3]">
                            <Icon className="h-5 w-5" />
                          </div>

                          <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
                            {step.tag}
                          </span>
                        </div>

                        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-[#B8C9B3]/70">
                          {step.eyebrow}
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-white sm:text-3xl">
                          {step.title}
                        </h3>

                        <p className="mt-4 max-w-md text-sm leading-6 text-white/55">
                          {step.description}
                        </p>
                      </div>
                    </article>
                  </div>

                  {/* Mobile number */}
                  <div className="mb-3 flex items-center gap-3 lg:hidden">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B8C9B3]/10 text-xs font-bold text-[#B8C9B3]">
                      {step.number}
                    </span>

                    {index < steps.length - 1 && (
                      <ArrowDown className="h-4 w-4 text-white/25" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
