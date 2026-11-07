type Props = {
  index?: string;
  title: string;
  text?: string;
  as?: 'h1' | 'h2';
};

export default function SectionHeading({ index, title, text, as: Tag = 'h2' }: Props) {
  return (
    <div className="max-w-2xl">
      {index && <div className="index-tag">{index}</div>}
      <Tag
        className={
          Tag === 'h1'
            ? 'text-[clamp(2rem,6vw,3.5rem)] leading-[1.08] tracking-[-0.02em]'
            : 'text-[clamp(1.75rem,4.5vw,2.85rem)] leading-[1.1] tracking-[-0.02em]'
        }
      >
        {title}
      </Tag>
      {text && <p className="mt-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">{text}</p>}
    </div>
  );
}
