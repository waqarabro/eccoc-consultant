'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import styles from './Outcomes.module.css';
import { useAutoCycle } from '@/hooks/useAutoCycle';


const Outcomes = () => {
    const { activeIndex, setIsPaused, setActiveIndex } = useAutoCycle(4, 3000);

    return (
        <Section id="outcomes" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>What We Help You Achieve</h2>
                    <p className={styles.intro}>
                        Our work is focused on improving the things that matter most to business owners — not just in theory, but in day-to-day reality.
                    </p>
                </motion.div>

                <div
                    className={styles.grid}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {[
                        { title: "Improve Profitability", text: "By identifying where value is being created, where it’s being lost, and what needs to change to lift margins without adding unnecessary complexity." },
                        { title: "Strengthen Operations", text: "So systems, processes, and people work together more effectively — reducing friction, confusion, and rework." },
                        { title: "Reduce Reliance on Owner", text: "Creating a business that runs more consistently, makes better decisions, and doesn’t depend on you being involved in everything." },
                        { title: "Build Long-Term Value", text: "Whether or not you’re thinking about selling, a valuable business gives you options, leverage, and peace of mind." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.card} ${index === activeIndex ? styles.active : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            onMouseEnter={() => setActiveIndex(index)}
                        >
                            <h3 style={{ marginBottom: '0.5rem' }}>{item.title}</h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>{item.text}</p>
                            {index === activeIndex && (
                                <motion.div
                                    className={styles.progressBar}
                                    layoutId="outcomes-progress"
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 3, ease: "linear" }}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                    <p style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--primary-blue)' }}>
                        This isn’t about chasing growth for growth’s sake.<br />
                        It’s about building a business that works better — for you, your team, and your future.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Outcomes;
