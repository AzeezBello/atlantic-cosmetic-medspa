import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeading from '@/components/section-heading';
import CtaBanner from '@/components/cta-banner';
import { proceduresByCategory } from '@/lib/procedures';

export const metadata: Metadata = {
  title: 'Wellness',
  description:
    'Weight loss & wellness, IV hydration, and stem cell & regenerative treatments — care that extends beyond aesthetics.',
};

const wellness = proceduresByCategory('/wellness');

export default function WellnessPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <SectionHeading as="h1" eyebrow="Wellness" title="Care that extends beyond aesthetics." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {wellness.map((procedure) => (
              <article className="card min-h-48" key={procedure.slug}>
                <h3 className="text-2xl">{procedure.name}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{procedure.summary}</p>
                <Link
                  href={`/procedures/${procedure.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[.12em]"
                >
                  Learn more <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
