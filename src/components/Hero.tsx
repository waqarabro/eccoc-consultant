'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={styles.backgroundImage}></div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <motion.h1
                        className={styles.headline}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Practical Business Advice,<br />
                        <span className={styles.highlight}>Grounded in Real Experience.</span>
                    </motion.h1>

                    <motion.div
                        className={styles.body}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <p>
                            We don’t provide one-size-fits-all programs or generic consulting packages.
                        </p>
                        <p>
                            We work with business owners to address the specific challenges holding their businesses back,
                            using an approach grounded in real-world entrepreneurial experience and commercial reality.
                        </p>
                        <p className={styles.emphasis}>
                            Every engagement is different — but our work consistently focuses on proving how businesses perform today,
                            while building value for the future.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className={styles.ctaWrapper}
                    >
                        <Link href="/contact" className={styles.cta}>
                            BOOK A CALL
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
