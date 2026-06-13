type Props = { eyebrow: string; title: string; description?: string };

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="reveal mb-12 max-w-2xl">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold mb-3">{title}</h2>
      {description && <p className="text-muted-foreground leading-relaxed">{description}</p>}
    </div>
  );
}
