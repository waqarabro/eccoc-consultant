'use client';

import { motion } from 'framer-motion';
import { Clock, User, ArrowLeft, ArrowRight, Share2, Linkedin, Twitter } from 'lucide-react';
import Section from '@/components/Section';
import Link from 'next/link';
import styles from './page.module.css';

interface BlogPostProps {
    post: {
        id: string;
        title: string;
        excerpt: string;
        date: string;
        author: string;
        category: string;
        image: string;
    };
}

export default function BlogPostClient({ post }: BlogPostProps) {
    // Injecting JSON-LD explicitly for the article payload
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        image: post.image,
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
                url: 'https://eccoc.com.au/logo.png',
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
                        <article className={styles.content}>
                            <h2>The Challenge of Scale</h2>
                            <p>For many business owners, growth feels like the ultimate goal. But unmanaged growth creates friction. As order volumes increase, systems that worked perfectly for a team of five suddenly break under the weight of fifteen.</p>
                            <p>When this happens, the symptoms are almost always the same: quality drops, margins erode because of inefficiencies, and the founder ends up stepping back into day-to-day operations to "put out fires."</p>

                            <blockquote>
                                "Revenue is vanity, profit is sanity, but cash is reality. Scaling without an operational blueprint destroys cash."
                            </blockquote>

                            <h3>Why Best Practices Break</h3>
                            <p>Most consultants will tell you to implement an ERP or hire a layer of middle management. The reality is much simpler: you need core process consistency. Before you scale, your baseline operations must run without your direct input.</p>

                            <ul>
                                <li><strong>Document the core:</strong> Focus on the 20% of processes that drive 80% of value.</li>
                                <li><strong>Measure what matters:</strong> Implement 3-5 operational KPIs that lead, rather than lag.</li>
                                <li><strong>Empower the floor:</strong> Push decision-making down to where the information actually lives.</li>
                            </ul>

                            <p>Scaling successfully requires stepping back and engineering the machine, rather than just running faster inside it.</p>
                        </article>

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
