import { Activity, BookOpen, HeartHandshake, Search } from "lucide-react";
import Container from "@/components/common/Container";

const ecosystem = [
  {
    icon: Activity,
    label: "Goals & Progress",
    title: "Work toward meaningful wellness goals.",
    text: "Create goals and follow progress through the dedicated goals and progress experiences.",
    href: "/features",
  },
  {
    icon: BookOpen,
    label: "Yoga & Ayurveda",
    title: "Explore wellness practices.",
    text: "Discover Yoga and Ayurveda experiences within the Niramaya platform.",
    href: "/wellness",
  },
  {
    icon: Search,
    label: "Explore",
    title: "Find and save what interests you.",
    text: "Explore wellness content, use search and save relevant content through favorites.",
    href: "/resources",
  },
  {
    icon: HeartHandshake,
    label: "Consultation",
    title: "Connect with professional consultation workflows.",
    text: "Niramaya includes functionality for Ayurvedic consultation workflows.",
    href: "/contact",
  },
];

export default function AboutEcosystem() {
  return (
    <section className="bg-[#263F31] py-24 text-white sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B7C7AE]">
              One ecosystem
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Different wellness needs. One connected experience.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/60">
            Niramaya brings together the main wellness modules documented in the
            application rather than positioning each feature as a standalone
            product.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
          {ecosystem.map((item) => {
            const Icon = item.icon;

            return (
              <a
                href={item.href}
                key={item.title}
                className="group bg-[#263F31] p-8 transition hover:bg-[#304A39]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center border border-white/10 bg-white/5">
                    <Icon className="h-5 w-5 text-[#B7C7AE]" />
                  </div>

                  <span className="text-xs uppercase tracking-[0.14em] text-white/35">
                    {item.label}
                  </span>
                </div>

                <h3 className="mt-10 text-2xl font-semibold">{item.title}</h3>

                <p className="mt-3 max-w-lg leading-7 text-white/60">
                  {item.text}
                </p>

                <span className="mt-7 inline-block text-sm font-semibold text-[#B7C7AE] transition group-hover:text-white">
                  Explore →
                </span>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
