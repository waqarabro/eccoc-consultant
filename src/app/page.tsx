import type { Metadata } from 'next';
import HomeClient from './HomeClient';
import { JSON_LD_SCHEMA } from '@/lib/schema';

export const metadata: Metadata = {
    title: 'Top Business Consultant Australia | ecco Consultants',
    description: 'Helping scale Australian businesses. We bring real-world experience, strategic clarity, and operational insight to drive sustained profit improvement.',
    keywords: 'Business Consultant, Management Consultant, Australian Business Consultant, Scale Business Australia, Profit Growth Strategy',
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
