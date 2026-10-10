'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { BOOKING_URL } from '@/lib/site';

const links: [string, string][] = [
  ['About', '/about'],
  ['Surgery', '/cosmetic-surgery'],
  ['Aesthetics', '/aesthetics'],
  ['Hair', '/hair-restoration'],
  ['Wellness', '/wellness'],
  ['Results', '/results'],
  ['Consultation', '/consultation'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || (href === '/cosmetic-surgery' && pathname.startsWith('/procedures/'));

  return (
    <header className="fixed top-0 z-50 w-full border-b border-line/70 bg-base/90 shadow-[0_4px_24px_rgba(18,41,59,0.04)] backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" aria-label="Atlantic Cosmetic Surgery & MedSpa home" className="inline-flex shrink-0 items-center rounded-full bg-ink px-4 py-2 transition-transform hover:scale-[1.02]">
          <Image
            src="/images/All White.avif"
            alt="Atlantic Cosmetic Surgery & MedSpa"
            width={250}
            height={121}
            priority
            className="h-8 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? 'page' : undefined}
              className={`relative py-2 text-xs tracking-wide transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-sky after:transition-transform hover:text-ink hover:after:scale-x-100 ${
                isActive(href) ? 'text-ink after:scale-x-100' : 'text-muted'
              }`}
            >
              {label}
            </Link>
          ))}
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary min-h-11 px-5 text-xs">
          Book now
          </a>
        </nav>
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/80 transition-colors hover:bg-white lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div id="mobile-navigation" className="mobile-menu border-t border-line/70 bg-base/95 px-4 pb-5 pt-2 shadow-xl backdrop-blur-xl lg:hidden">
          <nav aria-label="Mobile navigation" className="container grid">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={isActive(href) ? 'page' : undefined}
              className={`border-b border-line/70 py-3.5 text-sm transition-colors hover:pl-1 hover:text-muted ${
                isActive(href) ? 'font-semibold text-ink' : ''
              }`}
            >
              {label}
            </Link>
          ))}
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4 w-full">
            Book a Consultation
          </a>
          </nav>
        </div>
      )}
    </header>
  );
}
