'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import styles from './Expectations.module.css';

const expectations = [
    {
        title: "Commercial Advice",
        description: "Straightforward, commercial advice focused on profit."
    },
    {
        title: "Honest Conversations",
        description: "Honest conversations—even when they’re uncomfortable."
    },
    {
        title: "Practical Support",
        description: "Support that’s practical, not just prescriptive."
    }
];

const Expectations = () => {
    return (
        <Section id="expectations" className={styles.section}>
            <div className={styles.header}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    You Can Expect
                </motion.h2>
            </div>

            <div className={styles.grid}>
                {expectations.map((item, index) => (
                    <motion.div
                        key={index}
                        className={styles.card}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Expectations;
