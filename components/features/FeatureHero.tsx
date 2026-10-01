import Image from "next/image";
import Link from "next/link";

import Container from "@/components/common/Container";

import screen1 from "@/assets/images/app-screenshots/Screen-1.jpg";
import screen10 from "@/assets/images/app-screenshots/Screen-10.jpg";
import screen18 from "@/assets/images/app-screenshots/Screen-18.jpg";

const features = [
  {
    number: "01",
    title: "Know yourself",
    text: "Build a personal wellness profile.",
  },
  {
    number: "02",
    title: "Set your goals",
    text: "Turn intentions into meaningful goals.",
  },
  {
    number: "03",
    title: "Keep progressing",
    text: "Track your journey over time.",
  },
];

const appScreens = [screen1, screen10, screen18];

export default function FeatureHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#DCE3D9] bg-[#EEF2E6]">
      {/* Very subtle background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-24 h-80 w-80 rounded-full border border-[#D5DED2]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-[-180px] h-96 w-96 rounded-full border border-[#D5DED2]"
      />

      <Container>
        <div className="relative py-10 sm:py-12 lg:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            {/* ========================================================= */}
            {/* LEFT CONTENT */}
            {/* ========================================================= */}

            <div className="relative z-10 max-w-2xl">
              {/* Eyebrow */}
              <div className="mb-5 inline-flex items-center gap-2 border border-[#C8D5C5] bg-[#F8FAF5] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#4D6A50]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C65D3C]" />
                The Niramaya experience
              </div>

              {/* Heading */}
              <h1 className="max-w-xl text-[3.15rem] font-semibold leading-[0.98] tracking-[-0.045em] text-[#263F31] sm:text-6xl lg:text-[4.5rem]">
                Wellness that{" "}
                <span className="text-[#4D6A50]">starts with you.</span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#66746A] sm:text-base">
                Understand your wellbeing, set meaningful goals, discover
                practices that fit your lifestyle, and keep track of your
                journey — all in one place.
              </p>

              {/* ======================================================= */}
              {/* BUTTONS */}
              {/* ======================================================= */}

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/app"
                  className="group inline-flex h-[50px] items-center justify-center gap-3 rounded-full bg-[#315440] pl-6 pr-2 text-sm font-semibold !text-white shadow-[0_8px_24px_rgba(49,84,64,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#263F31] hover:shadow-[0_12px_28px_rgba(49,84,64,0.24)]"
                >
                  <span className="!text-white">Explore Niramaya</span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 !text-white transition-all duration-200 group-hover:translate-x-0.5 group-hover:bg-white/20">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-4 w-4 !text-white"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 10h11M10.5 5.5 15 10l-4.5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>

                <Link
                  href="/how-it-works"
                  className="group inline-flex h-[50px] items-center justify-center gap-2 rounded-full border border-[#C6D2C3] bg-[#F8FAF5] px-6 text-sm font-semibold text-[#263F31] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#315440] hover:bg-white"
                >
                  <span>See how it works</span>

                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 10h11M10.5 5.5 15 10l-4.5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              {/* ======================================================= */}
              {/* PEOPLE / TRUST LINE */}
              {/* ======================================================= */}

              <div className="mt-7 flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt=""
                    className="h-7 w-7 rounded-full border-2 border-[#EEF2E6] object-cover"
                  />

                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt=""
                    className="h-7 w-7 rounded-full border-2 border-[#EEF2E6] object-cover"
                  />

                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt=""
                    className="h-7 w-7 rounded-full border-2 border-[#EEF2E6] object-cover"
                  />

                  <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#EEF2E6] bg-[#D9E3D5] text-[9px] font-bold text-[#4D6A50]">
                    +
                  </span>
                </div>

                <p className="text-xs leading-5 text-[#718074]">
                  One connected place for your everyday wellness journey.
                </p>
              </div>
            </div>

            {/* ========================================================= */}
            {/* APP SHOWCASE */}
            {/* ========================================================= */}

            <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
              {/* Decorative circle */}
              <div
                aria-hidden="true"
                className="absolute -right-5 -top-8 h-24 w-24 rounded-full border border-[#CBD8C8]"
              />

              {/* Screenshots */}
              <div className="relative flex h-[390px] items-center justify-center sm:h-[450px]">
                {/* Back screenshot */}
                <div className="absolute left-[2%] top-[45px] w-[31%] rotate-[-8deg] overflow-hidden rounded-[24px] border-[5px] border-[#263F31] bg-[#263F31] shadow-[0_24px_50px_rgba(38,63,49,0.18)] transition-transform duration-500 hover:-translate-y-2 sm:rounded-[28px] sm:border-[6px]">
                  <div className="aspect-[9/18.5] overflow-hidden rounded-[18px] bg-white sm:rounded-[22px]">
                    <Image
                      src={appScreens[0]}
                      alt="Niramaya mobile app"
                      fill
                      className="!relative h-full w-full object-cover"
                      sizes="(max-width: 640px) 30vw, 170px"
                    />
                  </div>
                </div>

                {/* Main screenshot */}
                <div className="relative z-20 w-[36%] overflow-hidden rounded-[26px] border-[6px] border-[#263F31] bg-[#263F31] shadow-[0_30px_70px_rgba(38,63,49,0.25)] transition-transform duration-500 hover:-translate-y-2 sm:rounded-[32px]">
                  <div className="aspect-[9/18.5] overflow-hidden rounded-[20px] bg-white sm:rounded-[25px]">
                    <Image
                      src={appScreens[1]}
                      alt="Niramaya mobile app wellness experience"
                      fill
                      className="!relative h-full w-full object-cover"
                      sizes="(max-width: 640px) 36vw, 200px"
                    />
                  </div>
                </div>

                {/* Front screenshot */}
                <div className="absolute right-[2%] top-[60px] z-10 w-[31%] rotate-[8deg] overflow-hidden rounded-[24px] border-[5px] border-[#263F31] bg-[#263F31] shadow-[0_24px_50px_rgba(38,63,49,0.18)] transition-transform duration-500 hover:-translate-y-2 sm:rounded-[28px] sm:border-[6px]">
                  <div className="aspect-[9/18.5] overflow-hidden rounded-[18px] bg-white sm:rounded-[22px]">
                    <Image
                      src={appScreens[2]}
                      alt="Niramaya mobile app"
                      fill
                      className="!relative h-full w-full object-cover"
                      sizes="(max-width: 640px) 30vw, 170px"
                    />
                  </div>
                </div>

                {/* Small floating label */}
                <div className="absolute bottom-0 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#D6DED3] bg-white px-4 py-2.5 text-[11px] font-semibold text-[#263F31] shadow-[0_12px_30px_rgba(38,63,49,0.12)]">
                  Your wellness journey, in one place
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================== */}
          {/* FEATURE STRIP */}
          {/* =========================================================== */}

          <div className="mt-10 border-t border-[#D5DED2] pt-6 lg:mt-12">
            <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
              {features.map((feature) => (
                <div key={feature.number} className="group flex gap-4">
                  <span className="pt-0.5 text-[10px] font-bold tracking-[0.16em] text-[#A0AAA0]">
                    {feature.number}
                  </span>

                  <div>
                    <h2 className="text-sm font-semibold text-[#263F31]">
                      {feature.title}
                    </h2>

                    <p className="mt-1 text-xs leading-5 text-[#7A857B]">
                      {feature.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
