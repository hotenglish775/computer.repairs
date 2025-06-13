import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Evolution PC Repairs - Computer & Mobile Phone Repair Services | Llanelli, Swansea, Cardiff',
  description: 'Professional computer and mobile phone repair services in South Wales. Covering Llanelli, Swansea, Cardiff, Carmarthen, Ammanford, and Neath. Screen replacements, data recovery, virus removal, and custom PC builds. Fast, reliable, and affordable.',
  keywords: 'computer repair Llanelli, mobile phone repair Swansea, screen replacement Cardiff, data recovery Carmarthen, virus removal Ammanford, custom PC builds Neath, laptop repair South Wales, iPhone repair, Samsung repair, PC repair services',
  authors: [{ name: 'Evolution PC Repairs' }],
  openGraph: {
    title: 'Evolution PC Repairs - Computer & Mobile Phone Repair Services | South Wales',
    description: 'Professional computer and mobile phone repair services in South Wales. Covering Llanelli, Swansea, Cardiff, Carmarthen, Ammanford, and Neath.',
    type: 'website',
    locale: 'en_GB',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}