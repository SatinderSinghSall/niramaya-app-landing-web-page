import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Compass,
  HeartPulse,
  Leaf,
  Target,
} from "lucide-react";

type ResourceCardProps = {
  number: string;
  title: string;
  description: string;
  category: string;
  href: string;
  icon: "leaf" | "target" | "book" | "heart" | "compass";
};

const icons = {
  leaf: Leaf,
  target: Target,
  book: BookOpen,
  heart: HeartPulse,
  compass: Compass,
};

export default function ResourceCard({
  number,
  title,
  description,
  category,
  href,
  icon,
}: ResourceCardProps) {
  const Icon = icons[icon];

  return (
    <Link
      href={href}
      className="group block border border-[#E3E7DF] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#C9D3C5] hover:shadow-[0_18px_50px_rgba(38,63,49,0.07)]"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold tracking-[0.18em] text-[#9AA49B]">
            {number}
          </span>

          <div className="flex h-11 w-11 items-center justify-center bg-[#EEF2E6]">
            <Icon className="h-5 w-5 text-[#4D6A50]" />
          </div>
        </div>

        <ArrowUpRight className="h-5 w-5 text-[#929B92] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#4D6A50]" />
      </div>

      <p className="mt-8 text-xs font-semibold uppercase tracking-[0.15em] text-[#929B92]">
        {category}
      </p>

      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-[#263F31]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[#6D796F]">{description}</p>

      <span className="mt-7 inline-block text-sm font-semibold text-[#4D6A50]">
        Explore resource
      </span>
    </Link>
  );
}
