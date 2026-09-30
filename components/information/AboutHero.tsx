import Link from "next/link";
import { ArrowRight, Leaf, Sparkles, Target } from "lucide-react";
import Container from "@/components/common/Container";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#263F31] text-white">
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#6D8A70]/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#A8B89D]/10 blur-3xl" />
      </div>

      <Container>
        <div className="relative grid min-h-[620px] items-center gap-14 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur-sm">
              <Leaf className="h-4 w-4" />
              About Niramaya
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              A more connected way to approach everyday wellness.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Niramaya brings personal wellness information, healthy goals,
              progress tracking and wellness discovery together in one connected
              mobile experience.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/how-it-works"
                className="group inline-flex items-center justify-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-[#263F31] transition hover:bg-[#EEF2E6]"
              >
                How Niramaya works
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/app"
                className="inline-flex items-center justify-center border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore the app
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="relative border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">
              <div className="border border-white/10 bg-[#F7F8F4] p-5 text-[#263F31]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#929B92]">
                      Niramaya
                    </p>
                    <p className="mt-2 text-xl font-semibold">
                      Your wellness journey
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E5EBDD]">
                    <Leaf className="h-5 w-5 text-[#4D6A50]" />
                  </div>
                </div>

                <div className="mt-7 grid gap-3">
                  <div className="border border-[#E3E7DF] bg-white p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center bg-[#EEF2E6]">
                        <Sparkles className="h-5 w-5 text-[#4D6A50]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Understand</p>
                        <p className="text-xs text-[#929B92]">
                          Build your wellness profile
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-[#E3E7DF] bg-white p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center bg-[#EEF2E6]">
                        <Target className="h-5 w-5 text-[#4D6A50]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">
                          Work toward goals
                        </p>
                        <p className="text-xs text-[#929B92]">
                          Track meaningful progress
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-center text-xs text-white/45">
                Wellness • Balance • You
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
