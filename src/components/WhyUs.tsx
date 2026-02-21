'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from './Section';
import styles from './WhyUs.module.css';

const WhyUs = () => {
    return (
        <Section id="why-us" className={styles.whyUs}>
            <div className={styles.grid}>
                <motion.div
                    className={styles.left}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.headline}>
                        Why Business Owners Choose<br />
                        <span className={styles.highlight}>ecco Consultants</span>
                    </h2>
                    <div className={styles.subheadline}>
                        <p>Most business owners don’t come to us looking for generic advice. They come because something isn’t quite working the way it should — despite the effort they’re putting in.</p>
                        <p style={{ marginTop: '1rem', fontWeight: 600 }}>Often, that looks like:</p>
                    </div>

                    <ul className={styles.challenges}>
                        <li>Revenue is growing, but the <strong>profit is not keeping pace</strong></li>
                        <li>A business that’s <strong>too dependent on the owner</strong></li>
                        <li>Operational complexity that makes change harder than it needs to be</li>
                        <li>Teams that are capable, but <strong>not consistently aligned</strong></li>
                        <li>Uncertainty about whether the business is actually <strong>building value</strong></li>
                    </ul>

                    <div style={{ marginTop: '2rem' }}>
                        <Link href="/contact" className={styles.cta}>
                            TAKE FREE SURVEY
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.right}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className={styles.perspectiveCard}>
                        <div className={styles.cardGlow}></div>
                        <div className={styles.cardContent}>
                            <div className={styles.cardHeader}>
                                <h3>Our Perspective</h3>
                                <div className={styles.pulseDot}></div>
                            </div>

                            <p>
                                At ecco Consultants, we help bring clarity to those challenges.
                            </p>
                            <p>
                                Our approach is grounded in experience — not theory. We take the time to understand how your business really operates, identify what’s holding it back, and focus on the few changes that will make the biggest difference.
                            </p>
                            <p style={{ marginTop: '1rem', fontStyle: 'italic', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                                This isn’t about quick fixes or off-the-shelf solutions. It’s about building a better business, deliberately and sustainably.
                            </p>

                            {/* Placeholder for "about 01 free img" if needed, but text focuses on content first */}
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default WhyUs;
