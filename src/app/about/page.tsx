'use client';

import { motion } from 'framer-motion';
import { Target, Users, Award, Briefcase, MapPin, Linkedin, ArrowRight } from 'lucide-react';
import Section from '@/components/Section';
import styles from './page.module.css';

const TIMELINE = [
    { year: "2010", title: "The Foundation", desc: "Started on the factory floor. Learned that spreadsheets don't run businesses—people do." },
    { year: "2015", title: "The Scale Up", desc: "Built a logistics company from $2M to $50M. Made every mistake in the book, so you don't have to." },
    { year: "2020", title: "The Exit", desc: "Successfully exited to private equity. Realized the 'consultants' we hired knew less than we did." },
    { year: "2021", title: "The Mission", desc: "Founded Management Consultants to kill the hourly billing model and sell results." }
];

const TEAM = [
    { name: "Frank Colli", role: "Managing Director", bio: "Engineering background. Scaling expert. Founded largest privately owned IT hardware dealership in Australia.", gradient: "linear-gradient(135deg, #3B82F6, #2563EB)", image: "/images/team/frank.png" },
    { name: "Neil Zumpo", role: "Senior Consultant", bio: "Ex-Deloitte. 30+ years experience. Hands-on hospitality owner turned financial strategist.", gradient: "linear-gradient(135deg, #E11D48, #BE123C)", image: "/images/team/neil.png" },
    { name: "Kerry Boulton", role: "Senior Consultant", bio: "Exit strategy specialist. Bought, built, and exited 4 businesses. First female intl freight owner in AU.", gradient: "linear-gradient(135deg, #8B5CF6, #7C3AED)", image: "/images/team/kerry.png" },
    { name: "Jeff Downs", role: "Senior Consultant", bio: "Corporate leader & entrepreneur. Global perspective from Canada & Australia. Focus on value.", gradient: "linear-gradient(135deg, #F59E0B, #D97706)", image: "/images/team/jeff.png" }
];

export default function About() {
    return (
        <main className={styles.main}>
            {/* Hero */}
            <div className={styles.hero}>
                <motion.div
                    className={styles.heroContent}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1>Built, Not <span className={styles.gradientText}>Bought.</span></h1>
                    <p>We aren't career consultants. We are recovering CEOs.</p>
                </motion.div>
                <div className={styles.heroBlob}></div>
            </div>

            {/* Mission Statement */}
            <Section className={styles.missionSection}>
                <motion.div
                    className={styles.missionCard}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.quoteIcon}>“</div>
                    <h2>
                        We believe that <span className={styles.highlight}>advice without execution is malpractice.</span> Your P&L doesn't care about our slide deck. It cares about action.
                    </h2>
                </motion.div>
            </Section>

            {/* Timeline */}
            <Section className={styles.timelineSection}>
                <div className={styles.sectionHeader}>
                    <h2>Our Path</h2>
                    <p>Experience earned the hard way.</p>
                </div>
                <div className={styles.timeline}>
                    <div className={styles.line}></div>
                    {TIMELINE.map((item, i) => (
                        <motion.div
                            key={i}
                            className={styles.timelineItem}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                        >
                            <div className={styles.year}>{item.year}</div>
                            <div className={styles.marker}></div>
                            <div className={styles.timelineContent}>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Team Grid */}
            <Section className={styles.teamSection}>
                <div className={styles.sectionHeader}>
                    <h2>The Architects</h2>
                    <p>People who have been in the arena.</p>
                </div>
                <div className={styles.teamGrid}>
                    {TEAM.map((member, i) => (
                        <motion.div
                            key={i}
                            className={styles.teamCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className={styles.profileImage} style={{ background: member.gradient }}>
                                <img src={member.image} alt={member.name} className={styles.headshot} />
                            </div>
                            <div className={styles.cardInfo}>
                                <h3>{member.name}</h3>
                                <span className={styles.role}>{member.role}</span>
                                <p>{member.bio}</p>
                                <div className={styles.socials}>
                                    <Linkedin size={20} />
                                    <span>Connect</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <Section className={styles.officeSection}>
                <div className={styles.officeVideoStub}>
                    <h3>Global Headquarters</h3>
                    <p><MapPin size={18} /> New York • London • Singapore</p>
                </div>
            </Section>
        </main>
    );
}
