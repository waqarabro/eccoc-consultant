'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import styles from './Process.module.css';
import { useAutoCycle } from '@/hooks/useAutoCycle';


const steps = [
    {
        title: 'Understanding',
        description: 'We start by gaining a clear picture of how your business actually operates.',
    },
    {
        title: 'Focus',
        description: 'We identify and focus on the few issues with the biggest impact.',
    },
    {
        title: 'Prioritise',
        description: 'We prioritise actions based on commercial reality — not theory.',
    },
    {
        title: 'Implement',
        description: 'We help you execute practical improvements that drive efficiency.',
    },
    {
        title: 'Track',
        description: 'We measure outcomes to ensure real results and accountability.',
    },
    {
        title: 'Adapt',
        description: 'We refine strategies as conditions change to maintain momentum.',
    },
];

const Process = () => {
    const { activeIndex, setIsPaused, setActiveIndex } = useAutoCycle(steps.length, 3000);

    return (
        <Section id="process" className={styles.section}>
            <motion.div
                className={styles.header}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2>How We Work</h2>
                <p>We don’t produce reports that sit on a shelf. We help you make better decisions — and follow through on them.</p>
            </motion.div>

            <div
                className={styles.timeline}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className={`${styles.step} ${index === activeIndex ? styles.active : ''}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onMouseEnter={() => setActiveIndex(index)}
                    >
                        <div className={styles.number}>{index + 1}</div>
                        <div className={styles.content}>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                        {index === activeIndex && (
                            <motion.div
                                className={styles.progressBar}
                                layoutId="process-progress"
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 3, ease: "linear" }}
                            />
                        )}
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Process;
