import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: {
    default: 'Atlantic Cosmetic Surgery & MedSpa',
    template: '%s | Atlantic Cosmetic Surgery & MedSpa',
  },
  description:
    'Be healthy, beautiful, and happy. A modern cosmetic surgery and MedSpa experience in Roswell, GA, focused on personalized care and thoughtful treatment planning.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
