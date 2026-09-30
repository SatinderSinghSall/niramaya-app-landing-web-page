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

        <div className="flex flex-col gap-3 border-t border-[#E3E7DF] py-6 text-sm text-[#929B92] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>

          <p>Built for a healthier everyday.</p>
        </div>
      </Container>
    </footer>
  );
}
