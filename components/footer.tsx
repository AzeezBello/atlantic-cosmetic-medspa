import { Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
  ['Contact', '/consultation'],
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink py-14 text-base">
      <div className="container grid gap-10 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
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

        <nav className="flex flex-col gap-3 text-sm opacity-80">
          {pages.map(([label, href]) => (
            <Link key={href} href={href} className="hover:opacity-70">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-start gap-4 md:items-end">
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
