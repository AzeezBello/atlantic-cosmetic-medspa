import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/section-heading';
import CtaBanner from '@/components/cta-banner';
import { proceduresByCategory } from '@/lib/procedures';

export const metadata: Metadata = {
  title: 'Aesthetics',
  description:
    'Injectables, Kybella, non-surgical BBL, and Endolift® — subtle, non-surgical aesthetic refinement personalized to you.',
};

const aesthetics = proceduresByCategory('/aesthetics');

export default function AestheticsPage() {
  return (
    <>
      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <SectionHeading
              as="h1"
              eyebrow="Aesthetics"
              title="Subtle refinement, personalized to you."
              text="Non-surgical options for the face and body, planned around your features and goals."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {aesthetics.map((procedure) => (
                <article className="card bg-white/70" key={procedure.slug}>
                  <h3 className="text-2xl">{procedure.name}</h3>
                  <p className="mt-3 leading-6 text-muted">{procedure.summary}</p>
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
          <div className="relative aspect-square overflow-hidden rounded-[32px] bg-tint">
            <Image
              src="/images/aesthetic-skincare.png"
              alt="Dr. Ladipo presenting medical-grade skincare products in the clinic"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
