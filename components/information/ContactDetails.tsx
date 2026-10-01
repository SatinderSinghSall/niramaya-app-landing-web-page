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
    <div className="lg:pr-8">
      {/* Section label */}
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-semibold tracking-[0.16em] text-[#9AA39B]">
          01
        </span>

        <span className="h-px w-6 bg-[#C7D2C4]" />

        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4D6A50]">
          Before you write
        </span>
      </div>

      <h2 className="mt-5 max-w-md text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#263F31] sm:text-4xl">
        Find the right place to start.
      </h2>

      <p className="mt-4 max-w-md text-sm leading-7 text-[#6D796F]">
        Whether you have a question about the application or simply want to
        learn more about Niramaya, choose the area that best matches your
        message.
      </p>

      {/* Contact areas */}
      <div className="mt-9 border-t border-[#DDE3D9]">
        {details.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex gap-4 border-b border-[#DDE3D9] py-5"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#D7E0D4] bg-[#EEF2E6]">
                <Icon className="h-4 w-4 text-[#4D6A50]" strokeWidth={1.7} />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-semibold tracking-[0.14em] text-[#A0AAA1]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-sm font-semibold text-[#263F31]">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-1.5 max-w-sm text-sm leading-6 text-[#758078]">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* FAQ link */}
      <Link
        href="/faq"
        className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#4D6A50]"
      >
        <span>Browse frequently asked questions</span>

        <span className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </div>
  );
}
