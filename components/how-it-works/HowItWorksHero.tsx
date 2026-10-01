import Link from "next/link";
import {
  ArrowRight,
  Check,
  CircleUserRound,
  Compass,
  Goal,
  Leaf,
} from "lucide-react";
import Container from "@/components/common/Container";

const journeyItems = [
  {
    number: "01",
    icon: CircleUserRound,
    label: "Understand yourself",
    description: "Start with your wellness information.",
  },
  {
    number: "02",
    icon: Goal,
    label: "Set your direction",
    description: "Turn intentions into meaningful goals.",
  },
  {
    number: "03",
    icon: Compass,
    label: "Keep moving",
    description: "Explore, track and build your journey.",
  },
];

export default function HowItWorksHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#D8E1D6] bg-[#EEF2E6]">
      {/* ============================================================ */}
      {/* BACKGROUND                                                    */}
      {/* ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-16 h-[430px] w-[430px] rounded-full border border-[#C8D5C5]/70"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-32 h-[270px] w-[270px] rounded-full border border-[#D3DDD0]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full border border-[#D6DFD3]"
      />

      <Container>
        <div className="relative py-12 sm:py-14 lg:py-16">
          <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-20">
            {/* ======================================================== */}
            {/* LEFT                                                      */}
            {/* ======================================================== */}

            <div className="relative z-10 max-w-[650px]">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#C9D6C7] bg-white/65 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.19em] text-[#4D6A50]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C65D3C]" />
                How Niramaya works
              </div>

              {/* Heading */}
              <h1 className="mt-6 max-w-[650px] text-[3.25rem] font-semibold leading-[0.94] tracking-[-0.05em] text-[#263F31] sm:text-[4.2rem] lg:text-[4.65rem] xl:text-[5rem]">
                Your wellness journey,
                <span className="mt-1 block text-[#4D6A50]">
                  built around you.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#68756B] sm:text-base">
                Niramaya brings your wellness information, goals, progress,
                exploration and support into one connected experience.
              </p>

              {/* ====================================================== */}
              {/* BUTTONS                                                 */}
              {/* ====================================================== */}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/app"
                  className="group inline-flex h-[52px] items-center justify-center gap-3 rounded-full bg-[#263F31] pl-6 pr-2 text-sm font-semibold !text-white shadow-[0_10px_28px_rgba(38,63,49,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#315440] hover:shadow-[0_14px_32px_rgba(38,63,49,0.22)]"
                >
                  <span className="!text-white">Explore the app</span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 !text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:bg-white/15">
                    <ArrowRight className="h-4 w-4 !text-white" />
                  </span>
                </Link>

                <Link
                  href="/features"
                  className="group inline-flex h-[52px] items-center justify-center gap-2 rounded-full border border-[#C7D3C4] bg-white/70 px-6 text-sm font-semibold text-[#263F31] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#4D6A50] hover:bg-white"
                >
                  <span>Explore features</span>

                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* Trust points */}
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                {["Personalized experience", "Connected wellness tools"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs text-[#718074]"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DCE6D9]">
                        <Check className="h-3 w-3 text-[#4D6A50]" />
                      </span>

                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* ======================================================== */}
            {/* RIGHT — PRODUCT JOURNEY                                  */}
            {/* ======================================================== */}

            <div className="relative mx-auto w-full max-w-[550px] lg:ml-auto">
              {/* Soft backing shape */}
              <div
                aria-hidden="true"
                className="absolute inset-x-5 top-7 bottom-[-12px] rounded-[34px] bg-[#DDE6D9]"
              />

              <div className="relative overflow-hidden rounded-[30px] border border-white/80 bg-white p-5 shadow-[0_28px_70px_rgba(38,63,49,0.14)] sm:p-7">
                {/* Product header */}
                <div className="flex items-start justify-between border-b border-[#E3E8E0] pb-5">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C65D3C]" />

                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7D887E]">
                        Your journey
                      </p>
                    </div>

                    <h2 className="mt-2 text-[1.35rem] font-semibold tracking-[-0.025em] text-[#263F31] sm:text-2xl">
                      A connected experience
                    </h2>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EEF2E6]">
                    <Leaf className="h-5 w-5 text-[#4D6A50]" />
                  </div>
                </div>

                {/* Journey */}
                <div className="relative mt-6">
                  {/* Connecting line */}
                  <div
                    aria-hidden="true"
                    className="absolute left-[23px] top-7 bottom-7 w-px bg-[#DCE4D9]"
                  />

                  <div className="space-y-3">
                    {journeyItems.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.number}
                          className="group relative flex items-center gap-4 rounded-2xl border border-[#E2E7DF] bg-[#FAFBF8] p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C8D6C5] hover:bg-white hover:shadow-[0_10px_25px_rgba(38,63,49,0.06)]"
                        >
                          {/* Icon */}
                          <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF2E6] text-[#4D6A50] transition-colors group-hover:bg-[#E3ECDC]">
                            <Icon className="h-[18px] w-[18px]" />
                          </div>

                          {/* Copy */}
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-3">
                              <h3 className="text-sm font-semibold text-[#263F31]">
                                {item.label}
                              </h3>

                              <span className="text-[9px] font-bold tracking-[0.12em] text-[#A0AAA0]">
                                {item.number}
                              </span>
                            </div>

                            <p className="mt-1 text-xs leading-5 text-[#89938A]">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom message */}
                <div className="mt-4 overflow-hidden rounded-2xl bg-[#263F31]">
                  <div className="flex items-center justify-between gap-5 px-5 py-4">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#AFC0AF]">
                        Keep moving
                      </p>

                      <p className="mt-1 text-sm font-medium text-white">
                        Small steps become a journey.
                      </p>
                    </div>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Tiny footer */}
                <div className="mt-4 flex items-center justify-between px-1">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#A0AAA0]">
                    Niramaya
                  </span>

                  <span className="text-[9px] text-[#A0AAA0]">
                    Personal · Practical · Connected
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* BOTTOM JOURNEY SUMMARY                                    */}
          {/* ======================================================== */}

          <div className="mt-10 hidden border-t border-[#D5DED3] pt-5 lg:grid lg:grid-cols-3">
            {journeyItems.map((item, index) => (
              <div
                key={item.number}
                className={[
                  "flex items-center gap-3",
                  index !== 0 ? "border-l border-[#D5DED3] pl-8" : "",
                ].join(" ")}
              >
                <span className="text-[10px] font-bold tracking-[0.14em] text-[#A0AAA0]">
                  {item.number}
                </span>

                <span className="text-xs font-semibold text-[#4D6A50]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
