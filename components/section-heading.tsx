export default function SectionHeading({
  eyebrow,
  title,
  text,
  as: Heading = 'h2',
}: {
  eyebrow: string;
  title: string;
  text?: string;
  as?: 'h1' | 'h2';
}) {
  return (
    <div className="max-w-2xl">
      <div className="eyebrow">{eyebrow}</div>
      <Heading className="text-4xl leading-tight md:text-5xl">{title}</Heading>
      {text && <p className="mt-5 max-w-xl text-base leading-7 text-muted">{text}</p>}
    </div>
  );
}
