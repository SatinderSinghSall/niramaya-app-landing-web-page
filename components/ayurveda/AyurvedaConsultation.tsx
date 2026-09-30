import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, UserRound } from "lucide-react";
import Container from "@/components/common/Container";

export default function AyurvedaConsultation() {
  return (
    <section className="bg-[#30372D] py-24 text-white sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DAD5C2]">
              Ayurvedic consultation
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              When you want to go beyond discovery.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              Niramaya includes a consultation workflow designed around
              connecting users with Ayurvedic professionals.
            </p>

            <Link
              href="/app"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#30372D] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F1EEE3] hover:shadow-xl"
            >
              Explore consultation
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#30372D]/10 transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

          <div className="grid gap-3">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <CalendarDays className="h-5 w-5 text-[#DAD5C2]" />
                </div>

                <div>
                  <h3 className="font-semibold">Book or request</h3>
                  <p className="mt-1 text-xs text-white/40">
                    Start through the consultation booking experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Clock3 className="h-5 w-5 text-[#DAD5C2]" />
                </div>

                <div>
                  <h3 className="font-semibold">Consultation history</h3>
                  <p className="mt-1 text-xs text-white/40">
                    Review previous consultation information through the app.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <UserRound className="h-5 w-5 text-[#DAD5C2]" />
                </div>

                <div>
                  <h3 className="font-semibold">Professional connection</h3>
                  <p className="mt-1 text-xs text-white/40">
                    Explore the Ayurvedic consultation workflow available in
                    Niramaya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
