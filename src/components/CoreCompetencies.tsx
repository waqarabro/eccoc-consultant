'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import ServiceCard from './ServiceCard';
import { useAutoCycle } from '@/hooks/useAutoCycle';
import styles from './CoreCompetencies.module.css';

const competencies = [
    {
        title: 'Clarity in Strategy & Focus',
        description: 'As businesses grow, complexity increases. Decisions that once felt obvious become harder.',
        points: [
            'Where your business should focus',
            'What’s genuinely driving results',
            'Aligning decisions with commercial goals'
        ]
    },
    {
        title: 'Efficient, Scalable Operations',
        description: 'Many businesses reach a point where growth creates friction instead of momentum.',
        points: [
            'Identifying operational bottlenecks',
            'Strengthening systems & accountability',
            'Reducing reliance on the owner'
        ]
    },
    {
        title: 'Aligned, High-Performance Teams',
        description: 'Capable people don’t always equal strong performance without clear alignment.',
        points: [
            'Clarifying roles & responsibilities',
            'Strengthening leadership effectiveness',
            'Improving accountability'
        ]
    },
    {
        title: 'Stronger Profit & Cash Flow',
        description: 'Revenue alone doesn’t create a healthy business. Profitability determines resilience.',
        points: [
            'Identifying profit leakage',
            'Reviewing pricing & cost structures',
            'Improving financial visibility'
        ]
    },
    {
        title: 'Business Built for Value',
        description: 'A valuable business gives you choices — whether stepping back or exiting.',
        points: [
            'Reducing dependency on the owner',
            'Strengthening value drivers',
            'Improving resilience & risk management'
        ]
    },
    {
        title: 'Predictable Growth',
        description: 'Growth is most effective when it’s intentional, controlled, and aligned with capacity.',
        points: [
            'Ensuring foundations are strong',
            'Aligning strategy & resources',
            'Avoiding growth that creates instability'
        ]
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50, damping: 20 } }
};

const CoreCompetencies = () => {
    const { activeIndex, setIsPaused, setActiveIndex } = useAutoCycle(competencies.length, 3000);

    return (
        <Section id="competencies" className={styles.section}>
            <div className={styles.header}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    What We Help You Achieve
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Our work focuses on what matters most to business owners.
                </motion.p>
            </div>

            <motion.div
                className={styles.grid}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {competencies.map((comp, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        onMouseEnter={() => setActiveIndex(index)}
                    >
                        <ServiceCard
                            title={comp.title}
                            description={comp.description}
                            points={comp.points}
                            isActive={index === activeIndex}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
};

export default CoreCompetencies;
