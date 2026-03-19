'use client';

import { motion } from 'framer-motion';
import { Clock, User, ArrowLeft, ArrowRight, Share2, Linkedin, Twitter } from 'lucide-react';
import Section from '@/components/Section';
import Link from 'next/link';
import styles from './page.module.css';

import { BlogPost } from '@/lib/blogData';

interface BlogPostProps {
    post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostProps) {
    const baseUrl = 'https://eccoc.com.au';
    const imageUrl = post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`;

    // Injecting JSON-LD explicitly for the article payload
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        image: imageUrl,
        datePublished: new Date(post.date).toISOString(),
        author: {
            '@type': 'Person',
            name: post.author,
        },
        publisher: {
            '@type': 'Organization',
            name: 'ecco Consultants',
            logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/logo.png`,
            },
        },
    };

    return (
        <main className={styles.main}>
            {/* Inject Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* HEADER SECTION */}
            <div className={styles.postHeader}>
                <div className={styles.headerContainer}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <Link href="/blog" className={styles.backLink}>
                            <ArrowLeft size={18} /> Back to all insights
                        </Link>
                    </motion.div>

                    <motion.div
                        className={styles.titleWrapper}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                    >
                        <span className={styles.category}>{post.category}</span>
                        <h1>{post.title}</h1>
                        <p className={styles.excerpt}>{post.excerpt}</p>

                        <div className={styles.postMeta}>
                            <div className={styles.authorBadge}>
                                <div className={styles.avatar}>
                                    <User size={20} />
                                </div>
                                <div className={styles.authorInfo}>
                                    <span className={styles.authorName}>{post.author}</span>
                                    <span className={styles.publishDate}><Clock size={14} /> {post.date}</span>
                                </div>
                            </div>

                            <div className={styles.shareButtons}>
                                <span>Share</span>
                                <button className={styles.iconBtn} aria-label="Share on LinkedIn"><Linkedin size={18} /></button>
                                <button className={styles.iconBtn} aria-label="Share on Twitter"><Twitter size={18} /></button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* FEATURE IMAGE */}
            <motion.div
                className={styles.featureImageWrapper}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <div className={styles.container}>
                    <img src={post.image} alt={post.title} className={styles.featureImage} />
                </div>
            </motion.div>

            {/* ARTICLE CONTENT */}
            <Section className={styles.articleSection}>
                <div className={styles.container}>
                    <div className={styles.articleGrid}>
                        <article 
                            className={styles.content}
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* SIDEBAR */}
                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarCard}>
                                <h3>Need help scaling?</h3>
                                <p>Stop putting out fires and start building a business that operates without you.</p>
                                <Link href="/contact" className={styles.ctaButton}>
                                    Book a free strategy call
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </Section>
        </main>
    );
}
