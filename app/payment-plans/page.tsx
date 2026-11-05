import type { Metadata } from 'next';
import CtaBanner from '@/components/cta-banner';
import SectionHeading from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'Payment Plans',
  description: "Flexible financing and payment options for male procedures at Atlantic Men's Surgery & MedSpa.",
};

export default function PaymentPlansPage() {
  return (
    <>
      <section className="section">
        <div className="container max-w-2xl">
          <SectionHeading
            as="h1"
            index="01 / Payment Plans"
            title="Straightforward financing options for your treatment plan."
          />
          <p className="mt-6 text-lg leading-8 text-muted">
            Investing in surgical contouring, FUE hair restoration, or ongoing metabolic care is a personal decision.
            Contact our Roswell office to review structured payment and patient-financing options tailored to your
            procedure plan.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
