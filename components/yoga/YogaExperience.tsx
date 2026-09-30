import { ArrowRight, Bookmark, Search, Target } from "lucide-react";
import Container from "@/components/common/Container";

export default function YogaExperience() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="overflow-hidden rounded-[2.25rem] bg-[#263F31] text-white">
          <div className="grid lg:grid-cols-[1fr_0.9fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8C9B3]">
                Inside the experience
              </span>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Discover.
                <span className="block text-[#B8C9B3]">Save. Return.</span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                Yoga content can be explored through the dedicated module and
                wider wellness discovery experience.
              </p>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-3 lg:grid-cols-1">
              {[
                {
                  icon: Search,
                  title: "Discover",
                },
                {
                  icon: Bookmark,
                  title: "Favorites",
                },
                {
                  icon: Target,
                  title: "Goal-oriented",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-5 bg-[#263F31] p-7 transition-colors hover:bg-white/[0.04] sm:p-8 lg:p-10"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                      <Icon className="h-5 w-5 text-[#B8C9B3]" />
                    </div>

                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-xs text-white/40">
                        Part of the Yoga discovery experience.
                      </p>
                    </div>

                    <ArrowRight className="ml-auto h-4 w-4 text-white/20" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
