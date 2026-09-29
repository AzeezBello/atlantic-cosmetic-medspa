import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CtaBanner from '@/components/cta-banner';
import ResultFigure from '@/components/result-figure';
import { BOOKING_URL } from '@/lib/site';
import { getProcedure, procedures } from '@/lib/procedures';
import { resultsFor } from '@/lib/results';

export function generateStaticParams() {
  return procedures.map((procedure) => ({ slug: procedure.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const procedure = getProcedure(slug);
  if (!procedure) return {};
  return { title: procedure.name, description: procedure.summary };
}

export default async function ProcedurePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const procedure = getProcedure(slug);
  if (!procedure) notFound();
  const gallery = resultsFor(slug);

  return (
    <>
      <section className="section">
        <div className="container max-w-3xl">
          <Link href={procedure.categoryHref} className="eyebrow inline-block">
            {procedure.category}
          </Link>
          <h1 className="text-5xl leading-tight md:text-6xl">{procedure.name}</h1>
          <div className="mt-8 grid gap-6 text-lg leading-8 text-muted">
            {procedure.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-10">
            Book a Consultation
          </a>
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="section bg-white">
          <div className="container">
            <div className="eyebrow">Results</div>
            <h2 className="text-4xl leading-tight md:text-5xl">{procedure.name} before and after.</h2>
            <p className="mt-4 text-sm text-muted">Individual results vary.</p>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {gallery.map((result) => (
                <ResultFigure key={result.src} {...result} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
