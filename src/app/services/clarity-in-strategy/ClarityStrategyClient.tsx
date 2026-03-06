"use client";

import { motion } from 'framer-motion';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import FinalCTA from '@/components/FinalCTA';
import Link from 'next/link';
import styles from './page.module.css';

export default function ClarityStrategyClient() {
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
                    <h1>Clarity in <span className={styles.gradientText}>Strategy & Focus</span></h1>
                    <p>When growth creates noise instead of progress. We help business owners step back and regain perspective in decision-making.</p>
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
                        <h2>When growth creates noise instead of progress</h2>
                        <p>
                            As businesses grow, complexity increases. Decisions that once felt obvious become harder. There are more opportunities, more risks, more voices, and more competing priorities — yet not all effort translates into progress.
                        </p>
                        <p>
                            Many business owners find themselves busy, committed, and working hard, but increasingly unsure whether their time and energy are being spent in the right places.
                        </p>

                        <div className={styles.highlightBox}>
                            <p>
                                <strong>This lack of clarity rarely comes from poor capability.</strong> More often, it&apos;s the natural result of a business outgrowing the informal decision-making that worked in earlier stages.
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
                        <h2>Why clarity becomes harder as businesses mature</h2>
                        <p>
                            In established businesses, strategy is rarely absent — it&apos;s just diffuse. Common patterns we see include:
                        </p>
                        <ul className={styles.styledList}>
                            <li>Too many priorities being pursued at once</li>
                            <li>Decisions being made reactively rather than deliberately</li>
                            <li>Legacy initiatives continuing without clear justification</li>
                            <li>Misalignment between personal goals and commercial direction</li>
                        </ul>
                        <p>
                            Over time, this creates friction. The business moves, but not always forward in a coherent way.
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
                        <h2>How we help restore clarity</h2>
                        <p>
                            Our role is not to introduce complexity or abstract strategy. It&apos;s to help business owners step back from the noise and <Link href="/services/aligned-high-performance-teams" style={{ textDecoration: 'underline', color: 'inherit' }}>regain perspective</Link>. We work with you to:
                        </p>
                        <ul className={styles.styledList}>
                            <li>Clarify where the business should focus — and where it shouldn&apos;t</li>
                            <li>Distinguish what is genuinely driving results from what is distracting or dilutive</li>
                            <li>Align strategic decisions with both commercial objectives and personal goals</li>
                            <li>Create a clear basis for prioritisation, trade-offs, and decision-making</li>
                        </ul>
                        <p>
                            This is not about producing a strategy document. It&apos;s about creating shared understanding and direction that guides everyday decisions.
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
                            We don&apos;t start with frameworks or theory. Our advisors bring lived experience as business owners and operators. That means we understand the difference between what sounds good on paper and what actually works in practice.
                        </p>
                        <p>
                            We challenge assumptions when they need challenging, test ideas against commercial reality, and help you make decisions that feel grounded rather than speculative. Clarity, in our experience, comes from:
                        </p>
                        <ul className={styles.styledList} style={{ marginTop: '1rem' }}>
                            <li>Asking better questions</li>
                            <li>Making fewer, higher-quality decisions</li>
                            <li>Being explicit about trade-offs rather than avoiding them</li>
                        </ul>

                        <div className={styles.highlightBox}>
                            <h3>What changes when clarity is in place</h3>
                            <ul className={styles.styledList} style={{ marginTop: '1rem' }}>
                                <li>Decision-making becomes faster and more confident</li>
                                <li>Priorities are easier to communicate and align around</li>
                                <li>Time and energy are directed toward the right initiatives</li>
                                <li>Owners regain a sense of control and direction</li>
                            </ul>
                            <p style={{ marginTop: '1.5rem', fontWeight: 600 }}>
                                Importantly, clarity reduces cognitive load. Instead of constantly reassessing every decision, the business operates from a shared understanding of what matters most.
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
                            <li>Owner-led businesses that have grown beyond their original operating model</li>
                            <li>Businesses experiencing complexity without corresponding returns</li>
                            <li>Owners feeling stretched, reactive, or uncertain about next priorities</li>
                            <li>Businesses preparing for growth, succession, or future exit</li>
                        </ul>
                    </motion.div>
                </div>
            </Section>

            <FinalCTA />
            <ContactForm
                title="A conversation, not a commitment"
                description="If you're finding it harder to stay focused as the business grows, a conversation can help bring perspective. We'll take the time to understand your situation, your goals, and what's driving complexity — and help you determine whether greater clarity would make a meaningful difference. Get in touch to start the conversation."
            />
        </main>
    );
}
