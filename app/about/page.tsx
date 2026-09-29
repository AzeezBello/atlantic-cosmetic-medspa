import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/section-heading';
import CtaBanner from '@/components/cta-banner';

export const metadata: Metadata = {
  title: 'About Atlantic',
  description:
    'Atlantic Cosmetic Surgery & MedSpa — a premier cosmetic surgery and medical spa practice in Roswell, GA, established in 2016.',
};

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="container grid gap-14 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <SectionHeading as="h1" eyebrow="About Atlantic" title="Be healthy, beautiful, and happy." />
            <div className="mt-8 grid gap-6 text-lg leading-8 text-muted">
              <p>
                Atlantic Cosmetic Surgery &amp; MedSpa is a premier medical spa and cosmetic surgery practice
                offering comprehensive surgical and non-surgical aesthetic procedures. Established in Smyrna,
                Georgia in 2016, the practice has since moved to a modern facility in Roswell.
              </p>
              <p>
                Our goal is to give every patient peace of mind and comfort — so you feel secure entrusting your
                care to us. That starts with a discreet, welcoming clinic, continues through thoughtful treatment
                planning, and carries all the way through recovery.
              </p>
              <p>
                Cosmetic surgery, aesthetics, hair restoration, and wellness are all offered under one roof, so
                your care can be planned as a whole rather than one procedure at a time.
              </p>
            </div>
            <Link href="/our-clinic" className="btn btn-outline mt-8">
              Tour Our Clinic
            </Link>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-[32px] bg-tint">
            <Image
              src="/images/clinic-team.png"
              alt="The Atlantic Cosmetic Surgery & MedSpa team in the clinic"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <SectionHeading eyebrow="Our Surgeon" title="Olanrewaju Ladipo, MD" />
          <div className="grid gap-6 text-lg leading-8 text-muted">
            <p>
              Dr. Ladipo earned his MD from Lagos State University College of Medicine and completed Internal
              Medicine training at Newark Beth Israel Medical Center in Newark, NJ. He specialized in
              reconstructive microsurgery at Queen Mary University of London and completed a Plastic Surgery
              residency at Universidade Brasil in São Paulo, where he currently serves as a Senior Plastic Surgery
              Fellow. He is an associate member of the International Society of Hair Restoration Surgery.
            </p>
            <p>
              He specializes in body and facial procedures with particular expertise in reconstructive
              microsurgery, and performs hair restoration surgery combined with Platelet-Rich Plasma (PRP)
              therapy. Beyond the practice, he takes part in annual international medical missions providing care
              to burn patients.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
