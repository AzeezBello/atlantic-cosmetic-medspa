import type { Metadata } from 'next';
import SectionHeading from '@/components/section-heading';
import CtaBanner from '@/components/cta-banner';

export const metadata: Metadata = {
  title: 'Payment Plans',
  description: 'Flexible payment options at Atlantic Cosmetic Surgery & MedSpa.',
};

export default function PaymentPlansPage() {
  return (
    <>
      <section className="section">
        <div className="container max-w-2xl">
          <SectionHeading as="h1" eyebrow="Payment Plans" title="Flexible options for your care." />
          <p className="mt-6 text-lg leading-8 text-muted">
            We understand that investing in your care is a personal decision, and we want cost to be one less
            thing to worry about. Contact our office to review the payment and financing options available for
            your treatment plan.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
