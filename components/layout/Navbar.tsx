import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E3E7DF]/80 bg-[#EEF2E6]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-[0.18em] text-[#263F31]"
          aria-label="Niramaya home"
        >
          NIRAMAYA
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#6D796F] transition-colors hover:text-[#263F31]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/app"
            className="ml-2 inline-flex items-center rounded-lg bg-[#4D6A50] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#3F5942]"
          >
            Explore App
          </Link>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
