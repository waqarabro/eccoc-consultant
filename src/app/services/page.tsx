import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
    title: 'Business Consulting Services Australia | ecco Consultants',
    description: 'Practical Strategy, Operations, Profit Improvement, High-Performance Teams, and Sustainable Growth services tailored for Australian businesses.',
    keywords: 'Business Consulting Services, Operational Scalability, Growth Strategy, Profit Cash Flow Improvement, Value and Options Strategy',
    openGraph: {
        title: 'Business Consulting Services Australia | ecco Consultants',
        description: 'Practical Strategy, Operations, Profit Improvement, High-Performance Teams, and Sustainable Growth services tailored for Australian businesses.',
        url: 'https://eccoc.com.au/services',
        siteName: 'ecco Consultants',
        locale: 'en_AU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Business Consulting Services Australia | ecco Consultants',
        description: 'Practical Strategy, Operations, Profit Improvement, High-Performance Teams, and Sustainable Growth services tailored for Australian businesses.',
    },
};

export default function Page() {
    return <ServicesClient />;
}
