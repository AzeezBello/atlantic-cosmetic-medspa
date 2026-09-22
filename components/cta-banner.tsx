import Link from 'next/link';
import { BOOKING_URL } from '@/lib/site';

export default function CtaBanner() {
  return (
    <section className="section bg-ink text-base">
      <div className="container flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[.18em] text-sky">Consultation</div>
          <h2 className="mt-2 text-4xl leading-tight md:text-5xl">Let&rsquo;s talk about your goals.</h2>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Book a Consultation
          </a>
          <Link href="/consultation" className="text-xs uppercase tracking-[.12em] hover:opacity-70">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
