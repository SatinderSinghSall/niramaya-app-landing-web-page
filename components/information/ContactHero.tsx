import { ArrowDown, Mail } from "lucide-react";
import Container from "@/components/common/Container";

export default function ContactHero() {
  return (
    <section className="bg-[#F7F8F4]">
      <Container>
        <div className="py-20 sm:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 border border-[#DDE3D9] bg-white px-4 py-2 text-sm font-medium text-[#4D6A50]">
              <Mail className="h-4 w-4" />
              Contact Niramaya
            </div>

            <h1 className="mt-7 text-5xl font-semibold tracking-[-0.045em] text-[#263F31] sm:text-6xl lg:text-7xl">
              Let&apos;s start a conversation.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6D796F]">
              Have a question about Niramaya, the application or the website?
              Send us a message and we&apos;ll have a clear place to start.
            </p>
          </div>

          <div className="mt-12 flex items-center gap-2 text-sm font-medium text-[#4D6A50]">
            <ArrowDown className="h-4 w-4" />
            Contact form
          </div>
        </div>
      </Container>
    </section>
  );
}
