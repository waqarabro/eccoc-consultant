"use client";

import { motion } from 'framer-motion';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import FinalCTA from '@/components/FinalCTA';
import styles from './page.module.css';

export default function AlignedTeamsClient() {
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
                    <h1>Aligned, <span className={styles.gradientText}>High-Performance</span> Teams</h1>
                    <p>When capable people don&apos;t translate into consistent performance. We help growing businesses solve the alignment problem.</p>
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
                        <h2>When capable people don&apos;t translate into consistent performance</h2>
                        <p>
                            Many businesses have good people yet still struggle to achieve consistent results. Teams are busy, individuals work hard, but outcomes vary. Expectations are assumed rather than explicit, accountability feels uneven, and performance depends too heavily on a few key individuals.
                        </p>
                        <p>
                            As a business grows, informal leadership and &quot;everyone just knows what to do&quot; thinking no longer holds. Without deliberate alignment, even capable teams can drift, pulling in slightly different directions and diluting overall performance.
                        </p>

                        <div className={styles.highlightBox}>
                            <p>
                                <strong>This isn&apos;t a people problem. It&apos;s an alignment problem</strong>, and it&apos;s one of the most common constraints on growth in established businesses.
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
                        <h2>Why misalignment quietly limits results</h2>
                        <p>
                            In growing businesses, team issues rarely show up as obvious conflict. More often, they appear as friction, inconsistency, or underperformance that&apos;s hard to pin down.
                        </p>
                        <p>Common patterns include:</p>
                        <ul className={styles.styledList}>
                            <li>Roles and responsibilities that are loosely defined or overlap</li>
                            <li>Expectations that vary between leaders, teams, or individuals</li>
                            <li>Accountability that relies on goodwill rather than clarity</li>
                            <li>Hiring decisions made reactively rather than deliberately</li>
                        </ul>
                        <p>
                            Left unaddressed, these issues compound over time, making leadership more effortful and results less predictable.
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
                        <h2>How we help build alignment and performance</h2>
                        <p>
                            Our work with teams focuses on creating clarity, consistency, and shared understanding, not control or micromanagement.
                        </p>
                        <p>We work with you to:</p>
                        <ul className={styles.styledList}>
                            <li>Clarify roles, responsibilities, and decision rights</li>
                            <li>Strengthen leadership effectiveness at all levels</li>
                            <li>Improve accountability, communication, and follow-through</li>
                            <li>Improve the quality and consistency of hiring decisions</li>
                        </ul>
                        <p>
                            The aim is to create an environment where people understand what&apos;s expected, why it matters, and how their role contributes to the broader business.
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
                            We don&apos;t approach team performance through motivation programs or generic culture initiatives.
                        </p>
                        <p>
                            Our advisors bring real-world experience leading and building teams inside growing businesses. That means we focus on practical alignment rather than abstract ideals, and on systems and behaviours that support performance over time.
                        </p>
                        <p>
                            Strong teams, in our experience, are not created through pressure or charisma. They&apos;re built through clarity, consistency, and leadership that&apos;s willing to be explicit.
                        </p>

                        <div className={styles.highlightBox}>
                            <h3>What changes when teams are aligned</h3>
                            <ul className={styles.styledList} style={{ marginTop: '1rem' }}>
                                <li>Performance becomes more consistent</li>
                                <li>Leadership effort reduces</li>
                                <li>Accountability feels fair and constructive</li>
                                <li>Communication improves across the business</li>
                            </ul>
                            <p style={{ marginTop: '1.5rem', fontWeight: 600 }}>
                                Most importantly, results become less dependent on individual heroics and more on how the team works together.
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
                            <li>Businesses experiencing inconsistent performance across teams</li>
                            <li>Owners who feel they are carrying too much responsibility</li>
                            <li>Leadership teams that struggle with alignment or execution</li>
                            <li>Businesses preparing for growth, succession, or exit</li>
                        </ul>
                    </motion.div>
                </div>
            </Section>

            <FinalCTA />
            <ContactForm
                title="A conversation, not a commitment"
                description="If your business has capable people but performance feels uneven, a conversation can help identify where alignment is breaking down. We'll help you understand whether clearer roles, stronger leadership, or improved accountability would make a meaningful difference. Get in touch to start the conversation."
            />
        </main>
    );
}
