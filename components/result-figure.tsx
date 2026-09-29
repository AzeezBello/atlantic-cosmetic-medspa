import Image from 'next/image';
import type { Result } from '@/lib/results';

export default function ResultFigure({ src, alt, label }: Result) {
  return (
    <figure className="overflow-hidden rounded-3xl border border-line bg-white">
      <div className="relative aspect-square">
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
      </div>
      <figcaption className="flex items-center justify-between px-5 py-4 text-xs uppercase tracking-[.12em]">
        <span>{label}</span>
        <span className="text-muted">Before / After</span>
      </figcaption>
    </figure>
  );
}
