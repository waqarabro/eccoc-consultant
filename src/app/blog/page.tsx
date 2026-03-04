import type { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
    title: 'Blog & Perspectives | ecco Consultants Australia',
    description: 'Read the latest insights and business strategies from the expert team at ecco Consultants. Practical advice for operational scale and profit improvement.',
    keywords: 'ecco Consultants Blog, Australian Business Blog, Business Growth Strategies, Exit Planning Articles',
};

export default function Page() {
    return <BlogClient />;
}
