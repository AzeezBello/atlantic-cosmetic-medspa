import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
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
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <SectionHeading
              as="h1"
              eyebrow="Wellness"
              title="Care that extends beyond aesthetics."
              text="Atlantic Wellness Center brings medically guided weight loss, IV hydration, and regenerative treatments under one roof."
            />
            <div className="relative h-40 w-40 overflow-hidden rounded-3xl border border-line bg-white lg:h-52 lg:w-52">
              <Image
                src="/images/atlantic-wellness-center.png"
                alt="Atlantic Wellness Center"
                fill
                sizes="208px"
                className="object-contain p-4"
              />
            </div>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {wellness.map((procedure) => (
              <article className="card flex flex-col" key={procedure.slug}>
                <h3 className="text-2xl">{procedure.name}</h3>
                <p className="mt-4 flex-1 text-sm leading-6 text-muted">{procedure.summary}</p>
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
