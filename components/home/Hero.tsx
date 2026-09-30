import Link from "next/link";
import Container from "@/components/common/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#E3E7DF]">
      <Container>
        <div className="grid min-h-[calc(100vh-72px)] items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#4D6A50]">
              Personalized everyday wellness
            </p>

            <h1 className="text-5xl font-semibold leading-[1.06] tracking-tight text-[#263F31] sm:text-6xl lg:text-[4.5rem]">
              Your journey to better wellness starts here.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#6D796F]">
              Understand your wellbeing, build healthier habits, and discover
              personalized guidance for everyday life with Niramaya.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/app"
                className="inline-flex items-center justify-center rounded-lg bg-[#4D6A50] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#3F5942]"
              >
                Explore Niramaya
              </Link>

              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center rounded-lg border border-[#D7DED5] bg-white px-6 py-3.5 text-sm font-medium text-[#263F31] transition-colors hover:border-[#4D6A50]"
              >
                How It Works
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#6D796F]">
              <span>Personalized wellness</span>
              <span>•</span>
              <span>Goals & progress</span>
              <span>•</span>
              <span>Yoga & Ayurveda</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#DCE3D9] bg-white p-4 shadow-[0_25px_70px_rgba(38,63,49,0.10)]">
              <div className="rounded-[1.5rem] bg-[#EEF2E6] p-8">
                <div className="mx-auto max-w-sm">
                  <div className="mb-8 flex items-center justify-between">
                    <div>
                      <div className="h-2.5 w-24 rounded-full bg-[#4D6A50]" />
                      <div className="mt-2 h-2 w-16 rounded-full bg-[#CBD5C8]" />
                    </div>

                    <div className="h-10 w-10 rounded-full border border-[#D5DDD2] bg-white" />
                  </div>

                  <div className="rounded-2xl border border-[#E0E6DD] bg-white p-6">
                    <p className="text-xs font-medium uppercase tracking-wider text-[#929B92]">
                      Your wellness
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold text-[#263F31]">
                      A little progress matters.
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-[#6D796F]">
                      Keep building simple habits that support your everyday
                      wellbeing.
                    </p>

                    <div className="mt-6 h-2 overflow-hidden rounded-full bg-[#E8ECE5]">
                      <div className="h-full w-[68%] rounded-full bg-[#4D6A50]" />
                    </div>

                    <div className="mt-2 flex justify-between text-xs text-[#929B92]">
                      <span>Weekly progress</span>
                      <span>68%</span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-[#E0E6DD] bg-white p-5">
                      <p className="text-xs text-[#929B92]">Goals</p>
                      <p className="mt-2 text-xl font-semibold text-[#263F31]">
                        04
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#E0E6DD] bg-white p-5">
                      <p className="text-xs text-[#929B92]">Wellness</p>
                      <p className="mt-2 text-xl font-semibold text-[#263F31]">
                        Daily
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
