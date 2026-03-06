import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: 'Contact ecco Consultants | Start a Conversation',
    description: 'Ready to move your business forward? Get in touch with our expert Australian business advisors for practical, experienced guidance.',
    keywords: 'Business Consultation Australia, Contact ecco Consultants, Australian Business Advice, Clayton Victoria Business Consultants',
    openGraph: {
        title: 'Contact ecco Consultants | Start a Conversation',
        description: 'Ready to move your business forward? Get in touch with our expert Australian business advisors for practical, experienced guidance.',
        url: 'https://eccoc.com.au/contact',
        siteName: 'ecco Consultants',
        locale: 'en_AU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact ecco Consultants | Start a Conversation',
        description: 'Ready to move your business forward? Get in touch with our expert Australian business advisors for practical, experienced guidance.',
    },
};

export default function Page() {
    return <ContactClient />;
}
