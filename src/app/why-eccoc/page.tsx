import type { Metadata } from 'next';
import WhyEccocClient from './WhyEccocClient';

export const metadata: Metadata = {
    title: 'Why ecco Consultants | Trusted Business Mentors Australia',
    description: 'Understand why Australian business owners choose ecco Consultants. Advice grounded in experience, not just theory. Start making better commercial decisions today.',
    keywords: 'Why ecco Consultants, Australian Executive Mentors, Commercial Business Strategies, Grounded Business Advice',
};

export default function Page() {
    return <WhyEccocClient />;
}
