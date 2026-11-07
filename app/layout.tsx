import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: {
    default: "Atlantic Men's Surgery & MedSpa",
    template: "%s | Atlantic Men's Surgery & MedSpa",
  },
  description:
    'Discreet male cosmetic surgery, FUE hair restoration, masculine jawline aesthetics, and physician-guided metabolic wellness in Roswell, GA.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <noscript>
          <style>{'[data-reveal]{opacity:1!important;transform:none!important}'}</style>
        </noscript>
        <a href="#main-content" className="skip-link visually-hidden">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="pt-16 sm:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
