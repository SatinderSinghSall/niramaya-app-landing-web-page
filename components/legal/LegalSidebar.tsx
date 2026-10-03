"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LegalSidebarProps = {
  sections: {
    id: string;
    label: string;
  }[];
};

const documents = [
  {
    href: "/privacy",
    label: "Privacy Policy",
  },
  {
    href: "/terms",
    label: "Terms of Use",
  },
  {
    href: "/disclaimer",
    label: "Disclaimer",
  },
  {
    href: "/delete-account",
    label: "Delete Account",
  },
];

export default function LegalSidebar({ sections }: LegalSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <div className="border border-[#E3E7DF] bg-white p-5">
        <p className="px-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#929B92]">
          Legal documents
        </p>

        <nav className="mt-4 space-y-1">
          {documents.map((document) => {
            const active = pathname === document.href;

            return (
              <Link
                key={document.href}
                href={document.href}
                className={`block border-l-2 px-3 py-2.5 text-sm font-medium transition ${
                  active
                    ? "border-[#4D6A50] bg-[#EEF2E6] text-[#263F31]"
                    : "border-transparent text-[#6D796F] hover:bg-[#F7F8F4] hover:text-[#263F31]"
                }`}
              >
                {document.label}
              </Link>
            );
          })}
        </nav>

        <div className="my-5 h-px bg-[#E3E7DF]" />

        <p className="px-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#929B92]">
          On this page
        </p>

        <nav className="mt-3 space-y-0.5">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block px-3 py-2 text-sm text-[#6D796F] transition hover:bg-[#F7F8F4] hover:text-[#263F31]"
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
