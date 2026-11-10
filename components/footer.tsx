import { Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';
import BrandMark from '@/components/brand-mark';
import { BOOKING_URL } from '@/lib/site';

const social: [string, string][] = [
  ['Instagram', 'https://www.instagram.com/realdratl/'],
  ['Facebook', 'https://www.facebook.com/realdratl'],
  ['TikTok', 'https://www.tiktok.com/@realdratl'],
];

const icons = { Instagram, Facebook };

const pages: [string, string][] = [
  ['Our Clinic', '/our-clinic'],
  ['Results', '/results'],
  ['FAQs', '/faqs'],
  ['Payment Plans', '/payment-plans'],
];

export default function Footer() {
  return (
    <footer className="bg-deep py-16 text-white border-t border-white/10">
      <div className="container grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:items-start">
        <div>
          <Link href="/" aria-label="Atlantic Cosmetic Surgery & MedSpa home" className="inline-block">
            <BrandMark tone="light" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">
            Surgical body &amp; jawline contouring, FUE hair restoration, facial aesthetics, and physician-directed
            metabolic care.
          </p>
        </div>

        <address className="grid gap-2.5 text-sm not-italic text-white/80">
          <span>
            1105 Upper Hembree Rd, Suite B
            <br />
            Roswell, GA 30076
          </span>
          <a href="tel:+16786498280" className="py-1 transition-colors hover:text-sky">
            (678) 649-8280
          </a>
          <a href="mailto:info@drladipo.com" className="py-1 transition-colors hover:text-sky">
            info@drladipo.com
          </a>
        </address>

        <nav aria-label="Footer" className="flex flex-col gap-3 text-sm text-white/80">
          {pages.map(([label, href]) => (
            <Link key={href} href={href} className="py-0.5 transition-colors hover:text-sky">
              {label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="py-0.5 transition-colors hover:text-sky"
          >
            Book Online
          </a>
        </nav>

        <div className="flex flex-col items-start gap-4 lg:items-end">
          <div className="flex items-center gap-2">
            {social.map(([label, href]) => {
              const Icon = icons[label as keyof typeof icons];
              return (
                <a
                  key={label}
                  aria-label={`${label} (opens in a new tab)`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-white/14 px-3 text-white/80 transition-colors hover:border-sky hover:text-white"
                >
                  {Icon ? <Icon aria-hidden="true" size={16} /> : <span className="text-xs">{label}</span>}
                </a>
              );
            })}
          </div>
          <span className="text-xs text-white/55">© 2026 Atlantic Cosmetic Surgery &amp; MedSpa</span>
        </div>
      </div>
    </footer>
  );
}
