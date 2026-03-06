"use client";

import { motion } from 'framer-motion';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import FinalCTA from '@/components/FinalCTA';
import styles from './page.module.css';

export default function ScalableOperationsClient() {
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
                    <h1>Efficient, <span className={styles.gradientText}>Scalable Operations</span></h1>
                    <p>When growth creates friction instead of momentum. We help build an operating environment where the business can perform reliably without constant intervention.</p>
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
                        <h2>When growth creates friction instead of momentum</h2>
                        <p>
                            Many businesses reach a point where growth no longer feels like progress. Revenue may be increasing, but day-to-day operations become harder rather than easier. Issues take longer to resolve, decisions slow down, and more effort is required just to maintain momentum.
                        </p>
                        <p>
                            What once worked through informal knowledge, goodwill, and personal oversight begins to strain as the business becomes more complex. Consistency becomes harder to maintain across the organisation.
                        </p>

                        <div className={styles.highlightBox}>
                            <p>
                                <strong>At this stage, the challenge is rarely about commitment or capability.</strong> It&apos;s about structure. The business has outgrown the operating model that supported its earlier success, and without deliberate attention, friction quietly replaces flow.
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
                        <h2>Why operational strain emerges as businesses grow</h2>
                        <p>
                            Most owner-led businesses are built to succeed early, not to scale smoothly. Common patterns we see include:
                        </p>
                        <ul className={styles.styledList}>
                            <li>Processes living in people&apos;s heads rather than in systems</li>
                            <li>Inconsistent ways of doing the same work</li>
                            <li>Accountability that&apos;s implied rather than explicit</li>
                            <li>Decisions and approvals are bottlenecking with the owner</li>
                        </ul>
                        <p>
                            These issues don&apos;t usually appear overnight. They accumulate gradually, until friction becomes the dominant experience of running the business.
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
                        <h2>How we help improve operational performance</h2>
                        <p>
                            Our focus is not bureaucracy or over-engineering. It&apos;s creating consistency, control, and capacity. We work with you to:
                        </p>
                        <ul className={styles.styledList}>
                            <li>Identify operational bottlenecks and inefficiencies</li>
                            <li>Strengthen systems, processes, and decision pathways</li>
                            <li>Clarify accountability and reduce reliance on informal knowledge</li>
                            <li>Design operating rhythms that support repeatability and scale</li>
                        </ul>
                        <p>
                            The goal is not a rigid process. It&apos;s an operating environment where the business can perform reliably without constant intervention.
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
                            We approach operations from the perspective of business owners, not process designers. That means:
                        </p>
                        <ul className={styles.styledList} style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                            <li>We prioritise what actually needs to be systemised — and what doesn&apos;t</li>
                            <li>We focus on practicality over perfection</li>
                            <li>We recognise that systems must support people, not slow them down</li>
                        </ul>
                        <p>
                            Our experience tells us that well-designed operations create freedom. Poorly designed ones create drag.
                        </p>

                        <div className={styles.highlightBox}>
                            <h3>What changes when operations work well</h3>
                            <ul className={styles.styledList} style={{ marginTop: '1rem' }}>
                                <li>Work flows more predictably</li>
                                <li>Quality and delivery become more consistent</li>
                                <li>The business becomes less dependent on specific individuals</li>
                                <li>Owners spend more time leading and less time fixing</li>
                            </ul>
                            <p style={{ marginTop: '1.5rem', fontWeight: 600 }}>
                                Scalability, in this sense, isn&apos;t about size — it&apos;s about the business working effectively as it grows.
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
                            <li>Businesses that feel operationally stretched as they grow</li>
                            <li>Owners who remain too involved in day-to-day execution</li>
                            <li>Teams experiencing inconsistency or confusion</li>
                            <li>Businesses preparing for growth, succession, or exit</li>
                        </ul>
                    </motion.div>
                </div>
            </Section>

            <FinalCTA />
            <ContactForm
                title="A conversation, not a commitment"
                description="If growth has introduced friction rather than momentum, it's often a sign that the operating model needs attention. A conversation can help clarify where the strain is coming from and whether strengthening operations would make a meaningful difference. Get in touch to start the conversation."
            />
        </main>
    );
}
