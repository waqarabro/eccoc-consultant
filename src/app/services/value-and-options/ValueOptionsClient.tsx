"use client";

import { motion } from 'framer-motion';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import FinalCTA from '@/components/FinalCTA';
import Link from 'next/link';
import styles from './page.module.css';

export default function ValueOptionsClient() {
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
                    <h1>Business Built for <span className={styles.gradientText}>Value & Options</span></h1>
                    <p>When the business works but depends too heavily on you. We help you create a business that stands on its own.</p>
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
                        <h2>When the business works but depends too heavily on you</h2>
                        <p>
                            Many business owners have built something valuable, even if it doesn&apos;t always feel that way day to day. The business generates income, employs people, and serves clients well — yet it relies heavily on the owner&apos;s presence, judgement, and energy.
                        </p>
                        <p>
                            As a result, options feel limited. Stepping back is difficult, bringing in partners feels risky, and the idea of selling the business feels distant or unrealistic. Even owners who aren&apos;t actively planning an exit often sense that the business would struggle without them.
                        </p>

                        <div className={styles.highlightBox}>
                            <p>
                                <strong>Value, in this context, isn&apos;t about selling tomorrow.</strong> It&apos;s about creating a business that stands on its own.
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
                        <h2>Why value and optionality are harder than they appear</h2>
                        <p>
                            Most businesses are built to operate, not to transfer. Over time, we commonly see:
                        </p>
                        <ul className={styles.styledList}>
                            <li>Critical knowledge and relationships concentrated with the owner</li>
                            <li>Inconsistent systems and decision-making</li>
                            <li>Risk sitting in areas that aren&apos;t visible day to day</li>
                            <li>Business performance tied too closely to personal effort</li>
                        </ul>
                        <p>
                            These factors don&apos;t prevent a business from running but they do limit its resilience, attractiveness, and options.
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
                        <h2>How we help build real business value</h2>
                        <p>
                            Our focus is on strengthening the fundamentals that underpin value, whether a sale is imminent or not. We work with you to:
                        </p>
                        <ul className={styles.styledList}>
                            <li><Link href="/services/aligned-high-performance-teams" style={{ textDecoration: 'underline', color: 'inherit' }}>Reduce dependency</Link> on you as the owner</li>
                            <li>Strengthen the drivers that buyers, investors, and successors care about</li>
                            <li>Improve repeatability, resilience, and risk management</li>
                            <li>Build a business that performs consistently without constant intervention</li>
                        </ul>
                        <p>
                            The aim is to create a business that works because of its structure and capability, and not just on personal commitment.
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
                            We don&apos;t approach value creation as a checklist exercise or a short-term project.
                        </p>
                        <p>
                            Our advisors have built, grown, and exited businesses themselves. That experience shapes how we think about value. It is grounded in reality, trade-offs, and what actually stands up under scrutiny.
                        </p>
                        <p>
                            We focus on progress that improves the business today, while also increasing future options.
                        </p>

                        <div className={styles.highlightBox}>
                            <h3>What changes when a business is built for value</h3>
                            <ul className={styles.styledList} style={{ marginTop: '1rem' }}>
                                <li>The business becomes less fragile</li>
                                <li>Owners regain flexibility and control</li>
                                <li>Strategic options expand, even without a planned exit</li>
                                <li>The business becomes easier to lead and easier to step back from</li>
                            </ul>
                            <p style={{ marginTop: '1.5rem', fontWeight: 600 }}>
                                Importantly, value creation improves the quality of the business now, not just at a point of sale.
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
                            <li>Owner-led businesses where the owner remains central to operations</li>
                            <li>Businesses considering succession, partnership, or future sale</li>
                            <li>Owners seeking greater freedom or reduced risk</li>
                            <li>Businesses that want to be stronger, not just busier</li>
                        </ul>
                    </motion.div>
                </div>
            </Section>

            <FinalCTA />
            <ContactForm
                title="A conversation, not a commitment"
                description="If you want a business that gives you real options — not just obligations — a conversation can help clarify where value is being constrained. We'll help you understand whether reducing dependency, strengthening systems, or improving resilience would materially change your position. Get in touch to start the conversation."
            />
        </main>
    );
}
