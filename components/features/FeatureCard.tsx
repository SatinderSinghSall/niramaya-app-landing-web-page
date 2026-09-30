import type { Feature } from "@/data/features";

interface FeatureCardProps {
  feature: Feature;
  dark?: boolean;
}

export default function FeatureCard({
  feature,
  dark = false,
}: FeatureCardProps) {
  return (
    <article
      className={[
        "group relative overflow-hidden border p-7 transition-all duration-300 sm:p-8",
        dark
          ? "border-white/10 bg-white/[0.055] hover:border-white/20 hover:bg-white/[0.08]"
          : "border-[#DCE3D9] bg-white hover:-translate-y-1 hover:border-[#BFCDBB] hover:shadow-[0_18px_45px_rgba(38,63,49,0.07)]",
        feature.highlight ? "min-h-[280px]" : "min-h-[250px]",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={[
            "text-xs font-semibold tracking-[0.14em]",
            dark ? "text-[#BFD0BA]" : "text-[#4D6A50]",
          ].join(" ")}
        >
          {feature.number}
        </span>

        <span
          className={[
            "border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em]",
            dark
              ? "border-white/10 text-[#BFD0BA]"
              : "border-[#DCE3D9] text-[#6D796F]",
          ].join(" ")}
        >
          {feature.category}
        </span>
      </div>

      <div className="mt-10">
        <h3
          className={[
            "text-xl font-semibold tracking-tight sm:text-2xl",
            dark ? "text-white" : "text-[#263F31]",
          ].join(" ")}
        >
          {feature.title}
        </h3>

        <p
          className={[
            "mt-4 text-sm leading-6",
            dark ? "text-[#C1CBC0]" : "text-[#6D796F]",
          ].join(" ")}
        >
          {feature.description}
        </p>
      </div>

      <div
        className={[
          "absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full",
          dark ? "bg-[#AFC2AA]" : "bg-[#4D6A50]",
        ].join(" ")}
      />
    </article>
  );
}
