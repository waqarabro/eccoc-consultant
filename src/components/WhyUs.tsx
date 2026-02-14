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
                        Entrepreneurs First.<br />
                        <span className={styles.highlight}>Consultants Second.</span>
                    </h2>
                    <p className={styles.subheadline}>
                        There’s an important difference between people who study businesses and people who have run them.
                    </p>

                    <ul className={styles.challenges}>
                        <li>We understand the emotional weight of decision-making</li>
                        <li>We recognise when theory collides with reality</li>
                        <li>We focus on what’s practical, not just what’s ideal</li>
                        <li>We appreciate that timing, context, and judgement matter</li>
                    </ul>
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
                                Most business owners don’t struggle because they lack ideas. They struggle because the advice they receive doesn’t always hold up in the real world.
                            </p>
                            <p>
                                At Management Consultants, every advisor has built, operated, and sold businesses of their own. That experience shapes how we think, how we advise, and how we work with you.
                            </p>

                            <Link href="/about" className={styles.cta}>
                                MORE ABOUT US
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default WhyUs;
