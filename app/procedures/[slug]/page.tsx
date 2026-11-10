import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BookButton from '@/components/book-button';
import CtaBanner from '@/components/cta-banner';
import ResultFigure from '@/components/result-figure';
import SectionHeading from '@/components/section-heading';
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
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start lg:gap-12">
          <div>
            <Link
              href={procedure.categoryHref}
              className="inline-flex min-h-10 items-center gap-2 text-xs font-medium text-blue transition-colors hover:text-navy"
            >
              <ArrowLeft aria-hidden="true" size={14} />
              <span>{procedure.category}</span>
            </Link>
            <h1 className="mt-2 text-[clamp(2rem,6vw,3.5rem)] leading-[1.08] tracking-[-0.02em] sm:mt-4">
              {procedure.name}
            </h1>
            <div className="mt-6 grid gap-5 text-base leading-7 text-muted sm:mt-8 sm:gap-6 sm:text-lg sm:leading-8">
              {procedure.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <BookButton className="btn btn-primary mt-8 w-full sm:mt-10 sm:w-auto" />
          </div>

          <aside aria-label="Treatment highlights" className="card bg-tint/60">
            <h2 className="text-xl">Clinical Focus</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{procedure.summary}</p>
            <ul role="list" className="mt-5 grid gap-3 border-t border-line pt-5 text-sm text-ink">
              {procedure.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="section bg-tint">
          <div className="container">
            <SectionHeading
              index="Clinical Outcomes"
              title={`${procedure.name} before and after.`}
              text="Unretouched patient results. Individual outcomes vary."
            />
            <div className="mt-10 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
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
