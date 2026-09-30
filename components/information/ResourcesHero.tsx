import { ArrowDown, BookOpen, Search } from "lucide-react";
import Container from "@/components/common/Container";

export default function ResourcesHero() {
  return (
    <section className="bg-[#F7F8F4]">
      <Container>
        <div className="grid min-h-[500px] items-center gap-12 py-20 lg:grid-cols-[1fr_0.65fr] lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 border border-[#DDE3D9] bg-white px-4 py-2 text-sm font-medium text-[#4D6A50]">
              <BookOpen className="h-4 w-4" />
              Niramaya Resources
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.045em] text-[#263F31] sm:text-6xl">
              Explore wellness topics with clarity.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6D796F]">
              Explore the main wellness areas represented throughout the
              Niramaya experience, from Yoga and Ayurveda to goals, progress and
              getting started.
            </p>

            <div className="mt-9 flex max-w-xl items-center gap-3 border border-[#DDE3D9] bg-white px-4 py-3.5">
              <Search className="h-5 w-5 text-[#929B92]" />

              <span className="text-sm text-[#929B92]">Search resources</span>
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-end">
            <div className="relative h-72 w-72 border border-[#DDE3D9] bg-white p-6">
              <div className="flex h-full flex-col justify-between border border-[#E3E7DF] bg-[#EEF2E6] p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4D6A50]">
                    Explore
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#263F31]">
                    Learn.
                    <br />
                    Explore.
                    <br />
                    Understand.
                  </h2>
                </div>

                <ArrowDown className="h-5 w-5 text-[#4D6A50]" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
