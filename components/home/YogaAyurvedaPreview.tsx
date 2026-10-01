import Link from "next/link";
import Container from "@/components/common/Container";
import { ArrowRight, ArrowUpRight, Leaf, Sparkles } from "lucide-react";

const practices = [
  {
    label: "Yoga",
    title: "Movement, breath and mindful practice.",
    description:
      "Explore Yoga practices and information that can become part of your everyday wellness routine.",
    href: "/yoga",
    image:
      "https://images.pexels.com/photos/32848109/pexels-photo-32848109.jpeg?auto=compress&cs=tinysrgb&w=1400",
    icon: Sparkles,
    imagePosition: "object-center",
    number: "01",
  },
  {
    label: "Ayurveda",
    title: "Traditional wisdom for everyday wellbeing.",
    description:
      "Discover Ayurveda-focused information and recommendations as another part of your broader wellness exploration.",
    href: "/ayurveda",
    image:
      "https://enicahealth.com/cdn/shop/files/remove_circle__or_202604141536.jpg?v=1776163608&width=1200",
    icon: Leaf,
    imagePosition: "object-center",
    number: "02",
  },
];

export default function YogaAyurvedaPreview() {
  return (
    <section className="border-b border-[#E3E7DF] bg-[#F8F8F3]">
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          {/* HEADER */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#456354] sm:text-[11px]">
              Explore deeper
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-[#203D30] sm:text-5xl lg:text-[3.7rem]">
              Ancient practices.
              <br />
              Everyday wellbeing.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#6D796F] sm:text-[16px]">
              Discover thoughtful ways to bring movement, mindfulness and
              traditional wellness practices into your everyday life.
            </p>
          </div>

          {/* CARDS */}
          <div className="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-2">
            {practices.map((practice) => {
              const Icon = practice.icon;

              return (
                <article
                  key={practice.label}
                  className="group overflow-hidden rounded-[24px] border border-[#DDE4DA] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#C9D6C8] hover:shadow-[0_18px_45px_rgba(32,61,48,0.08)]"
                >
                  {/* IMAGE */}
                  <div className="relative h-[280px] overflow-hidden sm:h-[330px]">
                    <img
                      src={practice.image}
                      alt={`${practice.label} wellness`}
                      className={`h-full w-full object-cover ${practice.imagePosition} transition-transform duration-700 ease-out group-hover:scale-[1.035]`}
                    />

                    {/* SOFT IMAGE SCRIM */}
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/25 to-transparent" />

                    {/* NUMBER */}
                    <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/85 text-[11px] font-semibold text-[#203D30] backdrop-blur-sm">
                      {practice.number}
                    </div>

                    {/* IMAGE LABEL */}
                    <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#203D30] backdrop-blur-sm">
                      <Icon size={13} strokeWidth={1.7} />
                      {practice.label}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7 sm:p-8 lg:p-9">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B86F52]">
                          {practice.label}
                        </p>

                        <h3 className="mt-3 max-w-[520px] text-[25px] font-semibold leading-[1.14] tracking-[-0.03em] text-[#203D30] sm:text-[28px]">
                          {practice.title}
                        </h3>
                      </div>

                      <div className="hidden shrink-0 sm:flex h-10 w-10 items-center justify-center rounded-full bg-[#F0F3ED] text-[#456354] transition-all duration-300 group-hover:bg-[#203D30] group-hover:text-white">
                        <ArrowUpRight
                          size={17}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    <p className="mt-4 max-w-xl text-sm leading-6 text-[#6D796F]">
                      {practice.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-7 border-t border-[#E7EBE4] pt-5">
                      <Link
                        href={practice.href}
                        className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[#203D30]"
                      >
                        <span className="border-b border-[#203D30] pb-0.5 transition-colors group-hover/link:border-[#B86F52] group-hover/link:text-[#456354]">
                          Explore {practice.label}
                        </span>

                        <ArrowRight
                          size={15}
                          strokeWidth={1.8}
                          className="transition-transform duration-200 group-hover/link:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* SMALL SUPPORTING LINE */}
          <div className="mt-10 flex items-center justify-center gap-3 text-center">
            <span className="h-px w-8 bg-[#D6DED3]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#8A968C]">
              Find practices that fit your journey
            </p>

            <span className="h-px w-8 bg-[#D6DED3]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
