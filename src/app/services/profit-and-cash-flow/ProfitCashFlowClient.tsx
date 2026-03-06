"use client";

import { motion } from 'framer-motion';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import FinalCTA from '@/components/FinalCTA';
import Link from 'next/link';
import styles from './page.module.css';

export default function ProfitCashFlowClient() {
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
                    <span className={styles.label}>Service</span>
                    <h1>Stronger <span className={styles.gradientText}>Profit & Cash Flow</span></h1>
                    <p>When revenue grows but the business still feels fragile. We help businesses gain financial clarity that builds true resilience.</p>
                </motion.div>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
            </div>

            {/* INTRO & PROBLEM SECTION */}
            <Section className={styles.contentSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.contentBlock}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>When revenue grows but the business still feels fragile</h2>
                        <p>
                            Many businesses generate solid revenue, yet still feel financially constrained. Despite working hard and winning work, cash flow feels tight, margins are unpredictable, and financial decisions create uncertainty rather than confidence.
                        </p>
                        <p>
                            As complexity increases, it becomes harder to see what&apos;s really driving performance. Profitability varies across jobs, clients, and service lines, and owners often rely on instinct rather than clear visibility when making decisions.
                        </p>

                        <div className={styles.highlightBox}>
                            <p>
                                <strong>This disconnect between revenue and resilience</strong> is one of the most common and most stressful challenges faced by growing businesses.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.contentBlock}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Why profit and cash flow issues persist</h2>
                        <p>
                            A single issue rarely causes financial pressure. More often, it emerges from a combination of small, compounding factors that go unnoticed as the business grows. Common patterns include:
                        </p>
                        <ul className={styles.styledList}>
                            <li>Margin pressure caused by pricing drift or rising costs</li>
                            <li>Profit leakage hidden across jobs, clients, or activities</li>
                            <li>Limited visibility into true performance drivers</li>
                            <li>Decisions are being made without timely or reliable financial insight</li>
                        </ul>
                        <p>
                            Over time, these factors reduce optionality and increase risk, even when top-line performance appears healthy.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* SOLUTION SECTION */}
            <Section className={styles.contentSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.contentBlock}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>How we help strengthen financial performance</h2>
                        <p>
                            Our focus is practical improvement, not financial complexity. We work with you to:
                        </p>
                        <ul className={styles.styledList}>
                            <li>Identify where profit is being created — and where it&apos;s being lost</li>
                            <li>Review pricing, cost structures, and commercial discipline</li>
                            <li>Improve <Link href="/services/sustainable-growth" style={{ textDecoration: 'underline', color: 'inherit' }}>cash flow management and financial visibility</Link></li>
                            <li>Support better, more confident decision-making</li>
                        </ul>
                        <p>
                            The objective is not to overwhelm you with reports, but to create financial clarity that supports day-to-day and strategic decisions.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* APPROACH & OUTCOMES SECTION */}
            <Section className={styles.contentSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.contentBlock}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>How our approach is different</h2>
                        <p>
                            We don&apos;t treat finance as a purely technical exercise.
                        </p>
                        <p>
                            Our advisors have been accountable for cash flow, margins, and payroll as business owners, not just advisors. That perspective shapes how we approach financial improvement — grounded, commercial, and focused on what really matters.
                        </p>
                        <p>
                            We prioritise insight over complexity and decision quality over precision for its own sake.
                        </p>

                        <div className={styles.highlightBox}>
                            <h3>What changes when profit and cash flow improve</h3>
                            <ul className={styles.styledList} style={{ marginTop: '1rem' }}>
                                <li>Cash flow becomes more predictable</li>
                                <li>Margins are better understood and protected</li>
                                <li>Decisions feel less risky and more deliberate</li>
                                <li>Owners gain confidence and peace of mind</li>
                            </ul>
                            <p style={{ marginTop: '1.5rem', fontWeight: 600 }}>
                                Financial clarity creates resilience, and resilience creates options.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.contentBlock}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Who this is particularly valuable for</h2>
                        <p>This work is especially relevant for:</p>
                        <ul className={styles.styledList}>
                            <li>Businesses with strong revenue but inconsistent profitability</li>
                            <li>Owners experiencing ongoing cash flow pressure</li>
                            <li>Businesses where pricing and costs haven&apos;t kept pace with growth</li>
                            <li>Owners seeking greater control and financial confidence</li>
                        </ul>
                    </motion.div>
                </div>
            </Section>

            <FinalCTA />
            <ContactForm
                title="A conversation, not a commitment"
                description="If revenue isn't translating into financial strength, a conversation can help clarify where the pressure is coming from. We'll help you understand whether improving profit visibility, pricing discipline, or cash flow management would make a meaningful difference. Get in touch to start the conversation."
            />
        </main>
    );
}
