'use client';

import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';
import BookButton from '@/components/book-button';
import BrandMark from '@/components/brand-mark';
import { proceduresByCategory } from '@/lib/procedures';

const services: [string, string, string][] = [
  ['Cosmetic Surgery', '/cosmetic-surgery', 'Male Lipo 360, jawline & J-Plasma®'],
  ['Hair Restoration', '/hair-restoration', 'Scar-free FUE transplant + PRP'],
  ['Aesthetics', '/aesthetics', "Men's injectables, Kybella® & Endolift®"],
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
    if (!servicesOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setServicesOpen(false);
    };
    const onClick = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) setServicesOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [servicesOpen]);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 z-50 w-full border-b border-line/80 bg-white/92 backdrop-blur-xl"
      onMouseLeave={() => setServicesOpen(false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setServicesOpen(false);
      }}
    >
      <div aria-hidden="true" className="scroll-progress-bar h-[2px] w-full bg-blue" />
      <div className="container flex h-20 items-center justify-between">
        <Link
          href="/"
          aria-label="Atlantic Men's Surgery & MedSpa home"
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
            Men&rsquo;s Services
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
          className="flex h-11 w-11 items-center justify-center rounded-md border border-line bg-white transition-colors hover:border-blue lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
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
          className="mobile-menu max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-line/70 bg-white/98 px-4 pb-6 pt-2 backdrop-blur-xl lg:hidden"
        >
          <nav aria-label="Mobile" className="container grid">
            <Link
              href="/about"
              aria-current={isActive('/about') ? 'page' : undefined}
              className={`border-b border-line/70 py-3.5 text-sm ${isActive('/about') ? 'font-semibold text-ink' : ''}`}
            >
              About
            </Link>

            <button
              type="button"
              aria-expanded={mobileServicesOpen}
              aria-controls="mobile-services"
              onClick={() => setMobileServicesOpen((value) => !value)}
              className={`flex items-center justify-between border-b border-line/70 py-3.5 text-left text-sm ${
                isServicesActive ? 'font-semibold text-ink' : ''
              }`}
            >
              Men&rsquo;s Services
              <ChevronDown
                aria-hidden="true"
                size={16}
                className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileServicesOpen && (
              <div id="mobile-services" className="grid gap-5 border-b border-line/70 py-4 pl-4">
                {services.map(([name, href]) => (
                  <div key={href}>
                    <Link
                      href={href}
                      className={`text-sm ${isActive(href) ? 'font-semibold text-blue' : 'font-medium text-ink'}`}
                    >
                      {name}
                    </Link>
                    <ul className="mt-2 grid gap-2 pl-3">
                      {proceduresByCategory(href).map((procedure) => (
                        <li key={procedure.slug}>
                          <Link
                            href={`/procedures/${procedure.slug}`}
                            className={`text-sm ${
                              pathname === `/procedures/${procedure.slug}` ? 'text-blue' : 'text-muted'
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
                className={`border-b border-line/70 py-3.5 text-sm ${isActive(href) ? 'font-semibold text-ink' : ''}`}
              >
                {label}
              </Link>
            ))}

            <BookButton className="btn btn-primary mt-5 w-full" />
          </nav>
        </div>
      )}
    </header>
  );
}
