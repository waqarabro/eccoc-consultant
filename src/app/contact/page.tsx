import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
    title: 'Contact ecco Consultants | Start a Conversation',
    description: 'Ready to move your business forward? Get in touch with our expert Australian business advisors for practical, experienced guidance.',
    keywords: 'Contact ecco Consultants, Business Consultation Australia, Australian Business Advice, Clayton Victoria Business Consultants',
};

export default function Page() {
    return <ContactClient />;
}
