'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, Target, CheckCircle2 } from 'lucide-react';
import Section from '@/components/Section';
import styles from './page.module.css';
import { useAutoCycle } from '@/hooks/useAutoCycle';


const services = [
    {
        title: 'Strategy & Focus',
        desc: 'Regain clarity around where your business should focus.',
        points: ['Focus identification', 'Result drivers', 'Goal alignment']
    },
    {
        title: 'Operational Efficiency',
        desc: 'Improve how the business operates day to day.',
        points: ['Bottleneck ID', 'System strengthening', 'Reduced reliance']
    },
    {
        title: 'High-Performance Teams',
        desc: 'Build alignment across your team by clarifying roles.',
        points: ['Role clarity', 'Leadership effectiveness', 'Accountability']
    },
    {
        title: 'Profit & Cash Flow',
        desc: 'Identify profit leakage and margin pressure.',
        points: ['Profit leakage', 'Pricing review', 'Financial visibility']
    },
    {
        title: 'Value Creation',
        desc: 'Build value by reducing dependency on you as the owner.',
        points: ['Reduced dependency', 'Value drivers', 'Risk management']
    },
    {
        title: 'Sustainable Growth',
        desc: 'Ensure foundations are strong before pushing harder.',
        points: ['Strong foundations', 'Strategic alignment', 'Sustainable progress']
    }
];

const deepDives = [
    {
        id: "strategy",
        title: "Strategic Clarity",
        subtitle: "Decisions Driven by Data, Not Guesswork",
        desc: "Most businesses drift because they lack a North Star. We help you define exactly where you're going and the precise steps to get there. No fluff, just a roadmap to dominance.",
        icon: <Target size={48} />,
        gradient: "linear-gradient(135deg, #3B82F6, #2563EB)",
        image: "/images/services/strategy.png"
    },
    {
        id: "operations",
        title: "Operational Velocity",
        subtitle: "Remove Friction. Increase Speed.",
        desc: "Growth breaks processes. We rebuild your operating system to handle scale without the chaos. From supply chain to workflow automation, we streamline execution.",
        icon: <Zap size={48} />,
        gradient: "linear-gradient(135deg, #F43F5E, #E11D48)",
        image: "/images/services/operations.png"
    },
    {
        id: "leadership",
        title: "Leadership Alignment",
        subtitle: "A Team That Rows in the Same Direction",
        desc: "A disconnected leadership team is a liability. We align your key people on vision, values, and execution, ensuring everyone is accountable for the win.",
        icon: <Users size={48} />,
        gradient: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
        image: "/images/services/leadership.png"
    }
];

export default function Services() {
    const { activeIndex, setIsPaused, setActiveIndex } = useAutoCycle(services.length, 3000);

    return (
        <main className={styles.main}>
            {/* Massive Hero */}
            <div className={styles.hero}>
                <motion.div
                    className={styles.heroContent}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className={styles.label}>OUR EXPERTISE</span>
                    <h1>Capabilities <br /> Determined by <span className={styles.gradientText}>Experience.</span></h1>
                    <p>We don't just advise. We build engines of growth.</p>
                </motion.div>
                <div className={styles.heroBlob}></div>
            </div>

            {/* NEW: Feature List Layout (Instead of Grid) */}
            <Section className={styles.listSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>The Arsenal</h2>
                        <p>Six pillars of a resilient, high-growth business.</p>
                    </div>

                    <div
                        className={styles.featureList}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className={`${styles.featureRow} ${index === activeIndex ? styles.active : ''}`}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onMouseEnter={() => setActiveIndex(index)}
                            >
                                <div className={styles.featureNumber}>0{index + 1}</div>
                                <div className={styles.featureInfo}>
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                </div>
                                <div className={styles.featurePoints}>
                                    {service.points.map((p, i) => (
                                        <span key={i}><CheckCircle2 size={16} /> {p}</span>
                                    ))}
                                </div>
                                <div className={styles.featureAction}>
                                    <button className={styles.iconBtn}><ArrowRight /></button>
                                </div>
                                {index === activeIndex && (
                                    <motion.div
                                        className={styles.progressBar}
                                        layoutId="service-progress"
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

            {/* Deep Dives - Alternating Layout with REAL IMAGES */}
            <section className={styles.deepDives}>
                {deepDives.map((dive, index) => (
                    <div key={dive.id} className={`${styles.diveRow} ${index % 2 !== 0 ? styles.reverse : ''}`}>
                        <div className={styles.diveContent}>
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className={styles.iconBox} style={{ background: dive.gradient }}>
                                    {dive.icon}
                                </div>
                                <h3>{dive.title}</h3>
                                <h4>{dive.subtitle}</h4>
                                <p>{dive.desc}</p>
                                <button className={styles.learnBtn}>
                                    Deep Dive <ArrowRight size={18} />
                                </button>
                            </motion.div>
                        </div>
                        <div className={styles.diveVisual}>
                            <motion.div
                                className={styles.visualCard}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <img src={dive.image} alt={dive.title} className={styles.realImage} />
                                <div className={styles.imageOverlay} style={{ background: dive.gradient }}></div>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </section>

            <Section className={styles.ctaSection}>
                <div className={styles.ctaContent}>
                    <h2>Ready to Upgrade Your Business?</h2>
                    <a href="/contact" className={styles.ctaButton}>Lease Our Brains</a>
                </div>
            </Section>
        </main>
    );
}
