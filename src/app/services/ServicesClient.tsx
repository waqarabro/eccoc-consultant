"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, Target, CheckCircle2, Briefcase, TrendingUp, Rocket } from 'lucide-react';
import Section from '@/components/Section';
import styles from './page.module.css';
import { useAutoCycle } from '@/hooks/useAutoCycle';


const services = [
    {
        id: 'strategy',
        title: 'Clarity in Strategy & Focus',
        desc: 'Step back from the noise and regain clarity on where to focus.',
        points: [
            'Focus vs. distraction',
            'What truly drives results',
            'Decisions aligned to goals'
        ]
    },
    {
        id: 'operations',
        title: 'Efficient, Scalable Operations',
        desc: 'Reduce friction; strengthen systems, process, and accountability.',
        points: [
            'Identify bottlenecks',
            'Harden systems & processes',
            'Reduce owner reliance'
        ]
    },
    {
        id: 'teams',
        title: 'Aligned, High-Performance Teams',
        desc: 'Clarify roles, expectations, and leadership to lift performance.',
        points: [
            'Role & decision clarity',
            'Leadership effectiveness',
            'Accountability & hiring quality'
        ]
    },
    {
        id: 'profit',
        title: 'Stronger Profit & Cash Flow',
        desc: 'Improve margins and visibility — without financial complexity.',
        points: [
            'Find leakage & margin pressure',
            'Pricing & commercial discipline',
            'Financial visibility & decisions'
        ]
    },
    {
        id: 'value',
        title: 'Business Built for Value & Options',
        desc: 'Reduce owner dependency and build resilience and options.',
        points: [
            'Owner dependency down',
            'Buyer/investor drivers up',
            'Resilience & risk management'
        ]
    },
    {
        id: 'growth',
        title: 'Predictable, Sustainable Growth',
        desc: 'Intentional growth aligned to capacity and control.',
        points: [
            'Strong foundations first',
            'Strategy + ops alignment',
            'Avoid stress & instability'
        ]
    }
];

const deepDives = [
    {
        id: 'strategy',
        title: 'Clarity in Strategy & Focus',
        subtitle: 'Decisions that are deliberate, not reactive',
        desc: "As businesses grow, decisions get harder and effort doesn't always equal progress. We help you regain clarity on where to focus, what truly drives results, and how to align choices with your goals.",
        icon: <Target size={48} />,
        gradient: 'linear-gradient(135deg, #3B82F6, #2563EB)',
        image: '/images/services/strategy.png'
    },
    {
        id: 'operations',
        title: 'Efficient, Scalable Operations',
        subtitle: 'Consistency, control, scalability',
        desc: 'When growth creates friction, we strengthen systems, processes, and accountability — reducing bottlenecks and reliance on informal knowledge or constant owner involvement.',
        icon: <Zap size={48} />,
        gradient: 'linear-gradient(135deg, #F43F5E, #E11D48)',
        image: '/images/services/operations.png'
    },
    {
        id: 'teams',
        title: 'Aligned, High-Performance Teams',
        subtitle: 'Clear roles, better leadership, stronger outcomes',
        desc: "Misalignment and unclear expectations quietly limit results. We clarify roles and decision rights, strengthen leadership, and improve accountability, communication, and hiring quality.",
        icon: <Users size={48} />,
        gradient: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
        image: '/images/services/leadership.png'
    },
    {
        id: 'profit',
        title: 'Stronger Profit & Cash Flow',
        subtitle: 'Practical financial improvement',
        desc: 'We identify profit leakage and margin pressure, review pricing and cost structures, and improve financial visibility and decision-making — without unnecessary complexity.',
        icon: <TrendingUp size={48} />,
        gradient: 'linear-gradient(135deg, #10B981, #059669)',
        image: '/images/services/profit-real.png'
    },
    {
        id: 'value',
        title: 'Business Built for Value & Options',
        subtitle: 'Build resilience and optionality',
        desc: 'Reduce dependency on you as the owner, strengthen the drivers buyers and investors care about, and improve resilience, repeatability, and risk management.',
        icon: <Briefcase size={48} />,
        gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
        image: '/images/services/value-real.jpg'
    },
    {
        id: 'growth',
        title: 'Predictable, Sustainable Growth',
        subtitle: 'Progress you can sustain',
        desc: 'Ensure foundations are strong before pushing harder. Align strategy, operations, and resources to avoid growth that creates stress, dilution, or instability.',
        icon: <Rocket size={48} />,
        gradient: 'linear-gradient(135deg, #EC4899, #DB2777)',
        image: '/images/services/growth-real.jpg'
    }
];

export default function Services() {
    const { activeIndex, setIsPaused, setActiveIndex } = useAutoCycle(services.length, 3000);

    return (
        <main className={styles.main}>
            {/* Hero – Bold heading with animated blobs */}
            <div className={styles.hero}>
                <motion.div
                    className={styles.heroContent}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1><span className={styles.label}>SERVICES</span><br />Practical Business Advice, Grounded in <span className={styles.gradientText}>Real Experience.</span></h1>
                </motion.div>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
            </div>

            {/* Intro – Stunning structured section with highlight + premium layout */}
            <Section className={styles.introSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.introContent}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.introParagraph}>
                            <p>We don't provide <span className={styles.highlight}>one-size-fits-all programs</span>. We work with owners to address <span className={styles.highlight}>what's holding the business back</span> — improving <span className={styles.highlight}>performance today</span> while building <span className={styles.highlight}>value for the future</span>.</p>
                        </div>
                    </motion.div>

                    <div className={styles.introGrid}>
                        <motion.div
                            className={styles.introLead}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <p>Every engagement is different — but the constants are clarity, commercial discipline, and momentum. Our work focuses on improving how your business performs today while building options for tomorrow.</p>
                        </motion.div>
                        <motion.div
                            className={styles.introBullets}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <ul>
                                <li>Where to focus — and where not to</li>
                                <li>What's actually driving results vs. noise</li>
                                <li>Decisions aligned with personal and commercial goals</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* The Arsenal – Premium 3-Column Card Grid */}
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
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.12, duration: 0.5 }}
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
                                    <a className={styles.iconBtn} href={`#${service.id}`} aria-label={`More on ${service.title}`}>
                                        <ArrowRight />
                                    </a>
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

            {/* Deep Dives - Alternating Layout */}
            <section className={styles.deepDives}>
                {deepDives.map((dive, index) => (
                    <div id={dive.id} key={dive.id} className={`${styles.diveRow} ${index % 2 !== 0 ? styles.reverse : ''}`}>
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
                                <a className={styles.learnBtn} href="#conversation">
                                    Talk to us <ArrowRight size={18} />
                                </a>
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

            {/* What Does Working with ecco Look Like? */}
            <Section className={styles.processSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.processHeader}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>What Does Working with ecco Look Like?</h2>
                        <p>A Flexible, Experience-Led Approach</p>
                    </motion.div>

                    <div className={styles.processGrid}>
                        <motion.div
                            className={styles.processCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0, duration: 0.6 }}
                        >
                            <div className={styles.processNumber}>01</div>
                            <h3>Diagnostic Conversation</h3>
                            <p>We understand your business, priorities, and where you want to focus first.</p>
                        </motion.div>

                        <motion.div
                            className={styles.processCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                        >
                            <div className={styles.processNumber}>02</div>
                            <h3>Identify Key Issues</h3>
                            <p>We pinpoint the key issues limiting performance or value creation.</p>
                        </motion.div>

                        <motion.div
                            className={styles.processCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <div className={styles.processNumber}>03</div>
                            <h3>Implement & Adapt</h3>
                            <p>We work alongside you to implement change, adjust as conditions evolve, and maintain momentum.</p>
                        </motion.div>
                    </div>

                    <motion.div
                        className={styles.processPhilosophy}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className={styles.philosophyBox}>
                            <h3>We believe in practical progress, not rigid programs.</h3>
                            <p>We're guided by the experience of consultants who have been exactly where you are now — building, scaling, and exiting businesses themselves.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.fitSection}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <h3>Who This Is For</h3>
                        <p>ecco Consultants is best suited to business owners that:</p>
                        <ul className={styles.fitList}>
                            <li>Want thoughtful, commercial advice</li>
                            <li>Value experience over theory</li>
                            <li>Are open to challenge and accountability</li>
                            <li>Care about building a business that works — not just keeping busy</li>
                            <li>Are committed to driving their business forward</li>
                        </ul>
                        <p className={styles.fitCTA}>If that sounds like you, we're likely to be a good fit.</p>
                    </motion.div>
                </div>
            </Section>
        </main>
    );
}
