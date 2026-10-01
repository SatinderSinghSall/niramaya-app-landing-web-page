import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  HeartHandshake,
  Search,
} from "lucide-react";
import Container from "@/components/common/Container";

const ecosystem = [
  {
    number: "01",
    icon: Activity,
    label: "Goals & Progress",
    title: "Work toward meaningful wellness goals.",
    text: "Create goals and follow progress through the dedicated goals and progress experiences.",
    href: "/features",
  },
  {
    number: "02",
    icon: BookOpen,
    label: "Yoga & Ayurveda",
    title: "Explore wellness practices.",
    text: "Discover Yoga and Ayurveda experiences within the Niramaya platform.",
    href: "/wellness",
  },
  {
    number: "03",
    icon: Search,
    label: "Explore",
    title: "Find and save what interests you.",
    text: "Explore wellness content, use search and save relevant content through favorites.",
    href: "/resources",
  },
  {
    number: "04",
    icon: HeartHandshake,
    label: "Consultation",
    title: "Connect with professional consultation workflows.",
    text: "Niramaya includes functionality for Ayurvedic consultation workflows.",
    href: "/contact",
  },
];

export default function AboutEcosystem() {
  return (
    <section className="relative overflow-hidden bg-[#263F31] text-white">
      {/* Quiet background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[-120px] h-[420px] w-[420px] rounded-full border border-white/[0.055]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 bottom-[-240px] h-[500px] w-[500px] rounded-full border border-white/[0.04]"
      />

      <Container>
        <div className="relative py-20 sm:py-24 lg:py-28">
          {/* ===================================================== */}
          {/* INTRO                                                 */}
          {/* ===================================================== */}

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#B7C7AE]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B7C7AE]">
                  One ecosystem
                </p>
              </div>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
                03 / The Niramaya experience
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-[2.75rem] font-semibold leading-[1] tracking-[-0.045em] sm:text-5xl lg:text-[4.15rem]">
                Different wellness needs.
                <span className="block text-[#B7C7AE]">
                  One connected experience.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
                Niramaya brings together the main wellness experiences of the
                application rather than treating each one as a separate product.
              </p>
            </div>
          </div>

          {/* ===================================================== */}
          {/* ECOSYSTEM LIST                                        */}
          {/* ===================================================== */}

          <div className="mt-16 border-y border-white/10 lg:mt-20">
            {ecosystem.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  href={item.href}
                  key={item.title}
                  className="group relative grid gap-6 border-b border-white/10 py-8 last:border-b-0 sm:grid-cols-[60px_52px_0.8fr_1fr_auto] sm:items-center sm:gap-6 sm:py-9"
                >
                  {/* Number */}
                  <span className="text-[11px] font-bold tracking-[0.16em] text-white/30">
                    {item.number}
                  </span>

                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:border-[#B7C7AE]/30 group-hover:bg-[#B7C7AE]/10">
                    <Icon
                      className="h-[17px] w-[17px] text-[#B7C7AE]"
                      strokeWidth={1.7}
                    />
                  </div>

                  {/* Title */}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#B7C7AE]/70">
                      {item.label}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-[1.3rem]">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="max-w-md text-sm leading-6 text-white/45">
                    {item.text}
                  </p>

                  {/* Arrow */}
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/35 transition-all duration-300 group-hover:border-[#B7C7AE]/30 group-hover:bg-[#B7C7AE]/10 group-hover:text-[#B7C7AE]">
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.8}
                    />
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Bottom brand line */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25">
              Personal · Practical · Connected
            </p>

            <div className="flex items-center gap-2 text-xs text-white/35">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B7C7AE]" />
              One Niramaya experience
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
