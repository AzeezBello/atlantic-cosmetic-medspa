import Image from 'next/image';
import type { Result } from '@/lib/results';

export default function ResultFigure({ src, alt, label, width, height }: Result) {
  return (
    <figure className="overflow-hidden rounded-3xl border border-line bg-white">
      <div className="result-image overflow-hidden bg-ink">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="h-auto w-full"
        />
      </div>
      <figcaption className="flex items-center justify-between px-5 py-4 text-xs uppercase tracking-[.12em]">
        <span>{label}</span>
        <span className="text-muted">Before / After</span>
      </figcaption>
    </figure>
  );
}
