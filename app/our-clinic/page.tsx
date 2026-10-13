import type { Metadata } from 'next';
import Image from 'next/image';
import SectionHeading from '@/components/section-heading';
import CtaBanner from '@/components/cta-banner';

export const metadata: Metadata = {
  title: 'Our Clinic',
  description:
    'A premier medical spa and cosmetic surgery facility in Roswell, GA, designed for privacy, comfort, and modern care.',
};

const details: [string, string][] = [
  ['Address', '1105 Upper Hembree Rd, Suite B, Roswell, GA 30076'],
  ['Phone', '(678) 649-8280'],
  ['Established', '2016, originally in Smyrna, GA'],
  ['Entrance', 'Discreet, for patient privacy'],
];

export default function OurClinicPage() {
  return (
    <>
      <section className="section">
        <div className="container grid gap-14 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            as="h1"
            eyebrow="Our Clinic"
            title="A premier medical spa and cosmetic surgery facility."
          />
          <div className="grid gap-6 text-lg leading-8 text-muted">
            <p>
              Originally established in Smyrna, Georgia in 2016, the practice has since relocated to a modern
              facility at 1105 Upper Hembree Rd, Suite B, Roswell, GA 30076.
            </p>
            <p>
              The clinic features a discreet entrance to protect patient privacy, and is designed with a warm and
              welcoming atmosphere. Patient rooms and operating areas are equipped with the latest technology and
              medical equipment, with safety and comfort prioritized from your first consultation through
              post-operative care.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] bg-tint sm:aspect-[5/4]">
            <Image
              src="/images/clinic-team.png"
              alt="The Atlantic Cosmetic Surgery & MedSpa team standing together in the clinic"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <dl className="card grid content-center gap-6">
            {details.map(([label, value]) => (
              <div key={label} className="border-b border-line pb-5 last:border-b-0 last:pb-0">
                <dt className="text-[10px] uppercase tracking-[.14em] text-muted sm:text-xs">{label}</dt>
                <dd className="mt-1.5 text-lg leading-7">
                  {label === 'Phone' ? <a href="tel:+16786498280">{value}</a> : value}
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
