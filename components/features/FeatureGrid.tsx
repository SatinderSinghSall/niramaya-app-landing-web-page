import Container from "@/components/common/Container";
import FeatureCard from "./FeatureCard";
import { featureGroups } from "@/data/features";

export default function FeatureGrid() {
  return (
    <div className="bg-[#EEF2E6]">
      {featureGroups.map((group, groupIndex) => {
        const dark = group.accent === "dark";
        const sectionNumber = String(groupIndex + 1).padStart(2, "0");
        const totalSections = String(featureGroups.length).padStart(2, "0");

        return (
          <section
            key={group.id}
            className={[
              "relative isolate overflow-hidden border-b",
              dark
                ? "border-white/[0.08] bg-[#263F31]"
                : "border-[#D7E0D5] bg-[#EEF2E6]",
            ].join(" ")}
          >
            {/* ======================================================= */}
            {/* BACKGROUND DETAIL                                      */}
            {/* ======================================================= */}

            <div
              aria-hidden="true"
              className={[
                "pointer-events-none absolute right-[-180px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border",
                dark ? "border-white/[0.045]" : "border-[#D8E0D5]",
              ].join(" ")}
            />

            <div
              aria-hidden="true"
              className={[
                "pointer-events-none absolute right-[-90px] top-1/2 h-[230px] w-[230px] -translate-y-1/2 rounded-full border",
                dark ? "border-white/[0.04]" : "border-[#DCE4D9]",
              ].join(" ")}
            />

            <Container>
              <div className="relative py-14 sm:py-16 lg:py-20 xl:py-22">
                <div className="grid items-start gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14 xl:gap-20">
                  {/* ================================================= */}
                  {/* LEFT — SECTION INTRO                              */}
                  {/* ================================================= */}

                  <div className="lg:sticky lg:top-28">
                    {/* Section label */}
                    <div className="flex items-center gap-3">
                      <span
                        className={[
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[10px] font-bold tracking-[0.08em]",
                          dark
                            ? "bg-white/[0.08] text-[#C8D5C5]"
                            : "bg-white/70 text-[#4D6A50]",
                        ].join(" ")}
                      >
                        {sectionNumber}
                      </span>

                      <span
                        className={[
                          "h-px w-7",
                          dark ? "bg-white/15" : "bg-[#C6D2C3]",
                        ].join(" ")}
                      />

                      <p
                        className={[
                          "text-[10px] font-bold uppercase tracking-[0.18em]",
                          dark ? "text-[#BFD0BA]" : "text-[#4D6A50]",
                        ].join(" ")}
                      >
                        {group.eyebrow.replace(`${sectionNumber} · `, "")}
                      </p>
                    </div>

                    {/* Heading */}
                    <h2
                      className={[
                        "mt-6 max-w-[520px] text-[2rem] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[2.35rem] lg:text-[2.65rem] xl:text-[2.8rem]",
                        dark ? "text-white" : "text-[#263F31]",
                      ].join(" ")}
                    >
                      {group.title}
                    </h2>

                    {/* Description */}
                    <p
                      className={[
                        "mt-5 max-w-[470px] text-sm leading-7 sm:text-[15px]",
                        dark ? "text-[#C0CBC0]" : "text-[#6D796F]",
                      ].join(" ")}
                    >
                      {group.description}
                    </p>

                    {/* Section progress */}
                    <div className="mt-7 flex items-center gap-3">
                      <div
                        className={[
                          "h-px w-10",
                          dark ? "bg-white/20" : "bg-[#BFCDBB]",
                        ].join(" ")}
                      />

                      <span
                        className={[
                          "text-[10px] font-semibold tracking-[0.16em]",
                          dark ? "text-[#9EAEA0]" : "text-[#929B92]",
                        ].join(" ")}
                      >
                        {sectionNumber} / {totalSections}
                      </span>
                    </div>
                  </div>

                  {/* ================================================= */}
                  {/* RIGHT — FEATURE GRID                               */}
                  {/* ================================================= */}

                  <div className="relative">
                    {/* Small vertical accent */}
                    <div
                      aria-hidden="true"
                      className={[
                        "absolute -left-5 top-1 hidden h-8 w-px lg:block",
                        dark ? "bg-[#78917B]" : "bg-[#AFC0AC]",
                      ].join(" ")}
                    />

                    <div
                      className={[
                        "grid gap-3.5 sm:grid-cols-2",
                        group.features.length === 1 ? "sm:grid-cols-1" : "",
                      ].join(" ")}
                    >
                      {group.features.map((feature, featureIndex) => {
                        const isLast =
                          featureIndex === group.features.length - 1;

                        const oddCount = group.features.length % 2 !== 0;

                        const shouldSpan = oddCount && isLast;

                        return (
                          <div
                            key={feature.number}
                            className={[
                              "min-w-0",
                              shouldSpan ? "sm:col-span-2" : "",
                            ].join(" ")}
                          >
                            <FeatureCard feature={feature} dark={dark} />
                          </div>
                        );
                      })}
                    </div>
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
