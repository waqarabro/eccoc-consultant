import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://eccoc.com.au'),
  title: {
    default: 'ecco Consultants | Top Business Consultants in Australia',
    template: '%s | ecco Consultants',
  },
  description: 'Leading Business Consultants in Australia & New Zealand. We provide commercial advice, profit improvement, and scalable operational strategies for business owners.',
  keywords: ['Business Consultant', 'Business Consultant Australia', 'Management Consulting', 'Business Growth Strategy', 'Profit Improvement', 'Operational Efficiency', 'Melbourne Business Consultants', 'Sydney Business Advisory'],
  authors: [{ name: 'ecco Consultants' }],
  creator: 'ecco Consultants',
  publisher: 'ecco Consultants',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ecco Consultants | Business Consultants Australia',
    description: 'Expert Business Consultants offering real-world commercial advice to scale Australian businesses. Build predictability and long-term value today.',
    url: 'https://eccoc.com.au',
    siteName: 'ecco Consultants',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ecco Consultants | Australian Business Growth Experts',
    description: 'Practical business advice grounded in real experience. Partner with us to scale your business operations.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
