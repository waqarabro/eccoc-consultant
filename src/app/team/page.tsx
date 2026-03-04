import type { Metadata } from 'next';
import TeamClient from './TeamClient';

export const metadata: Metadata = {
    title: 'Our Trusted Advisors | ecco Consultants',
    description: 'Meet the team behind ecco Consultants. Top business consultants with decades of experience growing and exiting businesses.',
    keywords: 'Business Consultants Team, ecco Consultants Team, Australian Business Advisors, Experienced Consulting Partners',
};

export default function Page() {
    return <TeamClient />;
}
