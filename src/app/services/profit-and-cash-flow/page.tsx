import type { Metadata } from 'next';
import ProfitCashFlowClient from './ProfitCashFlowClient';

export const metadata: Metadata = {
    title: 'Stronger Profit & Cash Flow | ecco Consultants',
    description: 'We help you identify profit leakage, review pricing and cost structures, and improve overall cash flow management and financial visibility.',
    keywords: 'Business Cash Flow, Profit Improvement, Pricing Strategy, Financial Visbility, Cost Structure',
    openGraph: {
        title: 'Stronger Profit & Cash Flow | ecco Consultants',
        description: 'We help you identify profit leakage, review pricing and cost structures, and improve overall cash flow management and financial visibility.',
        url: 'https://eccoc.com.au/services/profit-and-cash-flow',
        siteName: 'ecco Consultants',
        locale: 'en_AU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Stronger Profit & Cash Flow | ecco Consultants',
        description: 'We help you identify profit leakage, review pricing and cost structures, and improve overall cash flow management and financial visibility.',
    },
};

export default function Page() {
    return <ProfitCashFlowClient />;
}
