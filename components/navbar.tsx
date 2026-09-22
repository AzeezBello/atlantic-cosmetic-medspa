'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

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

  return (
    <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-base/90 backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="inline-flex items-center rounded-full bg-ink px-4 py-2">
          <Image
            src="/images/All White.avif"
            alt="Atlantic Cosmetic Surgery & MedSpa"
            width={250}
            height={121}
            priority
            className="h-6 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? 'page' : undefined}
              className={`text-xs tracking-wide transition-colors hover:opacity-60 ${
                pathname === href ? 'text-sky' : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-black/5 bg-base px-5 py-5 lg:hidden">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={pathname === href ? 'page' : undefined}
              className={`block border-b border-black/5 py-4 text-sm ${pathname === href ? 'text-sky' : ''}`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
