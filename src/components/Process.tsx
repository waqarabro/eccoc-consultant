'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Section from './Section';
import styles from './Process.module.css';
import { useAutoCycle } from '@/hooks/useAutoCycle';

const steps = [
    {
        title: 'Understanding your business',
        description: 'Gaining a clear understanding of how your business actually operates',
    },
    {
        title: 'Identifying Key issues',
        description: 'Identifying the few issues that are having the biggest impact',
    },
    {
        title: 'Setting Priorities',
        description: 'Prioritising actions based on commercial reality, not theory',
    },
    {
        title: 'Implement Changes',
        description: 'Implementing practical changes that drive efficiency.',
    },
    {
        title: 'Track Progress',
        description: 'Tracking progress and outcomes to ensure real results.',
    },
    {
        title: 'Adapt & Adjust',
        description: 'Adjusting strategies dynamically as conditions change.',
    },
];

const TiltStep = ({ step, index, activeIndex, setActiveIndex }: { step: any, index: number, activeIndex: number, setActiveIndex: (index: number) => void }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            className={`${styles.step} ${index === activeIndex ? styles.active : ''}`}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setActiveIndex(index)}
        >
            <div style={{ transform: "translateZ(20px)" }}>
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
            </div>
        </motion.div>
    );
};

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
                    <TiltStep
                        key={index}
                        step={step}
                        index={index}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                    />
                ))}
            </div>
        </Section>
    );
};

export default Process;
