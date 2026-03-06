import type { Metadata } from 'next';
import ScalableOperationsClient from './ScalableOperationsClient';

export const metadata: Metadata = {
    title: 'Efficient, Scalable Operations | ecco Consultants',
    description: 'We help growing businesses build efficient, scalable operations by strengthening systems, clarifying accountability, and designing sustainable operating rhythms.',
    keywords: 'Scalable Business Operations, Efficiency Optimization, Business Scaling, Operational Bottlenecks, Workflow Design',
    openGraph: {
        title: 'Efficient, Scalable Operations | ecco Consultants',
        description: 'We help growing businesses build efficient, scalable operations by strengthening systems, clarifying accountability, and designing sustainable operating rhythms.',
        url: 'https://eccoc.com.au/services/scalable-operations',
        siteName: 'ecco Consultants',
        locale: 'en_AU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Efficient, Scalable Operations | ecco Consultants',
        description: 'We help growing businesses build efficient, scalable operations by strengthening systems, clarifying accountability, and designing sustainable operating rhythms.',
    },
};

export default function Page() {
    return <ScalableOperationsClient />;
}
