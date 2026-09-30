import { HelpCircle, Search } from "lucide-react";
import Container from "@/components/common/Container";

export default function FAQHero() {
  return (
    <section className="bg-[#263F31] text-white">
      <Container>
        <div className="py-20 text-center sm:py-24">
          <div className="mx-auto inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <HelpCircle className="h-4 w-4" />
            Help Center
          </div>

          <h1 className="mx-auto mt-7 max-w-4xl text-5xl font-semibold tracking-[-0.045em] sm:text-6xl">
            Frequently asked questions.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
            Find clear answers about Niramaya, the wellness experience,
            onboarding, goals, progress and other platform features.
          </p>

          <div className="mx-auto mt-9 flex max-w-2xl items-center gap-3 bg-white px-5 py-4 text-left">
            <Search className="h-5 w-5 shrink-0 text-[#929B92]" />

            <span className="text-sm text-[#929B92]">Search a question</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
