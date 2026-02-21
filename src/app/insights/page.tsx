'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Zap, Cog, Target, ArrowRight } from 'lucide-react';
import Section from '@/components/Section';
import styles from './page.module.css';

const insightCategories = [
    {
        icon: <TrendingUp size={40} />,
        title: "Profitability & Business Performance",
        description: "Insights focused on improving margins, cash flow, decision-making, and overall commercial performance — especially where effort isn't translating into results."
    },
    {
        icon: <Zap size={40} />,
        title: "Marketing & Sales Growth",
        description: "Perspectives on building consistent, sustainable growth — without relying on luck, discounting, or constant owner involvement."
    },
    {
        icon: <Cog size={40} />,
        title: "Operations & Efficiency",
        description: "Practical insights into how businesses actually run day to day — and how to reduce friction, improve consistency, and create capacity without bureaucracy."
    },
    {
        icon: <Target size={40} />,
        title: "Preparing a Business for Sale & Exit Planning",
        description: "Nearly 80% of businesses never sell. These insights focus on building real value, increasing your options, and materially improving the odds of a successful exit — whether that's years away or closer than you think."
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

            {/* INSIGHTS GRID SECTION */}
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
                                <div className={styles.cardIcon}>
                                    {insight.icon}
                                </div>
                                <h3>{insight.title}</h3>
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

            {/* FINAL CTA */}
            <Section className={styles.finalCTA}>
                <motion.div
                    className={styles.ctaCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2>Ready to Explore Our Insights?</h2>
                    <p>Browse our collection of perspectives on performance, growth, operations, and exit planning.</p>
                    <motion.a
                        href="/case-studies"
                        className={styles.ctaButton}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Explore Case Studies
                        <ArrowRight size={20} />
                    </motion.a>
                </motion.div>
            </Section>
        </main>
    );
}
