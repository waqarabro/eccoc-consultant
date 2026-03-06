import type { Metadata } from 'next';
import HomeClient from './HomeClient';
import { JSON_LD_SCHEMA } from '@/lib/schema';

export const metadata: Metadata = {
    title: 'Top Business Consultant Australia | ecco Consultants',
    description: 'Achieve predictable growth and stronger profit with Australia\'s top business consultants. We bring real-world experience and strategic clarity to scale your operations.',
    keywords: 'Business Consultant, Management Consultant, Australian Business Consultant, Scale Business Australia, Profit Growth Strategy, Business Advisory',
    openGraph: {
        title: 'Top Business Consultant Australia | ecco Consultants',
        description: 'Achieve predictable growth and stronger profit with Australia\'s top business consultants. We bring real-world experience and strategic clarity to scale your operations.',
        url: 'https://eccoc.com.au',
        siteName: 'ecco Consultants',
        images: [
            {
                url: 'https://eccoc.com.au/api/og', // Will fallback graciously if not present
                width: 1200,
                height: 630,
                alt: 'ecco Consultants - Top Business Consultant',
            },
        ],
        locale: 'en_AU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Top Business Consultant Australia | ecco Consultants',
        description: 'Achieve predictable growth and stronger profit with Australia\'s top business consultants. We bring real-world experience and strategic clarity to scale your operations.',
    },
};

export default function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_SCHEMA) }}
            />
            <HomeClient />
        </>
    );
}
