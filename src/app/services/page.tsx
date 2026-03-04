import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
    title: 'Business Consulting Services Australia | ecco Consultants',
    description: 'Practical Strategy, Operations, Profit Improvement, High-Performance Teams, and Sustainable Growth services tailored for Australian businesses.',
    keywords: 'Business Consulting Services, Operational Scalability, Growth Strategy, Profit Cash Flow Improvement, Value and Options Strategy',
};

export default function Page() {
    return <ServicesClient />;
}
