import Link from "next/link";
import Container from "@/components/common/Container";

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="border border-[#C9D5C6] bg-[#EEF2E6] px-6 py-16 text-center sm:px-10 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#4D6A50]">
            Start your journey
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-[#263F31] sm:text-4xl lg:text-5xl">
            Better wellness starts with understanding yourself.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#6D796F]">
            Discover Niramaya and take a more intentional approach to your
            everyday wellbeing.
          </p>

          <div className="mt-8">
            <Link
              href="/app"
              className="inline-flex items-center justify-center rounded-lg bg-[#4D6A50] px-7 py-3.5 text-sm font-medium text-white hover:bg-[#3F5942]"
            >
              Explore Niramaya
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
