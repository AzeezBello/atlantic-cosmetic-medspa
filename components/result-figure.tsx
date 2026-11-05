import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Result } from '@/lib/results';

export default function ResultFigure({ src, alt, label, detail, width, height, procedure }: Result) {
  return (
    <figure className="group overflow-hidden rounded-2xl border border-line bg-white">
      <div className="result-image overflow-hidden bg-deep">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="h-auto w-full"
        />
      </div>
      <figcaption className="flex items-center justify-between gap-4 px-5 py-4">
        <div>
          <p className="font-serif text-lg leading-snug text-ink">{label}</p>
          <p className="mt-0.5 text-xs text-muted">{detail} — Before / After</p>
        </div>
        <Link
          href={`/procedures/${procedure}`}
          aria-label={`View ${label} procedure details`}
          className="inline-flex min-h-9 min-w-9 shrink-0 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-blue hover:text-blue"
        >
          <ArrowRight aria-hidden="true" size={15} />
        </Link>
      </figcaption>
    </figure>
  );
}
