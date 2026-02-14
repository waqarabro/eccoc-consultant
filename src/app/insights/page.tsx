'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, ChevronRight, Mail, Quote } from 'lucide-react';
import Section from '@/components/Section';
import styles from './page.module.css';
import { useAutoCycle } from '@/hooks/useAutoCycle';

const featuredPost = {
    category: "Strategic Planning",
    title: "Why Most Strategic Plans Fail Before Execution Begins",
    desc: "The disconnect between the boardroom and the frontline isn't a communication issue. It's a structural flaw in how we define 'strategy'. Here is how to fix it.",
    date: "Oct 12, 2025",
    readTime: "8 min read",
    image: "/images/insights/insight_strategic_planning_1771083960371.png"
};

const recentPosts = [
    {
        category: "Operations",
        title: "The Silent Profit Killer: Operational Drag",
        date: "Oct 08, 2025",
        image: "/images/insights/insight_operations_efficiency_1771083976241.png"
    },
    {
        category: "Leadership",
        title: "Hiring for Trajectory, Not Just History",
        date: "Sep 28, 2025",
        image: "/images/insights/insight_leadership_hiring_1771083990652.png"
    },
    {
        category: "Finance",
        title: "Cash Flow Forecasting for High-Growth Chaos",
        date: "Sep 15, 2025",
        image: "/images/insights/insight_finance_growth_1771084007193.png"
    },
    {
        category: "Market Analysis",
        title: "Pivoting Without Losing Momentum",
        date: "Sep 02, 2025",
        image: "/images/insights/insight_market_analysis_1771084025513.png"
    }
];

const testimonials = [
    {
        quote: "They didn't just give us a report. They rolled up their sleeves and fixed our supply chain issues in 3 months.",
        author: "Sarah Jenkins, CEO at TechFlow",
        image: "/images/team/frank.png" // Using existing team placeholder for demo or ideally generic avatar
    },
    {
        quote: "The strategic clarity we gained was transformative. We doubled our valuation in 18 months.",
        author: "Michael Ross, Founder of Apex Logistics",
        image: "/images/team/neil.png"
    },
    {
        quote: "Finally, consultants who understand that culture eats strategy for breakfast. Best investment we made.",
        author: "Elena Rodriguez, HR Director at GlobalScale",
        image: "/images/team/kerry.png"
    }
];

export default function Insights() {
    const { activeIndex, setIsPaused: setGridPaused, setActiveIndex } = useAutoCycle(recentPosts.length, 4000);
    const { activeIndex: testimonialIndex, setIsPaused: setTestimonialPaused } = useAutoCycle(testimonials.length, 6000);

    return (
        <main className={styles.main}>
            {/* Header */}
            <div className={styles.header}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className={styles.label}>Thinking</span>
                    <h1>Boardroom <span className={styles.gradientText}>Briefing.</span></h1>
                    <p>Unfiltered analysis for business leaders who want to move fast.</p>
                </motion.div>
            </div>

            <Section className={styles.contentSection}>
                {/* Featured Hero Article */}
                <motion.div
                    className={styles.featuredCard}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.featuredImageContainer}>
                        <img src={featuredPost.image} alt="Featured Insight" className={styles.featuredImage} />
                        <div className={styles.overlay}></div>
                    </div>
                    <div className={styles.featuredContent}>
                        <div className={styles.featuredMeta}>
                            <span className={styles.featuredTag}>{featuredPost.category}</span>
                            <span className={styles.featuredDate}>{featuredPost.date}</span>
                        </div>
                        <h2>{featuredPost.title}</h2>
                        <p>{featuredPost.desc}</p>
                        <button className={styles.readBtn}>Read Article <ArrowRight size={16} /></button>
                    </div>
                </motion.div>

                {/* Grid Title */}
                <div className={styles.gridHeader}>
                    <h3>Recent Thinking</h3>
                    <div className={styles.line}></div>
                </div>

                {/* Animated Grid */}
                <div className={styles.grid}>
                    {recentPosts.map((post, i) => (
                        <motion.div
                            key={i}
                            className={`${styles.postCard} ${activeIndex === i ? styles.active : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            onMouseEnter={() => {
                                setGridPaused(true);
                                setActiveIndex(i);
                            }}
                            onMouseLeave={() => setGridPaused(false)}
                        >
                            <div className={styles.imageWrapper}>
                                <img src={post.image} alt={post.title} className={styles.postImage} />
                                <div className={styles.imageOverlay}></div>
                            </div>
                            <div className={styles.cardBody}>
                                <span className={styles.category}>{post.category}</span>
                                <h3>{post.title}</h3>
                                <div className={styles.cardFooter}>
                                    <span>{post.date}</span>
                                    <div className={`${styles.iconCircle} ${activeIndex === i ? styles.activeIcon : ''}`}>
                                        <ChevronRight size={16} />
                                    </div>
                                </div>
                            </div>
                            {activeIndex === i && (
                                <motion.div
                                    className={styles.progressBar}
                                    layoutId="progress"
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 4, ease: "linear" }}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Cycling Client Perspectives (Reviews) */}
            <Section className={styles.reviewsSection}>
                <div
                    className={styles.reviewsContainer}
                    onMouseEnter={() => setTestimonialPaused(true)}
                    onMouseLeave={() => setTestimonialPaused(false)}
                >
                    <div className={styles.quoteIcon}>
                        <Quote size={48} />
                    </div>

                    <div className={styles.reviewsContent}>
                        <motion.div
                            key={testimonialIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className={styles.reviewCard}
                        >
                            <h3>"{testimonials[testimonialIndex].quote}"</h3>
                            <div className={styles.author}>
                                <div className={styles.authorInfo}>
                                    <strong>{testimonials[testimonialIndex].author}</strong>
                                </div>
                            </div>
                        </motion.div>

                        <div className={styles.indicators}>
                            {testimonials.map((_, i) => (
                                <div
                                    key={i}
                                    className={`${styles.indicator} ${testimonialIndex === i ? styles.activeIndicator : ''}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Newsletter CTA */}
            <Section className={styles.newsletterSection}>
                <div className={styles.newsletterBox}>
                    <div className={styles.nlContent}>
                        <Mail size={32} className={styles.nlIcon} />
                        <h2>Intelligence, Delivered.</h2>
                        <p>Join 5,000+ founders receiving our weekly deep dives.</p>
                    </div>
                    <div className={styles.nlForm}>
                        <input type="email" placeholder="ceo@company.com" />
                        <button>Subscribe</button>
                    </div>
                    <div className={styles.nlBlob}></div>
                </div>
            </Section>
        </main>
    );
}
