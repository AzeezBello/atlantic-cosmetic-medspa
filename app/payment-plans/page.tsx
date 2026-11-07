import type { Metadata } from 'next';
import CtaBanner from '@/components/cta-banner';
import SectionHeading from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'Payment Plans',
  description: "Flexible financing and payment options for male procedures at Atlantic Men's Surgery & MedSpa.",
};

const steps = [
  [
    '01 / Private Consultation',
    'Meet one-on-one at our Roswell clinic to evaluate anatomy, candidacy, and your exact surgical, hair restoration, or metabolic treatment scope.',
  ],
  [
    '02 / Transparent Written Quote',
    'Receive a clear breakdown of procedure fees, facility costs, and post-treatment follow-up before making any commitment.',
  ],
  [
    '03 / Flexible Payment Coordination',
    'Our patient coordinator reviews payment timelines and available financing options so you can plan your procedure on a predictable schedule.',
  ],
] as const;

export default function PaymentPlansPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <SectionHeading
            as="h1"
            index="01 / Payment Plans"
            title="Straightforward financing options for your treatment plan."
            text="Investing in surgical contouring, FUE hair restoration, or ongoing metabolic care is a personal decision. Contact our Roswell office to review structured payment and patient-financing options tailored to your procedure plan."
          />

          <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3">
            {steps.map(([title, body]) => (
              <article key={title} className="card">
                <h2 className="text-xl leading-snug">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
