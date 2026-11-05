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
      <Tag className={Tag === 'h1' ? 'text-4xl leading-tight sm:text-5xl md:text-6xl' : 'text-3xl leading-tight sm:text-4xl md:text-5xl'}>
        {title}
      </Tag>
      {text && <p className="mt-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">{text}</p>}
    </div>
  );
}
