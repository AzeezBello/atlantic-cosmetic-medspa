import type { Metadata } from 'next';
import Image from 'next/image';
import SectionHeading from '@/components/section-heading';
import CtaBanner from '@/components/cta-banner';

export const metadata: Metadata = {
  title: 'Our Clinic',
  description:
    'A premier medical spa and cosmetic surgery facility in Roswell, GA, designed for privacy, comfort, and modern care.',
};

const photos: [string, string][] = [
  ['/images/clinic-facility.png', 'A treatment room at the clinic'],
  ['/images/coolsculpting-consultation.png', 'The consultation area with a CoolSculpting display'],
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
        <div className="container grid gap-5 md:grid-cols-2">
          {photos.map(([src, alt]) => (
            <div key={src} className="relative aspect-[5/4] overflow-hidden rounded-[30px] bg-tint">
              <Image src={src} alt={alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-top" />
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
