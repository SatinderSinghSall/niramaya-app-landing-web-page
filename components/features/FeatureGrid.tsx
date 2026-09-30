import Container from "@/components/common/Container";
import FeatureCard from "./FeatureCard";
import { featureGroups } from "@/data/features";

export default function FeatureGrid() {
  return (
    <div>
      {featureGroups.map((group, groupIndex) => {
        const dark = group.accent === "dark";

        return (
          <section
            key={group.id}
            className={dark ? "bg-[#263F31]" : "bg-[#EEF2E6]"}
          >
            <Container>
              <div className="py-24 sm:py-28 lg:py-32">
                <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                  <div className="lg:sticky lg:top-28 lg:self-start">
                    <p
                      className={[
                        "text-xs font-semibold uppercase tracking-[0.16em]",
                        dark ? "text-[#BFD0BA]" : "text-[#4D6A50]",
                      ].join(" ")}
                    >
                      {group.eyebrow}
                    </p>

                    <h2
                      className={[
                        "mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl",
                        dark ? "text-white" : "text-[#263F31]",
                      ].join(" ")}
                    >
                      {group.title}
                    </h2>

                    <p
                      className={[
                        "mt-5 max-w-md text-sm leading-7 sm:text-base",
                        dark ? "text-[#C1CBC0]" : "text-[#6D796F]",
                      ].join(" ")}
                    >
                      {group.description}
                    </p>

                    <div
                      className={[
                        "mt-8 h-px w-20",
                        dark ? "bg-white/20" : "bg-[#BFCDBB]",
                      ].join(" ")}
                    />

                    <p
                      className={[
                        "mt-4 text-xs",
                        dark ? "text-[#AEBBAE]" : "text-[#929B92]",
                      ].join(" ")}
                    >
                      {String(groupIndex + 1).padStart(2, "0")} / 06
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {group.features.map((feature) => (
                      <FeatureCard
                        key={feature.number}
                        feature={feature}
                        dark={dark}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </section>
        );
      })}
    </div>
  );
}
