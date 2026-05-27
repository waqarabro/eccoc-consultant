'use client';

import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, User, ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';
import Section from '@/components/Section';
import FinalCTA from '@/components/FinalCTA';
import ContactForm from '@/components/ContactForm';
import { BLOG_POSTS } from '@/lib/blogData';
import styles from './page.module.css';

const CATEGORIES = [
    { label: 'All Articles', slug: 'all' },
    { label: 'Profitability & Business Performance', slug: 'profitability' },
    { label: 'Marketing & Sales Growth', slug: 'marketing' },
    { label: 'Operations & Efficiency', slug: 'operations' },
    { label: 'Preparing a Business for Sale & Exit Planning', slug: 'exit-planning' },
    { label: 'People & Leadership', slug: 'people' }
];

const CATEGORY_MAP: Record<string, string> = {
    'profitability': 'Profitability & Business Performance',
    'marketing': 'Marketing & Sales Growth',
    'operations': 'Operations & Efficiency',
    'exit-planning': 'Preparing a Business for Sale & Exit Planning',
    'people': 'People & Leadership'
};

function BlogContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const activeCategorySlug = searchParams.get('category') || 'all';

    const sortedPosts = [...BLOG_POSTS].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const filteredPosts = activeCategorySlug === 'all'
        ? sortedPosts
        : sortedPosts.filter(post => post.category === CATEGORY_MAP[activeCategorySlug]);

    const handleCategoryChange = (slug: string) => {
        if (slug === 'all') {
            router.push('/blog');
        } else {
            router.push(`/blog?category=${slug}`);
        }
    };

    return (
        <main className={styles.main}>
            {/* HERO SECTION */}
            <div className={styles.hero}>
                <motion.div
                    className={styles.heroContent}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1>Latest Articles</h1>
                    <p>Fresh perspectives and practical advice for business owners</p>
                </motion.div>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
            </div>

            {/* ABOVE THE FOLD — GROWTH BANNER */}
            <div className={styles.growthBanner}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.growthBannerInner}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className={styles.growthTitle}>Create Consistent, Predictable Growth</h2>
                        <p className={styles.growthText}>
                            Many businesses grow through referrals, relationships, and opportunistic wins.
                        </p>
                        <p className={styles.growthText}>
                            That works — until it doesn&apos;t.
                        </p>
                        <p className={styles.growthText}>
                            Growth becomes inconsistent, difficult to forecast, and heavily dependent on a small number of clients or channels.
                        </p>
                        <p className={styles.growthText}>
                            At ecco Consultants, we help business owners move from unpredictable growth to a structured, repeatable approach to generating and converting opportunities.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* BELOW THE FOLD — FAQ / ARTICLE LINKS */}
            <div className={styles.faqSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.faqGrid}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>Why isn&apos;t my marketing delivering results?</h3>
                            <p className={styles.faqAnswer}>
                                This is one of the most common questions business owners ask. When the marketing activity is happening but the outcomes don&apos;t reflect the effort or investment, here are a couple of articles you might find helpful:
                            </p>
                            <ul className={styles.faqLinks}>
                                <li><a href="https://www.eccoc.com.au/why-your-marketing-isnt-delivering-results-and-how-to-fix-it/" target="_blank" rel="noopener noreferrer">Why Your Marketing Isn&apos;t Delivering Results (And How to Fix It)</a></li>
                                <li><a href="https://www.eccoc.com.au/10-things-that-can-sink-your-marketing-program/" target="_blank" rel="noopener noreferrer">10 Things That Can Sink Your Marketing Program</a></li>
                            </ul>
                            <p className={styles.faqFooter}>These articles break down the common structural issues that prevent marketing from generating consistent results.</p>
                        </div>

                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>How do I generate more leads that actually convert?</h3>
                            <p className={styles.faqAnswer}>
                                Many businesses focus on lead volume; however, not all leads are equal. The goal is not just more leads, but better quality opportunities that convert into customers. If you want to maximise your lead generation efforts, this article is worth a read:
                            </p>
                            <ul className={styles.faqLinks}>
                                <li><a href="https://www.eccoc.com.au/the-science-of-customer-acquisition-how-to-get-more-leads-that-convert/" target="_blank" rel="noopener noreferrer">The Science of Customer Acquisition: How to Get More Leads That Convert</a></li>
                            </ul>
                        </div>

                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>Why aren&apos;t we converting enough sales?</h3>
                            <p className={styles.faqAnswer}>
                                Even with a steady flow of leads, many businesses struggle to convert them into paying customers. This is often where growth breaks down. If you are working hard to get the leads, this article may help you bring them over the line:
                            </p>
                            <ul className={styles.faqLinks}>
                                <li><a href="https://www.eccoc.com.au/weak-sales-conversion-rates-turning-leads-into-loyal-customers/" target="_blank" rel="noopener noreferrer">Weak Sales Conversion Rates: Turning Leads into Loyal Customers</a></li>
                            </ul>
                        </div>

                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>Are we targeting the right market?</h3>
                            <p className={styles.faqAnswer}>
                                Trying to appeal to everyone often results in weak positioning and poor conversion. Businesses that specialise tend to attract better-fit clients, convert more effectively, and command stronger pricing. This article helps provide that focus:
                            </p>
                            <ul className={styles.faqLinks}>
                                <li><a href="https://www.eccoc.com.au/the-power-of-specialisation-how-succeeding-in-a-niche-market-drives-business-value/" target="_blank" rel="noopener noreferrer">The Power of Specialisation: How Succeeding in a Niche Market Drives Business Value</a></li>
                            </ul>
                        </div>

                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>Why are we losing customers — and how do we fix it?</h3>
                            <p className={styles.faqAnswer}>
                                Growth isn&apos;t just about acquisition. If customers are leaving faster than you&apos;re replacing them, growth becomes difficult and expensive. This article will help you measure that impact on your business:
                            </p>
                            <ul className={styles.faqLinks}>
                                <li><a href="https://www.eccoc.com.au/how-to-measure-customer-churn-and-why-its-critical-to-your-business/" target="_blank" rel="noopener noreferrer">How to Measure Customer Churn and Why It&apos;s Critical to Your Business</a></li>
                            </ul>
                        </div>

                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>Who are our Marketing &amp; Sales Growth Articles for?</h3>
                            <p className={styles.faqAnswer}>This content was created for Australian and New Zealand business owners who:</p>
                            <ul className={styles.faqBullets}>
                                <li>Want more consistent and predictable revenue</li>
                                <li>Rely heavily on referrals or a small number of clients</li>
                                <li>Are generating leads but not converting enough of them</li>
                                <li>Want to scale without losing control</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* EXPLORE HEADING */}
            <div className={styles.exploreHeading}>
                <div className={styles.container}>
                    <motion.h2
                        className={styles.exploreTitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Explore Our Marketing &amp; Sales Insights
                    </motion.h2>
                </div>
            </div>

            {/* CATEGORY FILTERS */}
            <div className={styles.filterSection}>
                <div className={styles.container}>
                    <div className={styles.filters}>
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.slug}
                                onClick={() => handleCategoryChange(cat.slug)}
                                className={`${styles.filterButton} ${activeCategorySlug === cat.slug ? styles.active : ''}`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* BLOG GRID SECTION */}
            <Section className={styles.blogSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.blogGrid}
                        layout
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredPosts.length > 0 ? (
                                filteredPosts.map((post, idx) => (
                                    <motion.div
                                        key={post.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.4, delay: 0.05 * idx }}
                                        className={styles.blogCard}
                                    >
                                        <Link href={`/insights/${post.id}`} className={styles.cardInternalLink}>
                                            <div className={styles.imageWrapper}>
                                                <img src={post.image} alt={post.title} className={styles.cardImage} />
                                                <div className={styles.categoryBadge}>{post.category}</div>
                                            </div>
                                            <div className={styles.cardContent}>
                                                <div className={styles.cardMeta}>
                                                    <span className={styles.metaItem}><Clock size={14} /> {post.date}</span>
                                                    <span className={styles.metaDivider}>•</span>
                                                    <span className={styles.metaItem}><User size={14} /> {post.author}</span>
                                                </div>
                                                <h2 className={styles.cardTitle}>{post.title}</h2>
                                                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                                                <span className={styles.readMore}>
                                                    Read Article <ArrowRight size={16} />
                                                </span>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className={styles.noResults}
                                >
                                    <h3>No articles found</h3>
                                    <p>We haven't published any articles in this category yet. Please check back later.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </Section>

            <FinalCTA />
            <ContactForm
                description="If you're looking for specific advice tailored to your business, let's have a conversation. Book a complimentary session below."
            />
        </main>
    );
}

export default function BlogPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BlogContent />
        </Suspense>
    );
}
