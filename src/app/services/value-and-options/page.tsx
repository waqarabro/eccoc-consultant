import type { Metadata } from 'next';
import ValueOptionsClient from './ValueOptionsClient';

export const metadata: Metadata = {
    title: 'Business Built for Value & Options | ecco Consultants',
    description: 'We help growing businesses build real value by reducing dependency on the owner, strengthening business drivers, and improving resilience.',
    keywords: 'Business Value Creation, Succession Planning, Owner Dependency, Business Resilience, Value Options',
    openGraph: {
        title: 'Business Built for Value & Options | ecco Consultants',
        description: 'We help growing businesses build real value by reducing dependency on the owner, strengthening business drivers, and improving resilience.',
        url: 'https://eccoc.com.au/services/value-and-options',
        siteName: 'ecco Consultants',
        locale: 'en_AU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Business Built for Value & Options | ecco Consultants',
        description: 'We help growing businesses build real value by reducing dependency on the owner, strengthening business drivers, and improving resilience.',
    },
};

export default function Page() {
    return <ValueOptionsClient />;
}
