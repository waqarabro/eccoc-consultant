'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Zap, Cog, Target, Users, ArrowRight, Clock, User } from 'lucide-react';
import Section from '@/components/Section';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import styles from './page.module.css';
import { BLOG_POSTS } from '@/lib/blogData';

const insightCategories = [
    {
        icon: <TrendingUp size={28} />,
        title: "Profitability & Business Performance",
        description: "Insights focused on improving margins, cash flow, decision-making, and overall commercial performance — especially where effort isn't translating into results."
    },
    {
        icon: <Zap size={28} />,
        title: "Marketing & Sales Growth",
        description: "Perspectives on building consistent, sustainable growth — without relying on luck, discounting, or constant owner involvement."
    },
    {
        icon: <Cog size={28} />,
        title: "Operations & Efficiency",
        description: "Practical insights into how businesses actually run day to day — and how to reduce friction, improve consistency, and create capacity without bureaucracy."
    },
    {
        icon: <Target size={28} />,
        title: "Preparing a Business for Sale & Exit Planning",
        description: "Nearly 80% of businesses never sell. These insights focus on building real value, increasing your options, and materially improving the odds of a successful exit — whether that's years away or closer than you think."
    },
    {
        icon: <Users size={28} />,
        title: "People and Performance",
        description: "Content pending for this section."
    }
];

export default function InsightsPage() {
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
                    <span className={styles.label}>INSIGHTS</span>
                    <h1>
                        Insights & Perspectives<br />
                        <span className={styles.gradientText}>For Business Owners</span>
                    </h1>
                </motion.div>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
            </div>

            {/* INTRODUCTION SECTION */}
            <Section className={styles.introSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.introContent}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className={styles.leadText}>
                            Our insights are written for business owners who want to think more clearly about how their business performs, operates, grows, and creates value.
                        </p>
                        <p className={styles.supportText}>
                            They're grounded in real-world experience — not theory — and reflect the same conversations we have with clients every day.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* INSIGHTS TOPICS */}
            <Section className={styles.insightsSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2>Browse by Topic</h2>
                        <p>Explore insights tailored to different aspects of your business</p>
                    </motion.div>

                    <motion.div
                        className={styles.insightsGrid}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {insightCategories.map((insight, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.insightCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * idx, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.insightHeader}>
                                    <div className={styles.cardIcon}>
                                        {insight.icon}
                                    </div>
                                    <h3>{insight.title}</h3>
                                </div>
                                <p>{insight.description}</p>
                                <button className={styles.viewButton}>
                                    View Insights
                                    <ArrowRight size={18} />
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Section>

            {/* BLOG GRID SECTION */}
            <Section className={styles.blogSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2>Latest Articles</h2>
                        <p>Fresh perspectives and practical advice</p>
                    </motion.div>

                    <motion.div
                        className={styles.blogGrid}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {BLOG_POSTS.map((post, idx) => (
                            <motion.div
                                key={post.id}
                                className={styles.blogCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * idx, duration: 0.6 }}
                                viewport={{ once: true }}
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
                        ))}
                    </motion.div>
                </div>
            </Section>

            <ContactForm
                description="If these insights reflect what you’re seeing in your business, a conversation can help. Complete the form to book a Complimentary Strategy Session and apply this thinking to your business."
            />
        </main>
    );
}
