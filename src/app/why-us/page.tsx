import type { Metadata } from 'next';
import WhyUsClient from './WhyUsClient';

export const metadata: Metadata = {
    title: 'Why Us | Grounded Australian Business Advisors | ecco Consultants',
    description: 'Our DNA is rooted in truth over comfort, battle-tested execution, and outcome-obsessed advisory. The anti-consultant approach for Australian business owners.',
    keywords: 'Why us Business Consultant, Anti-Consultant Business Advice, Top Australian Business Growth Advisors',
};

export default function Page() {
    return <WhyUsClient />;
}
