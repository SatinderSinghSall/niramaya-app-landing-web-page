import Link from "next/link";
import { FOOTER_LINKS, SITE_CONFIG } from "@/lib/constants";
import Container from "@/components/common/Container";

interface FooterColumnProps {
  title: string;
  links: readonly {
    label: string;
    href: string;
  }[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-[#263F31]">{title}</h3>

      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-[#6D796F] transition-colors hover:text-[#263F31]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[#E3E7DF] bg-white">
      <Container>
        <div className="grid gap-12 py-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] lg:py-16">
          <div className="max-w-sm">
            <Link
              href="/"
              className="text-lg font-semibold tracking-[0.18em] text-[#263F31]"
            >
              NIRAMAYA
            </Link>

            <p className="mt-5 text-sm leading-6 text-[#6D796F]">
              Your journey to better wellness starts here. Understand your
              wellbeing, build healthier habits, and discover guidance for
              everyday life.
            </p>
          </div>

          <FooterColumn title="Explore" links={FOOTER_LINKS.explore} />

          <FooterColumn title="Wellness" links={FOOTER_LINKS.wellness} />

          <FooterColumn title="Information" links={FOOTER_LINKS.information} />

          <FooterColumn title="Legal" links={FOOTER_LINKS.legal} />
        </div>

        <div className="flex flex-col gap-4 border-t border-[#E3E7DF] py-6 text-sm text-[#929B92] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <p>Built for a healthier everyday.</p>

            <span className="h-4 w-px bg-[#D9DED8]" />

            <a
              href="https://niramaya-admin-panel.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                ml-3
                inline-flex
                h-[47px]
                items-center
                gap-2.5
                rounded-[10px]
                bg-[#B86F52]
                px-5
                shadow-[0_4px_12px_rgba(184,111,82,0.16)]
                transition-all
                duration-300
                hover:-translate-y-[1px]
                hover:bg-[#A96046]
                hover:shadow-[0_7px_18px_rgba(184,111,82,0.22)]
              "
            >
              <span
                className="
                  whitespace-nowrap
                  text-[13px]
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                  !text-white
                "
              >
                Admin Panel
              </span>

              <span
                className="
                  flex
                  h-[27px]
                  w-[27px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white/15
                  transition-all
                  duration-300
                  group-hover:translate-x-[2px]
                  group-hover:bg-white/20
                "
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10L10 4M5 4H10V9"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
