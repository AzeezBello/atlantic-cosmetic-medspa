import { Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BOOKING_URL } from '@/lib/site';

const social: [string, string][] = [
  ['Instagram', 'https://www.instagram.com/realdratl/'],
  ['Facebook', 'https://www.facebook.com/realdratl'],
  ['TikTok', 'https://www.tiktok.com/@realdratl'],
];

const icons = { Instagram, Facebook };

const pages: [string, string][] = [
  ['Our Clinic', '/our-clinic'],
  ['FAQs', '/faqs'],
  ['Payment Plans', '/payment-plans'],
];

export default function Footer() {
  return (
    <footer className="bg-navy py-16 text-white">
      <div className="container grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:items-start">
        <Link href="/">
          <Image
            src="/images/All White.avif"
            alt="Atlantic Cosmetic Surgery & MedSpa"
            width={250}
            height={121}
            className="h-9 w-auto"
          />
          <p className="mt-3 text-sm opacity-70">Cosmetic Surgery & MedSpa</p>
        </Link>

        <address className="grid gap-2 text-sm not-italic opacity-80">
          <span>
            1105 Upper Hembree Rd, Suite B
            <br />
            Roswell, GA 30076
          </span>
          <a href="tel:+16786498280" className="hover:opacity-70">
            (678) 649-8280
          </a>
          <a href="mailto:info@drladipo.com" className="hover:opacity-70">
            info@drladipo.com
          </a>
        </address>

        <nav className="flex flex-col gap-3 text-sm opacity-80">
          {pages.map(([label, href]) => (
            <Link key={href} href={href} className="hover:opacity-70">
              {label}
            </Link>
          ))}
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
            Book Online
          </a>
        </nav>

        <div className="flex flex-col items-start gap-4 lg:items-end">
          <div className="flex items-center gap-4">
            {social.map(([label, href]) => {
              const Icon = icons[label as keyof typeof icons];
              return (
                <a key={label} aria-label={label} href={href} target="_blank" rel="noopener noreferrer">
                  {Icon ? <Icon size={18} /> : <span className="text-xs">{label}</span>}
                </a>
              );
            })}
          </div>
          <span className="text-xs opacity-60">© 2026 Atlantic Cosmetic Surgery & MedSpa</span>
        </div>
      </div>
    </footer>
  );
}
