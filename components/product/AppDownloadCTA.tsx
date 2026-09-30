import Link from "next/link";
import { ArrowRight, Download, Leaf } from "lucide-react";
import Container from "@/components/common/Container";

export default function AppDownloadCTA() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-[#4D6A50] px-7 py-14 text-white sm:px-12 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-40 right-24 h-72 w-72 rounded-full border border-white/5" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Leaf className="h-5 w-5 text-[#DCE8D8]" />
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                Take Niramaya with you
              </p>

              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Your wellness journey starts in the app.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                Explore your profile, goals, progress, Yoga, Ayurveda and
                wellness discovery experience from your mobile device.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {/* Custom CTA — replace href when a real store/download URL exists */}
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#263F31] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EEF2E6] hover:shadow-xl"
              >
                Get Niramaya
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#263F31]/10 transition-transform group-hover:translate-x-1">
                  <Download className="h-4 w-4" />
                </span>
              </Link>

              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                See how it works
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
