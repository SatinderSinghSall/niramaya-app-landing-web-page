import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import Container from "@/components/common/Container";

export default function LegalFooterCTA() {
  return (
    <section className="border-t border-[#E3E7DF] bg-[#EEF2E6] py-16">
      <Container>
        <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white">
              <Mail className="h-5 w-5 text-[#4D6A50]" />
            </div>

            <div>
              <p className="text-sm font-semibold text-[#263F31]">
                Questions about these documents?
              </p>

              <p className="mt-1 text-sm text-[#6D796F]">
                Visit the contact page for general enquiries.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#4D6A50] transition hover:text-[#263F31]"
          >
            Contact Niramaya
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
