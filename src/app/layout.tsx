import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Management Consultants | Commercial Advice for Business Growth',
  description: 'Experienced management consultants helping Australian and New Zealand business owners build better businesses. Profit improvement, operational efficiency, and long-term value.',
  keywords: 'Management Consulting, Business Growth, Profit Improvement, Australian Business, Operations, Business Value',
  openGraph: {
    title: 'Management Consultants | Commercial Advice for Business Growth',
    description: 'Real-world experience meets practical business advice. We help you build a better business today.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
