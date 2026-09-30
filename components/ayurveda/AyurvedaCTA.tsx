import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import Container from "@/components/common/Container";

export default function AyurvedaCTA() {
  return (
    <section className="bg-[#F4F1E8] py-20 sm:py-24">
      <Container>
        <div className="rounded-[2rem] border border-[#E3DFD3] bg-white px-7 py-12 sm:px-12 sm:py-14 lg:px-16">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F1EEE3]">
                <Leaf className="h-5 w-5 text-[#716A4F]" />
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-[#30372D] sm:text-4xl">
                Explore Ayurveda with Niramaya.
              </h2>

              <p className="mt-4 text-sm leading-6 text-[#6F746B]">
                Discover content, recommendations and consultation workflows
                within the app.
              </p>
            </div>

            <Link
              href="/app"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#30372D] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4D6A50] hover:shadow-xl"
            >
              Explore the app
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
