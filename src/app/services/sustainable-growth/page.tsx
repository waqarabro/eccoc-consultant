import type { Metadata } from 'next';
import SustainableGrowthClient from './SustainableGrowthClient';

export const metadata: Metadata = {
    title: 'Predictable, Sustainable Growth | ecco Consultants',
    description: 'We help you grow with intent, control, and alignment, ensuring foundations are strong before pushing harder.',
    keywords: 'Sustainable Business Growth, Scaling Strategy, Financial Discipline, Operational Alignment, Business Expansion',
    openGraph: {
        title: 'Predictable, Sustainable Growth | ecco Consultants',
        description: 'We help you grow with intent, control, and alignment, ensuring foundations are strong before pushing harder.',
        url: 'https://eccoc.com.au/services/sustainable-growth',
        siteName: 'ecco Consultants',
        locale: 'en_AU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Predictable, Sustainable Growth | ecco Consultants',
        description: 'We help you grow with intent, control, and alignment, ensuring foundations are strong before pushing harder.',
    },
};

export default function Page() {
    return <SustainableGrowthClient />;
}
