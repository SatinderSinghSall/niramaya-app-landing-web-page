import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";

export default function AboutCTA() {
  return (
    <section className="bg-[#EEF2E6] py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-8 border border-[#DDE3D9] bg-white p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4D6A50]">
              Continue exploring
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#263F31] sm:text-4xl">
              See what the Niramaya experience brings together.
            </h2>
          </div>

          <Link
            href="/app"
            className="group inline-flex shrink-0 items-center justify-center gap-2 bg-[#4D6A50] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#3F5942]"
          >
            Explore the app
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
