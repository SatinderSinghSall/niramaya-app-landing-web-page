import Link from "next/link";
import Container from "@/components/common/Container";

export default function FeatureCTA() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="relative overflow-hidden border border-[#CBD7C8] bg-[#EEF2E6] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <div className="absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full border border-[#CBD7C8]" />

          <div className="relative max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4D6A50]">
              Explore Niramaya
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#263F31] sm:text-4xl lg:text-5xl">
              A wellness experience designed around you.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#6D796F]">
              From your first profile to your goals, progress and wellness
              exploration, Niramaya brings the journey together in one place.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/app"
                className="inline-flex items-center justify-center rounded-lg bg-[#4D6A50] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#3F5942]"
              >
                Discover the app
              </Link>

              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center rounded-lg border border-[#CBD7C8] bg-white px-6 py-3.5 text-sm font-medium text-[#263F31] transition-colors hover:border-[#4D6A50]"
              >
                How it works
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
