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
    { label: 'People and Performance', slug: 'people' }
];

const CATEGORY_MAP: Record<string, string> = {
    'profitability': 'Profitability & Business Performance',
    'marketing': 'Marketing & Sales Growth',
    'operations': 'Operations & Efficiency',
    'exit-planning': 'Preparing a Business for Sale & Exit Planning',
    'people': 'People and Performance'
};

function BlogContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const activeCategorySlug = searchParams.get('category') || 'all';

    const filteredPosts = activeCategorySlug === 'all'
        ? BLOG_POSTS
        : BLOG_POSTS.filter(post => post.category === CATEGORY_MAP[activeCategorySlug]);

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
