import type { Metadata } from 'next';
import ClarityStrategyClient from './ClarityStrategyClient';

export const metadata: Metadata = {
    title: 'Clarity in Strategy & Focus | ecco Consultants',
    description: 'We help business owners step back from the noise, regain perspective, and clarify where the business should focus — and where it shouldn’t.',
    keywords: 'Business Strategy, Commercial Objectives, Strategic Decisions, Prioritisation, Trade-offs',
    openGraph: {
        title: 'Clarity in Strategy & Focus | ecco Consultants',
        description: 'We help business owners step back from the noise, regain perspective, and clarify where the business should focus — and where it shouldn’t.',
        url: 'https://eccoc.com.au/services/clarity-in-strategy',
        siteName: 'ecco Consultants',
        locale: 'en_AU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Clarity in Strategy & Focus | ecco Consultants',
        description: 'We help business owners step back from the noise, regain perspective, and clarify where the business should focus — and where it shouldn’t.',
    },
};

export default function Page() {
    return <ClarityStrategyClient />;
}
