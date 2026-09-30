import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#4D6A50]/30 focus:ring-offset-2";

  const variants = {
    primary: "bg-[#4D6A50] text-white hover:bg-[#3F5942]",
    secondary: "bg-[#263F31] text-white hover:bg-[#1E3327]",
    outline:
      "border border-[#D7DED5] bg-white text-[#263F31] hover:border-[#4D6A50] hover:bg-[#F7F9F5]",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
