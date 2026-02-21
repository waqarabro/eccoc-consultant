'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import ServiceCard from './ServiceCard';
import { useAutoCycle } from '@/hooks/useAutoCycle';
import styles from './CoreCompetencies.module.css';

const competencies = [
    {
        title: 'Efficient, Scalable Operations',
        description: 'Improving how your business runs day to day — reducing friction, strengthening systems, and creating consistency as the business grows.',
        points: [
            'Reducing friction',
            'Strengthening systems',
            'Creating consistency'
        ]
    },
    {
        title: 'Aligned, High-Performance Teams',
        description: 'Ensuring roles, responsibilities, and expectations are clear, so your people are aligned, accountable, and working toward the same outcomes.',
        points: [
            'Clarifying roles',
            'Aligning expectations',
            'Driving accountability'
        ]
    },
    {
        title: 'Stronger Profit & Cash Flow',
        description: 'Identifying profit leakage, pricing issues, and cost inefficiencies — and addressing them in practical, commercially sound ways.',
        points: [
            'Identifying profit leakage',
            'Addressing pricing issues',
            'Commercially sound solutions'
        ]
    },
    {
        title: 'Business Built for Value & Options',
        description: 'Structuring the business so it’s less dependent on you, more resilient, and genuinely attractive — whether you plan to sell or not.',
        points: [
            'Reducing dependency',
            'Increasing resilience',
            'Creating options'
        ]
    },
    {
        title: 'Predictable, Sustainable Growth',
        description: 'Supporting growth that’s intentional and manageable, rather than reactive — so progress doesn’t come at the expense of control.',
        points: [
            'Intentional growth',
            'Manageable scaling',
            'Maintaining control'
        ]
    },
    {
        title: 'Sales & Marketing',
        description: 'Building dynamic sales teams and creative marketing solutions to ensure your sales funnel remains full and growth is maintained.',
        points: [
            'Dynamic sales teams',
            'Creative marketing',
            'Full sales funnel'
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
                    Core Competencies
                </motion.h2>
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
