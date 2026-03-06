import type { Metadata } from 'next';
import WhyEccocClient from './WhyEccocClient';

export const metadata: Metadata = {
    title: 'Why ecco Consultants | Trusted Business Mentors Australia',
    description: 'Understand why Australian business owners choose ecco Consultants. Get advice grounded in experience from trusted business mentors in Australia.',
    keywords: 'Business Mentors Australia, Why ecco Consultants, Australian Executive Mentors, Commercial Business Strategies, Grounded Business Advice',
    openGraph: {
        title: 'Why ecco Consultants | Trusted Business Mentors Australia',
        description: 'Understand why Australian business owners choose ecco Consultants. Get advice grounded in experience from trusted business mentors in Australia.',
        url: 'https://eccoc.com.au/why-eccoc',
        siteName: 'ecco Consultants',
        locale: 'en_AU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Why ecco Consultants | Trusted Business Mentors Australia',
        description: 'Understand why Australian business owners choose ecco Consultants. Get advice grounded in experience from trusted business mentors in Australia.',
    },
};

export default function Page() {
    return <WhyEccocClient />;
}
