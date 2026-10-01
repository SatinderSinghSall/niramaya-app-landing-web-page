import {
  ArrowRight,
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
    <section className="relative overflow-hidden bg-[#263F31] text-white">
      {/* Very subtle background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-56 -top-56 h-[560px] w-[560px] rounded-full border border-white/[0.035]"
      />

      <Container>
        <div className="relative py-14 sm:py-16 lg:py-20">
          {/* ====================================================== */}
          {/* INTRO                                                  */}
          {/* ====================================================== */}

          <div className="border-b border-white/10 pb-10 sm:pb-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C65D3C]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8C9B3]">
                  How it comes together
                </span>
              </div>

              <h2 className="mt-5 max-w-4xl text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl lg:text-[4.25rem]">
                A simple journey,
                <span className="block text-[#AFC2AA]">
                  built around your wellbeing.
                </span>
              </h2>

              <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <p className="max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                  Start with your personal context, choose where you want to
                  focus, and use Niramaya to keep your journey moving.
                </p>

                <p className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/25">
                  08 steps · one connected experience
                </p>
              </div>
            </div>
          </div>

          {/* ====================================================== */}
          {/* STEPS                                                  */}
          {/* ====================================================== */}

          <div>
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;

              return (
                <article
                  key={step.number}
                  className={[
                    "group relative border-b border-white/10",
                    isLast ? "border-b-0" : "",
                  ].join(" ")}
                >
                  <div className="grid gap-5 py-7 sm:py-8 lg:grid-cols-[72px_210px_minmax(0,1fr)_44px] lg:items-center lg:gap-8 lg:py-9">
                    {/* Number */}
                    <div className="flex items-center">
                      <span className="text-[11px] font-semibold tracking-[0.16em] text-[#78917B]">
                        {step.number}
                      </span>
                    </div>

                    {/* Category */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#AFC2AA]">
                        <Icon className="h-[15px] w-[15px]" />
                      </div>

                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#AFC2AA]/75">
                          {step.tag}
                        </p>

                        <p className="mt-0.5 text-xs text-white/30">
                          {step.eyebrow}
                        </p>
                      </div>
                    </div>

                    {/* Main content */}
                    <div className="lg:pl-2">
                      <h3 className="text-xl font-medium tracking-[-0.025em] text-white transition-colors duration-200 group-hover:text-[#C8D7C3] sm:text-[1.45rem]">
                        {step.title}
                      </h3>

                      <p className="mt-1.5 max-w-2xl text-sm leading-6 text-white/42">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden lg:flex lg:justify-end">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/20 transition-all duration-300 group-hover:border-[#AFC2AA]/35 group-hover:text-[#AFC2AA]">
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* ====================================================== */}
          {/* FOOTER                                                 */}
          {/* ====================================================== */}

          <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/30">
              From your profile to your progress.
            </p>

            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#78917B]">
              Niramaya · Everyday wellbeing
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
