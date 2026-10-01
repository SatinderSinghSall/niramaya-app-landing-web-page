import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf } from "lucide-react";
import Container from "@/components/common/Container";

import screen1 from "@/assets/images/app-screenshots/Screen-1.jpg";
import screen10 from "@/assets/images/app-screenshots/Screen-15.jpg";
import screen18 from "@/assets/images/app-screenshots/Screen-28.jpg";

const appScreens = [
  {
    src: screen1,
    alt: "Niramaya mobile app wellness experience",
  },
  {
    src: screen10,
    alt: "Niramaya mobile app goals and wellness experience",
  },
  {
    src: screen18,
    alt: "Niramaya mobile app wellness discovery experience",
  },
];

const pillars = [
  {
    number: "01",
    title: "Understand yourself",
    text: "Build a personal wellness profile around your health, lifestyle and preferences.",
  },
  {
    number: "02",
    title: "Work toward your goals",
    text: "Set meaningful wellness goals and follow your progress over time.",
  },
  {
    number: "03",
    title: "Explore what fits you",
    text: "Discover wellness content, Yoga, Ayurveda and consultation experiences.",
  },
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#DCE3D9] bg-[#EEF2E6]">
      {/* ============================================================ */}
      {/* SUBTLE BACKGROUND DETAIL                                    */}
      {/* ============================================================ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full border border-[#4D6A50]/[0.07]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-[-180px] h-[520px] w-[520px] rounded-full border border-[#4D6A50]/[0.06]"
      />

      <Container>
        <div className="relative py-12 sm:py-14 lg:py-16">
          {/* ======================================================== */}
          {/* INTRO                                                     */}
          {/* ======================================================== */}

          <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-20">
            {/* LEFT */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2.5 border border-[#C8D5C5] bg-white/65 px-3.5 py-2">
                <Leaf
                  className="h-3.5 w-3.5 text-[#4D6A50]"
                  strokeWidth={1.7}
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4D6A50]">
                  About Niramaya
                </span>
              </div>

              <h1 className="mt-6 max-w-2xl text-[3.15rem] font-semibold leading-[0.96] tracking-[-0.05em] text-[#263F31] sm:text-[4rem] lg:text-[4.55rem] xl:text-[4.9rem]">
                A personal approach to
                <span className="block text-[#4D6A50]">
                  everyday wellbeing.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#66736A] sm:text-base">
                Niramaya is a connected wellness experience that brings your
                personal information, goals, progress and wellness discovery
                together in one place.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-6 text-[#7D887F]">
                From understanding your own wellness context to exploring Yoga,
                Ayurveda and professional consultation, Niramaya is designed
                around the way your journey develops over time.
              </p>

              {/* Actions */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/how-it-works"
                  className="group inline-flex h-[48px] items-center justify-center gap-3 rounded-full bg-[#263F31] pl-6 pr-2 text-sm font-semibold !text-white shadow-[0_8px_24px_rgba(38,63,49,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3F5942]"
                >
                  <span className="!text-white">See how Niramaya works</span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                    <ArrowRight className="h-4 w-4 !text-white transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </Link>

                <Link
                  href="/features"
                  className="inline-flex h-[48px] items-center justify-center rounded-full border border-[#263F31]/15 bg-white/65 px-6 text-sm font-semibold !text-[#263F31] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#4D6A50]/30 hover:bg-white"
                >
                  <span className="!text-[#263F31]">Explore the features</span>
                </Link>
              </div>
            </div>

            {/* ====================================================== */}
            {/* APP VISUAL                                              */}
            {/* ====================================================== */}

            <div className="relative mx-auto w-full max-w-[590px] lg:justify-self-end">
              {/* Soft base */}
              <div
                aria-hidden="true"
                className="absolute inset-x-8 bottom-0 h-24 rounded-full bg-[#C8D5C5]/40 blur-3xl"
              />

              <div className="relative flex items-end justify-center gap-3 sm:gap-4">
                {/* Left screenshot */}
                <div className="relative hidden w-[30%] translate-y-7 rotate-[-5deg] overflow-hidden rounded-[1.4rem] border-[5px] border-[#263F31] bg-[#263F31] shadow-[0_24px_50px_rgba(38,63,49,0.18)] sm:block">
                  <div className="relative aspect-[9/18.5]">
                    <Image
                      src={appScreens[0].src}
                      alt={appScreens[0].alt}
                      fill
                      sizes="180px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Main screenshot */}
                <div className="relative z-10 w-[38%] overflow-hidden rounded-[1.7rem] border-[6px] border-[#263F31] bg-[#263F31] shadow-[0_30px_70px_rgba(38,63,49,0.22)]">
                  <div className="relative aspect-[9/18.5]">
                    <Image
                      src={appScreens[1].src}
                      alt={appScreens[1].alt}
                      fill
                      priority
                      sizes="240px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Right screenshot */}
                <div className="relative w-[30%] translate-y-10 rotate-[5deg] overflow-hidden rounded-[1.4rem] border-[5px] border-[#263F31] bg-[#263F31] shadow-[0_24px_50px_rgba(38,63,49,0.18)]">
                  <div className="relative aspect-[9/18.5]">
                    <Image
                      src={appScreens[2].src}
                      alt={appScreens[2].alt}
                      fill
                      sizes="180px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="relative z-20 mx-auto mt-7 flex w-fit items-center gap-2 border border-[#D0DCCB] bg-white/75 px-4 py-2 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C65D3C]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#66736A]">
                  One connected wellness experience
                </span>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* THREE PILLARS                                             */}
          {/* ======================================================== */}

          <div className="mt-14 border-t border-[#D3DED0] pt-7 lg:mt-16">
            <div className="grid gap-7 md:grid-cols-3 md:gap-0">
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.number}
                  className={[
                    "relative",
                    index > 0
                      ? "border-t border-[#D3DED0] pt-7 md:border-l md:border-t-0 md:pl-8 md:pt-0"
                      : "",
                  ].join(" ")}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold tracking-[0.16em] text-[#8A958B]">
                      {pillar.number}
                    </span>

                    <span className="h-px w-7 bg-[#C7D3C4]" />
                  </div>

                  <h2 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-[#263F31]">
                    {pillar.title}
                  </h2>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-[#758078]">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
