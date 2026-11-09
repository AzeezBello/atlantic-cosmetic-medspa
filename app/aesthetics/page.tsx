import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CtaBanner from '@/components/cta-banner';
import SectionHeading from '@/components/section-heading';
import SpotlightCard from '@/components/spotlight-card';
import { proceduresByCategory } from '@/lib/procedures';

export const metadata: Metadata = {
  title: "Men's Aesthetics",
  description:
    "Masculine jawline and chin fillers, conservative neurotoxins, Kybella® submental reduction, and Endolift® laser skin tightening for men in Roswell, GA.",
};

const aesthetics = proceduresByCategory('/aesthetics');

export default function AestheticsPage() {
  return (
    <>
      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
          <div>
            <SectionHeading
              as="h1"
              index="Men's Facial & Laser Aesthetics"
              title="Stronger structure. Natural expression."
              text="Non-surgical facial balancing, submental fat reduction, and subdermal laser tightening calibrated specifically for male bone structure and skin thickness."
            />
            <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5">
              {aesthetics.map((procedure) => (
                <SpotlightCard className="group" key={procedure.slug}>
                  <h2 className="text-2xl">{procedure.name}</h2>
                  <p className="mt-2.5 text-sm leading-6 text-muted sm:mt-3">{procedure.summary}</p>
                  <Link
                    href={`/procedures/${procedure.slug}`}
                    className="link-arrow mt-5 inline-flex min-h-10 items-center gap-2 text-xs font-semibold text-blue"
                  >
                    Explore {procedure.name} <ArrowRight aria-hidden="true" size={14} />
                  </Link>
                </SpotlightCard>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-line bg-tint">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/mens-jawline.avif"
                alt="Editorial profile portrait illustrating angular masculine jawline and neck definition"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <p className="border-t border-line bg-white px-5 py-3.5 text-xs text-muted">
              Editorial illustration — treatments focus on angular jawline support, submental contour, and natural movement.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
