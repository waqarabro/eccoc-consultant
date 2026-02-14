'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from './Section';
import styles from './FinalCTA.module.css';

const FinalCTA = () => {
    return (
        <Section id="contact" className={styles.section}>
            <div className={styles.content}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    It All Starts With a Conversation
                </motion.h2>

                <motion.div
                    className={styles.textWrapper}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className={styles.list}>
                        <span>Looking to improve performance</span>
                        <span className={styles.separator}>|</span>
                        <span>Feeling stuck despite working hard</span>
                        <span className={styles.separator}>|</span>
                        <span>Thinking about long-term value</span>
                    </div>

                    <p className={styles.promise}>
                        A conversation with Management Consultants will give you clarity, perspective, and direction — even before we work together.
                    </p>

                    <p className={styles.noObligation}>
                        No obligation. No pressure. Just a practical, commercial discussion.
                    </p>

                    <p className={styles.signature}>
                        Real-world entrepreneurs on your side — not career consultants.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.actions}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link href="/contact" className={styles.primaryButton}>BOOK A CALL</Link>
                </motion.div>
            </div>
        </Section>
    );
};

export default FinalCTA;
