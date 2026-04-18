type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-3xl sm:mb-14">
      <p className="text-xs uppercase tracking-[0.32em] text-gold-200">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-6 max-w-2xl text-sm font-light italic tracking-[0.08em] text-white/76 sm:mt-7 sm:text-[0.95rem]">
        {description}
      </p>
    </div>
  );
}
