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
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start">
          <div>
            <Link
              href={procedure.categoryHref}
              className="inline-flex items-center gap-2 text-xs font-medium text-blue transition-colors hover:text-navy"
            >
              <ArrowLeft aria-hidden="true" size={14} />
              <span>{procedure.category}</span>
            </Link>
            <h1 className="mt-4 text-4xl leading-tight sm:text-5xl md:text-6xl">{procedure.name}</h1>
            <div className="mt-8 grid gap-6 text-lg leading-8 text-muted">
              {procedure.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <BookButton className="btn btn-primary mt-10" />
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
              text="Unretouched male patient results. Individual outcomes vary."
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
