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
                    <h2>We Focus on Execution,<br /><span className={styles.highlight}>Not Just Insight.</span></h2>
                    <p className={styles.intro}>
                        Insight alone doesn’t change a business. Our role is to help you build momentum and sustain it.
                    </p>
                </motion.div>

                <div
                    className={styles.grid}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {[
                        { title: "Bring Clarity", text: "To what matters most." },
                        { title: "Prioritise Effectively", text: "Turning options into decisions." },
                        { title: "Support Implementation", text: "In a way that fits your business." },
                        { title: "Stay Focused", text: "On outcomes, not activity." }
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
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
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
            </div>
        </Section>
    );
};

export default Outcomes;
