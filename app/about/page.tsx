import type { Metadata } from 'next';
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
        <div className="container grid gap-14 lg:grid-cols-2 lg:items-start">
          <SectionHeading as="h1" eyebrow="Meet Dr. Ladipo" title="Olanrewaju Ladipo, MD" />
          <div className="grid gap-6 text-lg leading-8 text-muted">
            <p>
              Born in Lagos, Nigeria, Dr. Ladipo earned his MD from Lagos State University College of Medicine and
              completed Internal Medicine training at Newark Beth Israel Medical Center in Newark, NJ. He went on
              to specialize in reconstructive microsurgery at Queen Mary University of London, and completed a
              Plastic Surgery residency at Universidade Brasil in São Paulo, Brazil — where he currently serves as
              a Senior Plastic Surgery Fellow. He is an associate member of the International Society of Hair
              Restoration Surgery.
            </p>
            <p>
              Dr. Ladipo specializes in body and facial procedures with particular expertise in reconstructive
              microsurgery, and offers hair restoration surgery combined with Platelet-Rich Plasma (PRP) therapy
              to support healing and enhance transplant outcomes.
            </p>
            <p>
              His practice is guided by &ldquo;hard work, dedication, and passion&rdquo; alongside a
              &ldquo;commitment to excellence.&rdquo; Beyond the practice, Dr. Ladipo takes part in annual
              international medical missions, providing care to burn patients at burn centers around the world.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
