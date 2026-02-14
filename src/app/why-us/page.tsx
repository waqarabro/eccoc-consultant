'use client';

import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import Section from '@/components/Section';
import styles from './page.module.css';
import { useAutoCycle } from '@/hooks/useAutoCycle';


const DNA_ITEMS = [
    {
        icon: <Target size={32} />,
        title: "Truth Over Comfort",
        desc: "We tell you what you need to hear, not what you want to hear. Growth requires confronting reality."
    },
    {
        icon: <Users size={32} />,
        title: "Battle-Tested",
        desc: "Our advice comes from scars, not textbooks. We have built, scaled, and exited businesses ourselves."
    },
    {
        icon: <TrendingUp size={32} />,
        title: "Outcome Obsessed",
        desc: "We don't care about billable hours. We care about the result on your P&L and your life."
    }
];

const STATS = [
    { value: "$500M+", label: "Client Value Created" },
    { value: "150+", label: "Businesses Scaled" },
    { value: "100%", label: "Owner Led" }
];

export default function WhyUs() {
    const { activeIndex, setIsPaused, setActiveIndex } = useAutoCycle(DNA_ITEMS.length, 3000);

    return (
        <main>
            <div className={styles.hero}>
                <motion.div
                    className={styles.heroContent}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1>Why Us?</h1>
                    <p>Because Theory Doesn't Build Empires.</p>
                </motion.div>
                {/* Dynamic Background Elements */}
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
            </div>

            <Section className={styles.dnaSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.sectionHeader}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Our DNA</h2>
                        <p>The anti-consultant approach to consulting.</p>
                    </motion.div>

                    <div
                        className={styles.dnaGrid}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {DNA_ITEMS.map((item, i) => (
                            <motion.div
                                key={i}
                                className={`${styles.dnaCard} ${i === activeIndex ? styles.active : ''}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                onMouseEnter={() => setActiveIndex(i)}
                            >
                                <div className={styles.iconWrapper}>{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                {i === activeIndex && (
                                    <motion.div
                                        className={styles.progressBar}
                                        layoutId="dna-progress"
                                        initial={{ width: '0%' }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 3, ease: "linear" }}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section className={styles.philosophySection}>
                <div className={`${styles.container} ${styles.splitLayout}`}>
                    <motion.div
                        className={styles.textContent}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Entrepreneurs First. <br /> <span className={styles.gradientText}>Consultants Second.</span></h2>
                        <p>
                            Most business owners don’t struggle because they lack ideas. They struggle because the advice they receive doesn’t always hold up in the real world of cash flow crunches, staff turnover, and market shifts.
                        </p>
                        <p>
                            At Management Consultants, every advisor has been in your seat. That experience shapes how we think, how we advise, and how we work with you.
                        </p>
                    </motion.div>

                    <div className={styles.statsGrid}>
                        {STATS.map((stat, i) => (
                            <motion.div
                                key={i}
                                className={styles.statBox}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                            >
                                <div className={styles.statValue}>{stat.value}</div>
                                <div className={styles.statLabel}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section className={styles.bottomCta}>
                <motion.div
                    className={styles.ctaCard}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2>Ready for the Truth?</h2>
                    <p>If you want a partner who will challenge you to be better, let's talk.</p>
                    <a href="/contact" className={styles.ctaButton}>Start the Conversation</a>
                </motion.div>
            </Section>
        </main>
    );
}
