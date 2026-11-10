import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CtaBanner from '@/components/cta-banner';
import SectionHeading from '@/components/section-heading';
import SpotlightCard from '@/components/spotlight-card';
import { proceduresByCategory } from '@/lib/procedures';

export const metadata: Metadata = {
  title: 'Metabolic & Recovery Wellness',
  description:
    'Physician-guided GLP-1 (Semaglutide) medical weight loss, IV performance hydration, and biologic regenerative treatments in Roswell, GA.',
};

const wellness = proceduresByCategory('/wellness');

export default function WellnessPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10">
            <SectionHeading
              as="h1"
              index="Atlantic Wellness"
              title="Metabolic performance and cellular recovery."
              text="Atlantic Wellness Center pairs physician-supervised GLP-1 weight management, targeted IV hydration, and regenerative biologic protocols under one roof."
            />
            <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-line bg-white sm:h-36 sm:w-36 lg:h-44 lg:w-44">
              <Image
                src="/images/atlantic-wellness-center.png"
                alt="Atlantic Wellness Center emblem"
                fill
                sizes="176px"
                className="object-contain p-3 sm:p-4"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3">
            {wellness.map((procedure) => (
              <SpotlightCard className="group flex flex-col" key={procedure.slug}>
                <h2 className="text-2xl">{procedure.name}</h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">{procedure.summary}</p>
                <ul role="list" className="mt-5 grid gap-1.5 border-t border-line pt-4 text-xs text-ink/80">
                  {procedure.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-blue" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/procedures/${procedure.slug}`}
                  className="link-arrow mt-6 inline-flex min-h-10 items-center gap-2 text-xs font-semibold text-blue"
                >
                  Explore {procedure.name} <ArrowRight aria-hidden="true" size={14} />
                </Link>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-tint">
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
          <div className="order-2 relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-white sm:aspect-[3/4] lg:order-1">
            <Image
              src="/images/mens-hair-wellness.avif"
              alt="Composed patient seated in a calm architectural clinic lounge"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              index="Integrated Care"
              title="Structured support before and after procedures."
              text="Many patients begin with GLP-1 metabolic management to hit target body composition ahead of Lipo 360, or pair IV micronutrient therapy and regenerative signaling factors with FUE hair restoration."
            />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
