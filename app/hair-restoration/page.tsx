import type { Metadata } from 'next';
import Image from 'next/image';
import CtaBanner from '@/components/cta-banner';
import ResultFigure from '@/components/result-figure';
import { BOOKING_URL } from '@/lib/site';
import { getProcedure } from '@/lib/procedures';
import { resultsFor } from '@/lib/results';

export const metadata: Metadata = {
  title: 'Hair Restoration',
  description:
    'FUE hair transplantation combined with PRP therapy — no linear donor scar, natural-looking growth, and results assessed individually.',
};

const fue = getProcedure('fue-hair-transplant')!;
const [featured, ...gallery] = resultsFor('fue-hair-transplant');

export default function HairRestorationPage() {
  return (
    <>
      <section className="section bg-white">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-square overflow-hidden rounded-[30px] bg-tint">
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <div className="eyebrow">Hair Restoration</div>
            <h1 className="text-5xl">Restore the hairline.</h1>
            <div className="mt-6 grid max-w-xl gap-4 leading-8 text-muted">
              {fue.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8">
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">Results</div>
          <h2 className="text-4xl leading-tight md:text-5xl">FUE before and after.</h2>
          <p className="mt-4 text-sm text-muted">Individual results vary.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {gallery.map((result) => (
              <ResultFigure key={result.src} {...result} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
