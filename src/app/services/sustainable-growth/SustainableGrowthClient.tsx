"use client";

import { motion } from 'framer-motion';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import FinalCTA from '@/components/FinalCTA';
import Link from 'next/link';
import styles from './page.module.css';

export default function SustainableGrowthClient() {
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
                    <h1>Predictable, <span className={styles.gradientText}>Sustainable Growth</span></h1>
                    <p>When growth creates pressure instead of progress. We help business owners grow with intent, control, and alignment.</p>
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
                        <h2>When growth creates pressure instead of progress</h2>
                        <p>
                            Growth is often the goal, but it can quickly become a source of stress. As demand increases, so do staffing challenges, operational strain, service inconsistencies, and cash flow pressure. What initially feels like success can start to feel unstable.
                        </p>
                        <p>
                            Many owners experience growth that is reactive rather than intentional. Opportunities are pursued because they&apos;re available, not because the business is ready. Over time, this can dilute quality, stretch people, and increase risk, leaving owners wondering whether growth is actually improving the business.
                        </p>

                        <div className={styles.highlightBox}>
                            <p>
                                <strong>Sustainable growth isn&apos;t about moving faster.</strong> It&apos;s about growing in a way that the business can support.
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
                        <h2>Why growth becomes difficult to manage</h2>
                        <p>
                            Growth exposes weaknesses that were previously manageable. Common patterns include:
                        </p>
                        <ul className={styles.styledList}>
                            <li>Expanding before systems and teams are ready</li>
                            <li>Misalignment between strategy, capacity, and resources</li>
                            <li>Growth is putting pressure on cash flow rather than strengthening it</li>
                            <li>Owners absorbing the stress created by expansion</li>
                        </ul>
                        <p>
                            Without a strong foundation, growth amplifies complexity instead of creating leverage.
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
                        <h2>How we help support sustainable growth</h2>
                        <p>
                            Our role is to help you grow with intent, control, and alignment. We work with you to:
                        </p>
                        <ul className={styles.styledList}>
                            <li>Ensure the <Link href="/services/scalable-operations" style={{ textDecoration: 'underline', color: 'inherit' }}>foundations are strong</Link> before pushing harder</li>
                            <li>Align strategy, operations, and resources</li>
                            <li>Identify where growth adds value, and where it creates risk</li>
                            <li>Avoid growth that increases stress, dilution, or instability</li>
                        </ul>
                        <p>
                            The aim is progress that strengthens the business, rather than growth that erodes control.
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
                            We don&apos;t treat growth as an isolated objective.
                        </p>
                        <p>
                            Our advisors understand that sustainable growth is the outcome of getting these fundamentals right: clarity, operations, teams, financial discipline, and value creation. Growth built on weak foundations rarely lasts.
                        </p>
                        <p>
                            Because we&apos;ve experienced growth from the inside, we focus on pacing, sequencing, and trade-offs, not just opportunity.
                        </p>

                        <div className={styles.highlightBox}>
                            <h3>What changes when growth is sustainable</h3>
                            <ul className={styles.styledList} style={{ marginTop: '1rem' }}>
                                <li>Pressure on owners reduces rather than increases</li>
                                <li>Teams scale without losing effectiveness</li>
                                <li>Financial performance strengthens alongside expansion</li>
                                <li>The business becomes more resilient as it grows</li>
                            </ul>
                            <p style={{ marginTop: '1.5rem', fontWeight: 600 }}>
                                Growth stops feeling like a gamble and starts feeling deliberate.
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
                            <li>Businesses experiencing growing demand and capacity strain</li>
                            <li>Owners concerned about losing control as the business grows</li>
                            <li>Businesses preparing to scale, expand, or professionalise</li>
                            <li>Owners who want progress without burnout</li>
                        </ul>
                    </motion.div>
                </div>
            </Section>

            <FinalCTA />
            <ContactForm
                title="A conversation, not a commitment"
                description="If growth is creating pressure rather than confidence, a conversation can help clarify whether the business is growing in the right way and at the right pace. We'll help you assess whether strengthening foundations, improving alignment, or adjusting direction would support more sustainable progress. Get in touch to start the conversation."
            />
        </main>
    );
}
