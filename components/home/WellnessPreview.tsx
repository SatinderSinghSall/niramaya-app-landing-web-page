import Link from "next/link";
import Container from "@/components/common/Container";
import {
  ArrowRight,
  HeartPulse,
  Brain,
  Leaf,
  Apple,
  Moon,
  Activity,
} from "lucide-react";

const areas = [
  {
    name: "Physical wellbeing",
    icon: HeartPulse,
  },
  {
    name: "Mental wellbeing",
    icon: Brain,
  },
  {
    name: "Lifestyle",
    icon: Leaf,
  },
  {
    name: "Nutrition",
    icon: Apple,
  },
  {
    name: "Sleep",
    icon: Moon,
  },
  {
    name: "Movement",
    icon: Activity,
  },
];

export default function WellnessPreview() {
  return (
    <section className="overflow-hidden bg-[#203D30] text-white">
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
            {/* IMAGE */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[28px]">
                <img
                  src="https://images.pexels.com/photos/32848109/pexels-photo-32848109.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Woman practicing yoga outdoors in nature"
                  className="h-[460px] w-full object-cover object-center sm:h-[560px] lg:h-[590px]"
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#203D30]/55 via-transparent to-transparent" />

                {/* IMAGE LABEL */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:bottom-6 sm:left-6 sm:right-6">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                      Everyday wellbeing
                    </p>

                    <p className="mt-1 text-sm font-medium text-white">
                      Find what feels right for you.
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm">
                    <Leaf size={17} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* SMALL FLOATING DETAIL */}
              <div className="absolute -bottom-5 -right-3 hidden rounded-2xl border border-white/10 bg-[#294A3A] px-5 py-4 shadow-[0_15px_35px_rgba(0,0,0,0.15)] sm:block lg:-right-7">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#AFC0B3]">
                  A broader view
                </p>

                <p className="mt-1 text-sm font-medium text-white">
                  Body · Mind · Lifestyle
                </p>
              </div>
            </div>

            {/* CONTENT */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#A9BDAE] sm:text-[11px]">
                Wellness
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-white sm:text-5xl lg:text-[3.7rem]">
                Wellness is more
                <br />
                than one thing.
              </h2>

              <p className="mt-6 max-w-lg text-[15px] leading-7 text-[#B9C7BE] sm:text-[16px]">
                Niramaya takes a broader view of everyday wellbeing, helping you
                explore the areas that matter to you — from how you move and
                sleep to how you feel and live.
              </p>

              {/* AREAS */}
              <div className="mt-9 border-t border-white/10">
                {areas.map((area, index) => {
                  const Icon = area.icon;

                  return (
                    <div
                      key={area.name}
                      className="group flex items-center justify-between border-b border-white/10 py-4 transition-colors duration-300 hover:bg-white/[0.03] sm:py-[17px]"
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#B8C9BC] transition-all duration-300 group-hover:border-[#9DB3A3] group-hover:bg-white/[0.08] group-hover:text-white">
                          <Icon
                            size={16}
                            strokeWidth={1.5}
                            aria-hidden="true"
                          />
                        </span>

                        <span className="text-sm font-medium text-[#E9EEE9]">
                          {area.name}
                        </span>
                      </div>

                      <span className="text-[10px] font-medium tracking-[0.14em] text-[#718A7B]">
                        0{index + 1}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-9">
                <Link
                  href="/wellness"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold !text-[#203D30] shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F4F6F1] hover:shadow-[0_12px_28px_rgba(0,0,0,0.16)]"
                >
                  <span>Explore wellness</span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#203D30] text-white transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
