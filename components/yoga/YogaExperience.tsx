import { ArrowUpRight, Bookmark, Search, Target } from "lucide-react";
import Container from "@/components/common/Container";

const experiences = [
  {
    icon: Search,
    title: "Discover",
    text: "Explore Yoga practices and wellness content that interests you.",
  },
  {
    icon: Bookmark,
    title: "Favorites",
    text: "Save practices you want to revisit whenever you need them.",
  },
  {
    icon: Target,
    title: "Goal-oriented",
    text: "Keep your exploration connected to the wellness goals you set.",
  },
];

export default function YogaExperience() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-[#314B3B] bg-[#263F31] text-white shadow-[0_20px_60px_rgba(38,63,49,0.08)]">
          {/* Subtle background circles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-36 h-[420px] w-[420px] rounded-full border border-white/[0.055]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-48 -left-32 h-[360px] w-[360px] rounded-full border border-white/[0.04]"
          />

          <div className="relative grid lg:grid-cols-[1fr_0.92fr]">
            {/* ====================================================== */}
            {/* LEFT                                                     */}
            {/* ====================================================== */}

            <div className="flex flex-col justify-center border-b border-white/[0.08] p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12 xl:p-14">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#B8C9B3]/60" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8C9B3]">
                  Inside the experience
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-6 max-w-[470px] text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.05em] sm:text-[3.6rem]">
                Discover.
                <span className="block text-[#B8C9B3]">Save. Return.</span>
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-[500px] text-[14px] leading-7 text-white/55 sm:text-[15px]">
                Yoga content can be explored through the dedicated module and
                wider wellness discovery experience.
              </p>

              {/* Small footer detail */}
              <div className="mt-9 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C65D3C]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/30">
                  Explore · Save · Revisit
                </span>
              </div>
            </div>

            {/* ====================================================== */}
            {/* RIGHT                                                    */}
            {/* ====================================================== */}

            <div className="relative">
              {experiences.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={[
                      "group relative flex items-center gap-5 px-7 py-7 transition-colors duration-200 sm:px-9 sm:py-8 lg:px-10 lg:py-9",
                      index < experiences.length - 1
                        ? "border-b border-white/[0.08]"
                        : "",
                    ].join(" ")}
                  >
                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] border border-white/[0.07] bg-white/[0.07] transition-all duration-200 group-hover:border-[#B8C9B3]/20 group-hover:bg-[#B8C9B3]/10">
                      <Icon
                        className="h-[18px] w-[18px] text-[#B8C9B3]"
                        strokeWidth={1.7}
                      />
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-white sm:text-base">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 max-w-[360px] text-xs leading-5 text-white/38 sm:text-[13px]">
                        {item.text}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.08] text-white/20 transition-all duration-200 group-hover:border-[#B8C9B3]/25 group-hover:bg-[#B8C9B3]/10 group-hover:text-[#B8C9B3]">
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={1.7}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ======================================================== */}
          {/* BOTTOM STRIP                                              */}
          {/* ======================================================== */}

          <div className="relative border-t border-white/[0.08] px-7 py-4 sm:px-9 lg:px-12">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
                Niramaya Yoga
              </span>

              <span className="hidden text-[9px] font-medium uppercase tracking-[0.18em] text-white/20 sm:block">
                Personal · Practical · Connected
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
