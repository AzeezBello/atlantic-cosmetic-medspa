import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeading from '@/components/section-heading';
import CtaBanner from '@/components/cta-banner';
import { proceduresByCategory } from '@/lib/procedures';

export const metadata: Metadata = {
  title: 'Cosmetic Surgery',
  description:
    'Explore Lipo 360, BBL, J-Plasma, chin liposuction, and cellulite treatment — surgical options thoughtfully planned around your goals.',
};

const surgery = proceduresByCategory('/cosmetic-surgery');

export default function CosmeticSurgeryPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <SectionHeading
            as="h1"
            eyebrow="Cosmetic Surgery"
            title="Surgical options, thoughtfully planned."
            text="Explore a range of body and facial procedures. Candidacy, technique, risks, recovery, and expected outcomes are discussed during consultation."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {surgery.map((procedure) => (
              <article className="card" key={procedure.slug}>
                <h3 className="text-2xl">{procedure.name}</h3>
                <p className="mt-3 leading-6 text-muted">{procedure.summary}</p>
                <Link
                  href={`/procedures/${procedure.slug}`}
                  className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[.12em]"
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
