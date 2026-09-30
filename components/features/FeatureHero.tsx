import Link from "next/link";
import Container from "@/components/common/Container";

export default function FeatureHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#DCE3D9] bg-[#EEF2E6]">
      <Container>
        <div className="relative py-20 sm:py-24 lg:py-32">
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.65fr]">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 border border-[#C8D5C5] bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#4D6A50]">
                The Niramaya experience
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-tight text-[#263F31] sm:text-6xl lg:text-[5.25rem]">
                Everything you need to build a more intentional wellness
                journey.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-[#6D796F] sm:text-lg">
                From understanding your personal wellness context to setting
                goals, tracking progress and exploring Yoga and Ayurveda,
                Niramaya brings your everyday wellness experience together.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/app"
                  className="inline-flex items-center justify-center rounded-lg bg-[#4D6A50] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#3F5942]"
                >
                  Explore the app
                </Link>

                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center rounded-lg border border-[#CBD7C8] bg-white px-6 py-3.5 text-sm font-medium text-[#263F31] transition-colors hover:border-[#4D6A50]"
                >
                  See how it works
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative ml-auto max-w-sm">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full border border-[#C7D4C4]" />

                <div className="relative border border-[#D3DDD0] bg-white p-7 shadow-[0_25px_70px_rgba(38,63,49,0.10)]">
                  <div className="flex items-center justify-between border-b border-[#E5EAE2] pb-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4D6A50]">
                      Niramaya
                    </span>

                    <span className="h-2 w-2 rounded-full bg-[#4D6A50]" />
                  </div>

                  <div className="py-8">
                    <p className="text-xs text-[#929B92]">
                      Your wellness journey
                    </p>

                    <p className="mt-2 text-3xl font-semibold text-[#263F31]">
                      30
                    </p>

                    <p className="mt-1 text-sm text-[#6D796F]">
                      capabilities across your experience
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-[#EEF2E6] p-4">
                      <p className="text-xs text-[#929B92]">Goals</p>
                      <p className="mt-1 text-sm font-semibold text-[#263F31]">
                        Track
                      </p>
                    </div>

                    <div className="bg-[#EEF2E6] p-4">
                      <p className="text-xs text-[#929B92]">Wellness</p>
                      <p className="mt-1 text-sm font-semibold text-[#263F31]">
                        Explore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 border-t border-[#D6DED3] pt-8 sm:grid-cols-4">
            <div>
              <p className="text-2xl font-semibold text-[#263F31]">30</p>
              <p className="mt-1 text-xs text-[#6D796F]">capabilities</p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-[#263F31]">6</p>
              <p className="mt-1 text-xs text-[#6D796F]">experience areas</p>
            </div>

            <div className="mt-5 sm:mt-0">
              <p className="text-2xl font-semibold text-[#263F31]">1</p>
              <p className="mt-1 text-xs text-[#6D796F]">connected journey</p>
            </div>

            <div className="mt-5 sm:mt-0">
              <p className="text-2xl font-semibold text-[#263F31]">24/7</p>
              <p className="mt-1 text-xs text-[#6D796F]">
                access to your experience
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
