import type { Metadata } from 'next';
import AlignedTeamsClient from './AlignedTeamsClient';

export const metadata: Metadata = {
    title: 'Aligned, High-Performance Teams | ecco Consultants',
    description: 'We help growing businesses build aligned, high-performance teams by creating clarity, consistency, and shared understanding.',
    keywords: 'High-Performance Teams, Business Alignment, Leadership Effectiveness, Team Accountability, Australian Business Consultant',
    openGraph: {
        title: 'Aligned, High-Performance Teams | ecco Consultants',
        description: 'We help growing businesses build aligned, high-performance teams by creating clarity, consistency, and shared understanding.',
        url: 'https://eccoc.com.au/services/aligned-high-performance-teams',
        siteName: 'ecco Consultants',
        locale: 'en_AU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Aligned, High-Performance Teams | ecco Consultants',
        description: 'We help growing businesses build aligned, high-performance teams by creating clarity, consistency, and shared understanding.',
    },
};

export default function Page() {
    return <AlignedTeamsClient />;
}
