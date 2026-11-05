import type { Metadata } from 'next';
import Image from 'next/image';
import CtaBanner from '@/components/cta-banner';
import SectionHeading from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'Our Roswell Clinic',
  description:
    'A discreet surgical and medical facility for men at 1105 Upper Hembree Rd, Suite B, Roswell, GA — built for privacy, safety, and modern care.',
};

const details: [string, string][] = [
  ['Address', '1105 Upper Hembree Rd, Suite B, Roswell, GA 30076'],
  ['Phone', '(678) 649-8280'],
  ['Established', '2016 (originally Smyrna, GA)'],
  ['Arrival', 'Discreet private entrance for patient confidentiality'],
];

export default function OurClinicPage() {
  return (
    <>
      <section className="section">
        <div className="container grid gap-14 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            as="h1"
            index="01 / Our Roswell Facility"
            title="Engineered for discretion, safety, and comfort."
          />
          <div className="grid gap-6 text-lg leading-8 text-muted">
            <p>
              Originally established in Smyrna, Georgia in 2016, the practice operates from a dedicated surgical and
              medical suite at 1105 Upper Hembree Rd, Suite B, Roswell, GA 30076.
            </p>
            <p>
              The facility features a discreet private entrance so male patients can arrive and depart comfortably.
              Consultation rooms, hair-restoration suites, and operating areas are outfitted with modern surgical and
              energy-based technology, supporting every stage from pre-operative evaluation through recovery.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-tint">
        <div className="container grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-white sm:aspect-[5/4]">
            <Image
              src="/images/clinic-team.png"
              alt="Dr. Olanrewaju Ladipo and the Atlantic clinical team standing inside the Roswell clinic"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <dl className="card grid content-center gap-6">
            {details.map(([label, value]) => (
              <div key={label} className="border-b border-line pb-5 last:border-b-0 last:pb-0">
                <dt className="font-mono text-xs text-blue">{label}</dt>
                <dd className="mt-1.5 text-lg leading-7">
                  {label === 'Phone' ? (
                    <a href="tel:+16786498280" className="hover:text-blue">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
