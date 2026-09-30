import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import Container from "@/components/common/Container";

type LegalHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
};

export default function LegalHeader({
  eyebrow,
  title,
  description,
  updated,
}: LegalHeaderProps) {
  return (
    <section className="border-b border-[#E3E7DF] bg-[#F7F8F4]">
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-[#6D796F] transition hover:text-[#263F31]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Niramaya
          </Link>

          <div className="flex max-w-4xl flex-col gap-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-[#D7DFD2] bg-white">
                <ShieldCheck className="h-5 w-5 text-[#4D6A50]" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4D6A50]">
                {eyebrow}
              </span>
            </div>

            <h1 className="text-5xl font-semibold tracking-[-0.045em] text-[#263F31] sm:text-6xl">
              {title}
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-[#6D796F]">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#DDE3D9] pt-5 text-sm text-[#929B92]">
              <span>
                Last updated:{" "}
                <span className="font-medium text-[#6D796F]">{updated}</span>
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-[#AAB2A9] sm:block" />

              <span>Niramaya</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
