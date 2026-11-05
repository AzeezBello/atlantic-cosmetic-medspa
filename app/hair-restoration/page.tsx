import type { Metadata } from 'next';
import Image from 'next/image';
import BookButton from '@/components/book-button';
import CtaBanner from '@/components/cta-banner';
import ResultFigure from '@/components/result-figure';
import SectionHeading from '@/components/section-heading';
import { getProcedure } from '@/lib/procedures';
import { resultsFor } from '@/lib/results';

export const metadata: Metadata = {
  title: 'Male Hair Restoration (FUE + PRP)',
  description:
    'Follicular Unit Extraction (FUE) hair transplantation with PRP therapy for men in Roswell, GA — natural hairline density with zero linear strip scar.',
};

const fue = getProcedure('fue-hair-transplant')!;
const [featured, ...gallery] = resultsFor('fue-hair-transplant');

export default function HairRestorationPage() {
  return (
    <>
      <section className="section bg-white">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-line bg-tint">
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
            <div className="index-tag">01 / Male Hair Restoration</div>
            <h1 className="text-4xl leading-tight sm:text-5xl">Rebuild a natural, short-fade friendly hairline.</h1>
            <div className="mt-6 grid max-w-xl gap-4 leading-8 text-muted">
              {fue.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul role="list" className="mt-6 grid gap-2 border-t border-line pt-5 text-sm text-ink/85">
              {fue.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-blue" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <BookButton className="btn btn-primary mt-8" />
          </div>
        </div>
      </section>

      <section className="section bg-tint">
        <div className="container">
          <SectionHeading
            index="02 / Verified FUE Outcomes"
            title="Male hairline & crown restoration."
            text="Individual results vary based on donor density, hair-loss pattern, and healing."
          />
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
