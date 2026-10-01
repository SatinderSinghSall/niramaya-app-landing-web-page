import { ArrowDown, Mail } from "lucide-react";
import Container from "@/components/common/Container";

export default function ContactHero() {
  return (
    <section className="border-b border-[#DDE3D9] bg-[#F7F8F4]">
      <Container>
        <div className="py-12 sm:py-14 lg:py-16">
          <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            {/* Main copy */}
            <div>
              <div className="inline-flex items-center gap-2 border border-[#D8E0D5] bg-white px-3 py-1.5">
                <Mail
                  className="h-3.5 w-3.5 text-[#4D6A50]"
                  strokeWidth={1.7}
                />

                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4D6A50]">
                  Contact Niramaya
                </span>
              </div>

              <h1 className="mt-5 max-w-3xl text-[3rem] font-semibold leading-[0.98] tracking-[-0.055em] text-[#263F31] sm:text-[4rem] lg:text-[4.5rem]">
                Let&apos;s start a
                <span className="block text-[#4D6A50]">conversation.</span>
              </h1>
            </div>

            {/* Supporting copy */}
            <div className="max-w-md lg:pb-1">
              <p className="text-sm leading-7 text-[#69766D] sm:text-base">
                Have a question about Niramaya, the application or the website?
                Send us a message and we&apos;ll get you to the right place.
              </p>

              <div className="mt-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7F8A81]">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#CBD7C8] bg-white">
                  <ArrowDown
                    className="h-3.5 w-3.5 text-[#4D6A50]"
                    strokeWidth={1.7}
                  />
                </span>
                Contact form
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
