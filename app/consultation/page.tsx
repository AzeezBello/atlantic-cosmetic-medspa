import { Mail, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import ConsultationForm from '@/components/consultation-form';
import { BOOKING_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Consultation',
  description: 'Book a consultation or contact Atlantic Cosmetic Surgery & MedSpa in Roswell, GA.',
};

export default function ConsultationPage() {
  return (
    <section className="section">
      <div className="container grid gap-14 lg:grid-cols-2">
        <div>
          <div className="eyebrow">Consultation</div>
          <h1 className="text-5xl leading-tight">Let&rsquo;s talk about your goals.</h1>
          <p className="mt-6 max-w-lg leading-7 text-muted">1105 Upper Hembree Rd, Suite B, Roswell, GA 30076</p>
          <a href="tel:+16786498280" className="mt-4 inline-flex items-center gap-2 text-sm">
            <Phone size={16} /> (678) 649-8280
          </a>
          <a href="mailto:info@drladipo.com" className="mt-3 flex items-center gap-2 text-sm">
            <Mail size={16} /> info@drladipo.com
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-8"
          >
            Book Now
          </a>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[.12em] text-muted">Or send us a message</p>
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}
