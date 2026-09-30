interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignment =
    align === "center"
      ? "mx-auto max-w-3xl text-center"
      : "max-w-3xl text-left";

  return (
    <div className={alignment}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#4D6A50]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-semibold tracking-tight text-[#263F31] sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-[#6D796F] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
