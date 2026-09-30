import type { ReactNode } from "react";

type LegalSectionProps = {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
};

export default function LegalSection({
  id,
  number,
  title,
  children,
}: LegalSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-[#E3E7DF] py-10 first:pt-0 last:border-b-0"
    >
      <div className="flex gap-5">
        <span className="mt-1 shrink-0 text-xs font-semibold tracking-[0.12em] text-[#A0A8A0]">
          {number}
        </span>

        <div className="min-w-0">
          <h2 className="text-2xl font-semibold tracking-[-0.025em] text-[#263F31] sm:text-3xl">
            {title}
          </h2>

          <div className="mt-5 space-y-4 text-[15px] leading-8 text-[#626D64]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
