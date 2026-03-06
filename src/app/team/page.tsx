import type { Metadata } from 'next';
import TeamClient from './TeamClient';

export const metadata: Metadata = {
    title: 'Our Trusted Business Advisors | ecco Consultants',
    description: 'Meet the team behind ecco Consultants. Top business consultants and trusted advisors with decades of experience growing and exiting businesses.',
    keywords: 'Trusted Business Advisors, Business Consultants Team, ecco Consultants Team, Australian Business Advisors, Experienced Consulting Partners',
    openGraph: {
        title: 'Our Trusted Business Advisors | ecco Consultants',
        description: 'Meet the team behind ecco Consultants. Top business consultants and trusted advisors with decades of experience growing and exiting businesses.',
        url: 'https://eccoc.com.au/team',
        siteName: 'ecco Consultants',
        locale: 'en_AU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Our Trusted Business Advisors | ecco Consultants',
        description: 'Meet the team behind ecco Consultants. Top business consultants and trusted advisors with decades of experience growing and exiting businesses.',
    },
};

export default function Page() {
    return <TeamClient />;
}
