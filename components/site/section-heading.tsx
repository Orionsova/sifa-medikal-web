type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span className="inline-flex w-fit rounded-full border border-[var(--line-strong)] bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-navy)]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-balance text-3xl font-extrabold tracking-tight text-[var(--brand-navy)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-lg leading-8 text-[var(--text-soft)]">{description}</p>
      ) : null}
    </div>
  );
}

