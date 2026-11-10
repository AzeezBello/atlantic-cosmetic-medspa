'use client';

import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';
import BookButton from '@/components/book-button';
import BrandMark from '@/components/brand-mark';
import { proceduresByCategory } from '@/lib/procedures';

const services: [string, string, string][] = [
  ['Cosmetic Surgery', '/cosmetic-surgery', 'Lipo 360, jawline & J-Plasma®'],
  ['Hair Restoration', '/hair-restoration', 'Scar-free FUE transplant + PRP'],
  ['Aesthetics', '/aesthetics', 'Injectables, Kybella® & Endolift®'],
  ['Wellness', '/wellness', 'GLP-1 weight loss, IV & regenerative'],
];

const links: [string, string][] = [
  ['About', '/about'],
  ['Results', '/results'],
  ['FAQs', '/faqs'],
];

const linkClass =
  'relative py-2 text-xs font-medium tracking-wide transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-blue after:transition-transform hover:text-ink hover:after:scale-x-100';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const panelId = useId();
  const pathname = usePathname();

  const isServicesActive =
    pathname.startsWith('/procedures/') || services.some(([, href]) => pathname === href);
  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!servicesOpen && !open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesOpen(false);
        setOpen(false);
      }
    };
    const onClick = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
        setOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [servicesOpen, open]);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 z-50 w-full border-b border-line/80 bg-white/94 backdrop-blur-xl"
      onMouseLeave={() => setServicesOpen(false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setServicesOpen(false);
      }}
    >
      <div aria-hidden="true" className="scroll-progress-bar h-[2px] w-full bg-blue" />
      <div className="container flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          aria-label="Atlantic Cosmetic Surgery & MedSpa home"
          className="inline-flex shrink-0 items-center transition-opacity hover:opacity-85"
        >
          <BrandMark tone="dark" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          <Link
            href="/about"
            aria-current={isActive('/about') ? 'page' : undefined}
            className={`${linkClass} ${isActive('/about') ? 'text-ink after:scale-x-100' : 'text-muted'}`}
          >
            About
          </Link>

          <button
            type="button"
            aria-expanded={servicesOpen}
            aria-controls={panelId}
            onClick={() => setServicesOpen((value) => !value)}
            onMouseEnter={() => setServicesOpen(true)}
            onFocus={() => setServicesOpen(true)}
            className={`${linkClass} inline-flex items-center gap-1.5 ${
              isServicesActive || servicesOpen ? 'text-ink after:scale-x-100' : 'text-muted'
            }`}
          >
            Services
            <ChevronDown
              aria-hidden="true"
              size={14}
              className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {links.slice(1).map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? 'page' : undefined}
              className={`${linkClass} ${isActive(href) ? 'text-ink after:scale-x-100' : 'text-muted'}`}
            >
              {label}
            </Link>
          ))}

          <BookButton className="btn btn-primary min-h-11 px-5 text-xs" label="Book Online" />
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-line bg-white text-ink transition-colors hover:border-blue lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </div>

      {/* Desktop services submenu */}
      {servicesOpen && (
        <div
          id={panelId}
          className="mobile-menu absolute inset-x-0 top-full hidden border-b border-line bg-white shadow-[0_24px_48px_rgba(5,17,32,0.08)] lg:block"
        >
          <div className="container grid grid-cols-4 gap-10 py-10">
            {services.map(([name, href, summary]) => (
              <div key={href} className="min-w-0">
                <Link
                  href={href}
                  className="group block border-b border-line pb-4 transition-colors hover:text-blue"
                >
                  <span className="font-serif text-xl">{name}</span>
                  <span className="mt-1 block text-xs leading-5 text-muted">{summary}</span>
                </Link>
                <ul className="mt-4 grid gap-2.5">
                  {proceduresByCategory(href).map((procedure) => (
                    <li key={procedure.slug}>
                      <Link
                        href={`/procedures/${procedure.slug}`}
                        aria-current={pathname === `/procedures/${procedure.slug}` ? 'page' : undefined}
                        className={`text-sm transition-colors hover:text-blue ${
                          pathname === `/procedures/${procedure.slug}` ? 'font-medium text-blue' : 'text-ink/85'
                        }`}
                      >
                        {procedure.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-navigation"
          className="mobile-menu max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-line/80 bg-white pb-6 pt-2 shadow-[0_24px_48px_rgba(5,17,32,0.12)] sm:max-h-[calc(100svh-5rem)] lg:hidden"
        >
          <nav aria-label="Mobile" className="container grid">
            <Link
              href="/about"
              aria-current={isActive('/about') ? 'page' : undefined}
              className={`flex min-h-12 items-center border-b border-line/70 text-sm ${
                isActive('/about') ? 'font-semibold text-blue' : 'font-medium text-ink'
              }`}
            >
              About
            </Link>

            <button
              type="button"
              aria-expanded={mobileServicesOpen}
              aria-controls="mobile-services"
              onClick={() => setMobileServicesOpen((value) => !value)}
              className={`flex min-h-12 items-center justify-between border-b border-line/70 text-left text-sm ${
                isServicesActive ? 'font-semibold text-blue' : 'font-medium text-ink'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                aria-hidden="true"
                size={16}
                className={`text-muted transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileServicesOpen && (
              <div id="mobile-services" className="grid gap-3 border-b border-line/70 py-4">
                {services.map(([name, href, summary]) => (
                  <div key={href} className="rounded-lg border border-line bg-tint/60 p-3.5">
                    <Link
                      href={href}
                      className={`block font-serif text-base ${
                        isActive(href) ? 'text-blue' : 'text-ink'
                      }`}
                    >
                      {name}
                    </Link>
                    <p className="mt-0.5 text-xs text-muted">{summary}</p>
                    <ul className="mt-2.5 flex flex-wrap gap-1.5">
                      {proceduresByCategory(href).map((procedure) => (
                        <li key={procedure.slug}>
                          <Link
                            href={`/procedures/${procedure.slug}`}
                            className={`inline-flex min-h-8 items-center rounded border px-2.5 py-1 text-xs transition-colors ${
                              pathname === `/procedures/${procedure.slug}`
                                ? 'border-blue bg-blue text-white'
                                : 'border-line bg-white text-ink/85 hover:border-blue hover:text-blue'
                            }`}
                          >
                            {procedure.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {links.slice(1).map(([label, href]) => (
              <Link
                key={href}
                href={href}
                aria-current={isActive(href) ? 'page' : undefined}
                className={`flex min-h-12 items-center border-b border-line/70 text-sm ${
                  isActive(href) ? 'font-semibold text-blue' : 'font-medium text-ink'
                }`}
              >
                {label}
              </Link>
            ))}

            <Link
              href="/our-clinic"
              aria-current={isActive('/our-clinic') ? 'page' : undefined}
              className={`flex min-h-12 items-center border-b border-line/70 text-sm ${
                isActive('/our-clinic') ? 'font-semibold text-blue' : 'font-medium text-ink'
              }`}
            >
              Our Roswell Clinic
            </Link>

            <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
              <BookButton className="btn btn-primary w-full" />
              <a href="tel:+16786498280" className="btn btn-outline w-full">
                Call (678) 649-8280
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
