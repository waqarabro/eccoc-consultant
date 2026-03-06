'use client';

import { motion } from 'framer-motion';
import { Users, Zap, Target, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import FinalCTA from '@/components/FinalCTA';
import Link from 'next/link';
import styles from './page.module.css';

const coreDifferences = [
    {
        number: '01',
        icon: <Users size={32} />,
        title: "We understand the emotional weight of decision-making",
        desc: "Decisions aren't made in isolation. We recognize the pressure, uncertainty, and responsibility that comes with ownership."
    },
    {
        number: '02',
        icon: <Zap size={32} />,
        title: "We recognise when theory collides with reality",
        desc: "Business textbooks don't account for cash flow crunches, market shifts, or team dynamics. We've lived it all."
    },
    {
        number: '03',
        icon: <Target size={32} />,
        title: "We focus on what's practical, not just what's ideal",
        desc: "The best solution isn't always the theoretically perfect one. It's the one that works for your business."
    },
    {
        number: '04',
        icon: <Shield size={32} />,
        title: "We appreciate that timing, context, and judgement matter",
        desc: "Business is full of nuance. The same decision at different times yields different results."
    }
];

const practiceElements = [
    "Direct, commercial conversations",
    "Fewer assumptions, more context",
    "Advice that considers second- and third-order effects",
    "A focus on decisions that actually move the needle"
];

const executionRoles = [
    "Bring clarity to what matters most",
    "Help you prioritise effectively",
    "Support implementation in a way that fits your business",
    "Stay focused on outcomes, not activity"
];

const structurePoints = [
    {
        number: '01',
        title: "MAUS doesn't replace judgement — it supports it",
        desc: "Structure serves the advice, not the other way around. It ensures rigor without rigidity."
    },
    {
        number: '02',
        title: "It ensures nothing critical is overlooked",
        desc: "Our framework keeps us thorough and consistent, catching what might otherwise slip through."
    },
    {
        number: '03',
        title: "It provides structure without rigidity",
        desc: "We have a system, but we're not slaves to it. We adapt it to your needs."
    }
];

const bestForList = [
    "Value experience over theory",
    "Want thoughtful challenge, not validation",
    "Care about building a stronger business — not just staying busy",
    "Are open to change when it's clearly justified"
];

const whyStay = [
    "The advice feels grounded and relevant",
    "The conversations are honest and commercially focused",
    "Progress feels tangible, not theoretical",
    "The relationship feels like a partnership, not a transaction"
];

export default function WhyEccoc() {
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
                    <span className={styles.label}>Why ecco</span>
                    <h1>
                        Advice Grounded in Experience —<br />
                        <span className={styles.gradientText}>Not Just Theory</span>
                    </h1>
                </motion.div>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
            </div>

            {/* OPENING SECTION */}
            <Section className={styles.openingSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.openingContent}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className={styles.problemText}>
                            Most business owners don't struggle because they lack ideas. They struggle because the advice they receive doesn't always hold up in the real world <a href="https://hbr.org/1982/09/consulting-is-more-than-giving-advice" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit', opacity: 0.8 }}>(as often researched in consulting efficacy)</a>.
                        </p>
                        <p className={styles.solutionText}>
                            <strong>At ecco Consultants, our perspective is different.</strong> Every advisor at ecco has built, operated, and sold businesses of their own. We've lived through the pressure, the uncertainty, the trade-offs, and the responsibility that comes with ownership. That experience shapes how we think, how we advise, and how we work with you.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* ENTREPRENEURS FIRST SECTION */}
            <Section className={styles.entrepreneursSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>
                            Entrepreneurs First.<br />
                            <span className={styles.gradientText}>Consultants Second.</span>
                        </h2>
                        <p>There's an important difference between people who study businesses and people who have run them.</p>
                    </motion.div>

                    <motion.div
                        className={styles.foundationBox}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className={styles.foundationLead}>Because we've been business owners ourselves:</p>
                    </motion.div>

                    <div className={styles.differencesGrid}>
                        {coreDifferences.map((item, i) => (
                            <motion.div
                                key={i}
                                className={styles.differenceCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                            >
                                <div className={styles.cardIcon}>{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className={styles.conclusion}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <p><strong>Our advice is shaped by experience — not just frameworks.</strong></p>
                    </motion.div>
                </div>
            </Section>

            {/* PRACTICE SECTION */}
            <Section className={styles.practiceSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>How That Difference<br />Shows Up in Practice</h2>
                        <p>Working with ecco doesn't feel like engaging a traditional consultancy.</p>
                    </motion.div>

                    <motion.div
                        className={styles.practiceIntro}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <p><strong>You can expect (see our <Link href="/services" style={{ textDecoration: 'underline', color: 'inherit' }}>Services</Link>):</strong></p>
                    </motion.div>

                    <div className={styles.practiceGrid}>
                        {practiceElements.map((item, i) => (
                            <motion.div
                                key={i}
                                className={styles.practiceCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                            >
                                <div className={styles.checkmark}>
                                    <CheckCircle2 size={20} />
                                </div>
                                <h3>{item}</h3>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className={styles.practiceFooter}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <p className={styles.footerMain}>We don't aim to impress you with complexity.</p>
                        <p className={styles.footerSub}>We aim to help you make better decisions and follow through on them.</p>
                    </motion.div>
                </div>
            </Section>

            {/* EXECUTION SECTION */}
            <Section className={styles.executionSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>We Focus on Execution,<br />Not Just Insight</h2>
                        <p>Insight alone doesn't change a business.</p>
                    </motion.div>

                    <motion.div
                        className={styles.executionIntro}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <p>Many owners already know what needs to improve — the challenge is turning that knowledge into consistent action without creating disruption or overload.</p>
                    </motion.div>

                    <div className={styles.executionGrid}>
                        {executionRoles.map((item, i) => (
                            <motion.div
                                key={i}
                                className={styles.executionCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                            >
                                <h3>{item}</h3>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className={styles.executionFooter}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <p><strong>We're not here to produce reports that sit on a shelf.</strong></p>
                        <p>We're here to help you build momentum and sustain it.</p>
                    </motion.div>
                </div>
            </Section>

            {/* STRUCTURE SECTION */}
            <Section className={styles.structureSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Structure Where<br />It Adds Value</h2>
                        <p>While our advice is grounded in real-world experience, it's supported by a disciplined, structured approach.</p>
                    </motion.div>

                    <motion.div
                        className={styles.structureIntro}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <p>We use the <strong>MAUS framework</strong> as a back-end platform to ensure our work is thorough, consistent, and focused on the key drivers of business value.</p>
                        <p style={{ marginTop: '1rem', fontWeight: 700 }}>Importantly:</p>
                    </motion.div>

                    <div className={styles.structureGrid}>
                        {structurePoints.map((item, i) => (
                            <motion.div
                                key={i}
                                className={styles.structureCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.5 }}
                            >
                                <div className={styles.structureNumber}>{item.number}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className={styles.structureConclusion}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <p>The combination of <strong>experience + structure</strong> allows us to deliver advice that's both practical and rigorous.</p>
                    </motion.div>
                </div>
            </Section>

            {/* WHO THIS WORKS FOR SECTION */}
            <Section className={styles.fitSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Who This Approach<br />Works Best For</h2>
                    </motion.div>

                    <motion.div
                        className={styles.fitIntro}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <p><strong>ecco is best suited to business owners who:</strong></p>
                        <ul>
                            {bestForList.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>

                        <div className={styles.notFitBox}>
                            <p><strong>If you're looking for generic advice, quick fixes, or someone to simply tell you what you want to hear,</strong></p>
                            <p>we're probably not the best fit.</p>
                            <p style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '2px solid rgba(139, 92, 246, 0.2)' }}><strong>But if you want a trusted advisor who thinks like an owner</strong>, you're in the right place.</p>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* WHY STAY SECTION */}
            <Section className={styles.staySection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Why Clients<br />Stay With ecco</h2>
                        <p>Many of our clients come to us after working with other advisors. They stay because:</p>
                    </motion.div>

                    <div className={styles.stayGrid}>
                        {whyStay.map((item, i) => (
                            <motion.div
                                key={i}
                                className={styles.stayCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                            >
                                <h3>{item}</h3>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className={styles.stayFooter}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <p>Trust is built over time — and we take that responsibility seriously.</p>
                    </motion.div>
                </div>
            </Section>

            {/* FINAL CTA */}
            <Section className={styles.finalCTA}>
                <motion.div
                    className={styles.ctaCard}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Ready for Advice That Actually Works?</h2>
                    <p>If you want a partner who will challenge you to be better, built on real business experience, let's talk.</p>
                    <a href="/contact" className={styles.ctaButton}>
                        Start the Conversation <ArrowRight size={20} />
                    </a>
                </motion.div>
            </Section>

            <FinalCTA />
            <ContactForm description="Choosing the right advisor matters. If you’d like to explore whether ecco is the right fit for you, complete the form to book a Complimentary Strategy Session. We’ll talk through your goals, challenges, and what genuine, practical support could look like without jargon or sales pressure." />
        </main>
    );
}
