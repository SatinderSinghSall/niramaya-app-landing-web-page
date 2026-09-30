import { HelpCircle, Mail, Smartphone } from "lucide-react";
import Link from "next/link";

const details = [
  {
    icon: Mail,
    title: "General enquiries",
    text: "Questions about Niramaya, the website or the overall wellness experience.",
  },
  {
    icon: Smartphone,
    title: "Application",
    text: "Questions about the Niramaya mobile application and its features.",
  },
  {
    icon: HelpCircle,
    title: "Need a quick answer?",
    text: "Browse the FAQ for answers to common questions.",
  },
];

export default function ContactDetails() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4D6A50]">
        Before you write
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#263F31]">
        We&apos;ve made it easy to find your way around.
      </h2>

      <div className="mt-10 space-y-7">
        {details.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#EEF2E6]">
                <Icon className="h-5 w-5 text-[#4D6A50]" />
              </div>

              <div>
                <h3 className="font-semibold text-[#263F31]">{item.title}</h3>

                <p className="mt-1 text-sm leading-6 text-[#6D796F]">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <Link
        href="/faq"
        className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#4D6A50] transition hover:text-[#263F31]"
      >
        Visit frequently asked questions →
      </Link>
    </div>
  );
}
