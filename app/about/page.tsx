import type { Metadata } from 'next';
import Image from 'next/image';
import SectionHeading from '@/components/section-heading';
import CtaBanner from '@/components/cta-banner';

export const metadata: Metadata = {
  title: 'Meet Dr. Ladipo',
  description:
    "Olanrewaju Ladipo, MD — background, training, and the philosophy behind Atlantic Cosmetic Surgery & MedSpa's approach to care.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="container grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-tint">
            <Image
              src="/images/dr-ladipo-portrait.png"
              alt="Dr. Olanrewaju Ladipo in the clinic"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[58%_40%]"
            />
          </div>
          <div>
            <SectionHeading as="h1" eyebrow="Meet Dr. Ladipo" title="Olanrewaju Ladipo, MD" />
            <div className="mt-8 grid gap-6 text-lg leading-8 text-muted">
              <p>
                Born in Lagos, Nigeria, Dr. Ladipo earned his MD from Lagos State University College of Medicine
                and completed Internal Medicine training at Newark Beth Israel Medical Center in Newark, NJ. He
                went on to specialize in reconstructive microsurgery at Queen Mary University of London, and
                completed a Plastic Surgery residency at Universidade Brasil in São Paulo, Brazil — where he
                currently serves as a Senior Plastic Surgery Fellow. He is an associate member of the
                International Society of Hair Restoration Surgery.
              </p>
              <p>
                Dr. Ladipo specializes in body and facial procedures with particular expertise in reconstructive
                microsurgery, and offers hair restoration surgery combined with Platelet-Rich Plasma (PRP)
                therapy to support healing and enhance transplant outcomes.
              </p>
              <p>
                His practice is guided by &ldquo;hard work, dedication, and passion&rdquo; alongside a
                &ldquo;commitment to excellence.&rdquo; Beyond the practice, Dr. Ladipo takes part in annual
                international medical missions, providing care to burn patients at burn centers around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="eyebrow">Community &amp; Continuing Education</div>
            <h2 className="text-4xl leading-tight md:text-5xl">Always learning, always giving back.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              From conferences with peers in aesthetic surgery to annual medical missions caring for burn
              patients, Dr. Ladipo&rsquo;s work extends well beyond the clinic.
            </p>
          </div>
          <figure className="overflow-hidden rounded-[32px] border border-line bg-white">
            <div className="relative aspect-square">
              <Image
                src="/images/dr-ladipo-plastic-con.png"
                alt="Dr. Ladipo with a fellow surgeon at the PlasticCon conference"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="px-5 py-4 text-xs uppercase tracking-[.12em] text-muted">
              Dr. Ladipo at PlasticCon
            </figcaption>
          </figure>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
