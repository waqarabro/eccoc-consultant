import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
    title: 'About ecco Consultants | Business Advisory Experts',
    description: 'Built by Business Owners, for Business Owners. ecco Consultants is built on the belief that real-world experience is the best foundation for practical advice.',
    keywords: 'Business Advisory Experts, Australian Business Owners, Senior Business Mentors, ecco Consultants Foundation',
    openGraph: {
        title: 'About ecco Consultants | Business Advisory Experts',
        description: 'Built by Business Owners, for Business Owners. ecco Consultants is built on the belief that real-world experience is the best foundation for practical advice.',
        url: 'https://eccoc.com.au/about',
        siteName: 'ecco Consultants',
        locale: 'en_AU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About ecco Consultants | Business Advisory Experts',
        description: 'Built by Business Owners, for Business Owners. ecco Consultants is built on the belief that real-world experience is the best foundation for practical advice.',
    },
};

export default function Page() {
    return <AboutClient />;
}
