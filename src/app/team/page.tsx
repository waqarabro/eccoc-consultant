'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, X } from 'lucide-react';
import Section from '@/components/Section';
import { useState } from 'react';
import styles from './page.module.css';
import { useAutoCycle } from '@/hooks/useAutoCycle';


const TEAM = [
    {
        name: "Frank Colli",
        role: "Managing Director",
        image: "/images/team/frank.png",
        bio: [
            "Frank Colli works closely with business owners looking to accelerate growth through stronger sales, marketing, and commercial strategy.",
            "With a background in engineering and a career built around scaling businesses, Frank brings a highly analytical yet practical approach.",
            "Frank has founded, grown, and led multiple businesses, including building the largest privately owned Australian IT hardware dealership."
        ]
    },
    {
        name: "Neil Zumpo",
        role: "Senior Consultant",
        image: "/images/team/neil.png",
        bio: [
            "Neil Zumpo works with business owners who want greater financial clarity, control, and confidence.",
            "With more than 30 years’ experience across professional services and business ownership, Neil brings a rare combination of technical depth and real-world commercial insight.",
            "Neil began his career as a Chartered Accountant at Deloitte and has since owned successful hospitality businesses."
        ]
    },
    {
        name: "Dale Coutts",
        role: "Senior Consultant",
        image: "/images/team/dale.png",
        bio: [
            "Dale Coutts works with business owners who want stronger performance, clearer direction, and a more resilient business.",
            "With more than 20 years’ experience as a business advisor, Dale brings a disciplined, outcome-focused approach.",
            "Dale balances his professional work with elite-level sport, having represented his country at the Triathlon World Championships."
        ]
    },
    {
        name: "Jeff Downs",
        role: "Senior Consultant",
        image: "/images/team/jeff.png",
        bio: [
            "Jeff Downs works with business owners who want stronger performance today and better options for the future.",
            "With more than 30 years’ experience, Jeff brings a practical, commercially grounded perspective.",
            "Jeff has held senior leadership roles within large multinational telecommunications organisations and founded multiple businesses."
        ]
    },
    {
        name: "Kerry Boulton",
        role: "Senior Consultant",
        image: "/images/team/kerry.png",
        bio: [
            "Kerry Boulton works with business owners who want to build real value and exit on their own terms.",
            "With more than three decades of experience, Kerry brings deep practical insight into building scalable, transferable businesses.",
            "Kerry made history as the first woman to own and manage an international freight forwarding company in Australia."
        ]
    },
    {
        name: "Milena Indovino",
        role: "Office Manager",
        image: "/images/team/milena.png",
        bio: [
            "Milena Indovino ensures clients experience a well-organised, responsive, and professional firm.",
            "Her focus is on the systems, processes, and coordination that allow consultants to work efficiently.",
            "Milena was involved in building a family-owned concreting business alongside her husband, growing it to over 40 staff."
        ]
    }
];

export default function Team() {
    const { activeIndex, setIsPaused, setActiveIndex } = useAutoCycle(TEAM.length, 3000);

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
                    <h1>The <span className={styles.gradientText}>Team.</span></h1>
                    <p>Experience. Execution. Excellence.</p>
                </motion.div>
                <div className={styles.heroBlob}></div>
            </div>

            {/* Premium Grid */}
            <Section className={styles.teamSection}>
                <div
                    className={styles.grid}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {TEAM.map((member, i) => (
                        <motion.div
                            key={i}
                            className={`${styles.card} ${i === activeIndex ? styles.active : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            onMouseEnter={() => setActiveIndex(i)}
                        >
                            <div className={styles.imageContainer}>
                                <img src={member.image} alt={member.name} className={styles.image} />
                                <div className={styles.overlay}>
                                    <div className={styles.socials}>
                                        <Linkedin className={styles.socialIcon} />
                                        <Mail className={styles.socialIcon} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.info}>
                                <h2>{member.name}</h2>
                                <span className={styles.role}>{member.role}</span>
                                <div className={styles.bioPreview}>
                                    <p>{member.bio[0]}</p>
                                </div>
                                <button className={styles.readMore}>Read Full Bio</button>
                            </div>
                            {i === activeIndex && (
                                <motion.div
                                    className={styles.progressBar}
                                    layoutId="team-progress"
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 3, ease: "linear" }}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
