import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
    title: 'About ecco Consultants | Business Advisory Experts',
    description: 'Built by Business Owners, for Business Owners. ecco Consultants is built on the belief that real-world experience is the best foundation for practical advice.',
    keywords: 'About ecco Consultants, Trusted Business Advisors, Australian Business Owners, Senior Business Mentors',
};

export default function Page() {
    return <AboutClient />;
}
