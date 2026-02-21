'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Section from './Section';
import styles from './WhoWeWorkBestWith.module.css';

const TiltCard = ({ children, className }: { children: React.ReactNode, className: string }) => {
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
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={className}
        >
            <div style={{ transform: "translateZ(30px)" }}>
                {children}
            </div>
        </motion.div>
    );
};


const WhoWeWorkBestWith = () => {
    return (
        <Section id="who-we-work-with" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Who We Work Best With
                    </motion.h2>
                </div>

                <div className={styles.grid}>
                    <TiltCard className={`${styles.card} ${styles.bestFit}`}>
                        <div className={styles.categoryLabel}>IDEAL CLIENTS</div>
                        <h3>We work best with established Australian and New Zealand business owners who:</h3>
                        <ul className={styles.list}>
                            <li>
                                <span className={styles.iconWrapper}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <div>
                                    <strong>Are committed to improving</strong>
                                    <span style={{ display: 'block', fontSize: '0.9rem', color: '#64748b', marginTop: '6px' }}>Not just maintaining the status quo.</span>
                                </div>
                            </li>
                            <li>
                                <span className={styles.iconWrapper}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <div>
                                    <strong>Value clarity & structure</strong>
                                    <span style={{ display: 'block', fontSize: '0.9rem', color: '#64748b', marginTop: '6px' }}>And want real accountability.</span>
                                </div>
                            </li>
                            <li>
                                <span className={styles.iconWrapper}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <div>
                                    <strong>Want honest advice</strong>
                                    <span style={{ display: 'block', fontSize: '0.9rem', color: '#64748b', marginTop: '6px' }}>Grounded in experience, not opinion.</span>
                                </div>
                            </li>
                        </ul>
                    </TiltCard>

                    <TiltCard className={`${styles.card} ${styles.notFit}`}>
                        <div className={styles.categoryLabelNot}>NOT A FIT</div>
                        <h3>We are probably not the right fit if you are looking for:</h3>
                        <ul className={styles.list}>
                            <li>
                                <span className={styles.iconWrapperNot}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <div>
                                    <strong>A quick fix</strong>
                                    <span style={{ display: 'block', fontSize: '0.9rem', color: '#64748b', marginTop: '6px' }}>Complex problems take time to solve.</span>
                                </div>
                            </li>
                            <li>
                                <span className={styles.iconWrapperNot}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <div>
                                    <strong>Validation only</strong>
                                    <span style={{ display: 'block', fontSize: '0.9rem', color: '#64748b', marginTop: '6px' }}>We challenge thinking to get results.</span>
                                </div>
                            </li>
                            <li>
                                <span className={styles.iconWrapperNot}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <div>
                                    <strong>Generic advice</strong>
                                    <span style={{ display: 'block', fontSize: '0.9rem', color: '#64748b', marginTop: '6px' }}>We don't do cookie-cutter solutions.</span>
                                </div>
                            </li>
                        </ul>
                    </TiltCard>
                </div>

                <motion.div
                    className={styles.closing}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p>But if you want a trusted advisor who thinks like an owner, we’re the team for you.</p>
                </motion.div>
            </div>
        </Section>
    );
};

export default WhoWeWorkBestWith;
