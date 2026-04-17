type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-xs uppercase tracking-[0.32em] text-gold-200">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-white/64">{description}</p>
    </div>
  );
}
