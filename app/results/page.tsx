import type { Metadata } from 'next';
import SectionHeading from '@/components/section-heading';
import CtaBanner from '@/components/cta-banner';

export const metadata: Metadata = {
  title: 'Results',
  description: 'Patient results and stories from Atlantic Cosmetic Surgery & MedSpa.',
};

export default function ResultsPage() {
  return (
    <>
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            as="h1"
            eyebrow="Results"
            title="Your story is personal."
            text="Patient photography and testimonials should only be published after appropriate approval and consent. Replace these placeholders with approved assets before launch."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="placeholder aspect-[4/5] rounded-3xl" aria-hidden="true" />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
