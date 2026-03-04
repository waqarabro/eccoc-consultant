'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, X } from 'lucide-react';
import Section from '@/components/Section';
import { useState } from 'react';
import styles from './page.module.css';
import { useAutoCycle } from '@/hooks/useAutoCycle';

const TEAM = [
    {
        name: "Frank Colli",
        role: "Managing Director",
        image: "https://swashenterprises.com/wp-content/uploads/2026/03/Frank-New.jpeg",
        bio: [
            "Frank Colli works closely with business owners looking to accelerate growth through stronger sales, marketing, and commercial strategy.",
            "With a background in engineering and a career built around scaling businesses, Frank brings a highly analytical yet practical approach to improving performance.",
            "Frank has founded, grown, and led multiple businesses, including building the largest privately owned Australian IT hardware dealership — expanding it from a Victorian-based operation into a national business with offices across New South Wales, Queensland, and Western Australia. He has also co-founded an IT distribution business in New Zealand, giving him first-hand experience in scaling operations across markets.",
            "His work with clients typically centres on strengthening sales and service teams, improving go-to-market strategy, and creating clear, repeatable systems that support sustainable growth. Frank is known for his ability to cut through complexity, identify the core commercial issues, and align people, process, and opportunity.",
            "Frank is particularly effective when working with leadership and sales teams, where his strategic thinking and collaborative style help rebuild capability, momentum, and accountability.",
            "He also brings deep experience in mergers and acquisitions, with a strong understanding of how to successfully integrate businesses and cultures to create long-term value."
        ]
    },
    {
        name: "Neil Zumpo",
        role: "Senior Consultant",
        image: "https://swashenterprises.com/wp-content/uploads/2026/03/Neil-New.jpeg",
        bio: [
            "Neil Zumpo works with business owners who want greater financial clarity, control, and confidence in their decisions.",
            "With more than 30 years’ experience across professional services and business ownership, Neil brings a rare combination of technical depth and real-world commercial insight.",
            "Neil began his career as a Chartered Accountant at Deloitte, where he worked across accounting, tax, and audit and managed complex engagements for large, multi-site organisations. This early experience gave him a strong foundation in financial rigour, governance, and how sophisticated businesses operate.",
            "For more than 25 years since, Neil has applied that foundation as an entrepreneur, owning and operating a successful multi-venue hospitality business. As a hands-on business owner, he has been directly responsible for cash flow, margins, staffing, supply chains, compliance, and long-term sustainability — not just advising on them.",
            "Today, Neil supports clients across areas such as cash flow management, costing and pricing, inventory and supply chain efficiency, payroll, tax, and statutory compliance. He is known for his practical, measured approach and his ability to translate complex financial information into clear, actionable insight.",
            "Clients value Neil’s calm judgement, commercial focus, and understanding of what it means to be accountable for results as both a financial professional and a business owner."
        ]
    },
    {
        name: "Dale Coutts",
        role: "Senior Consultant",
        image: "https://swashenterprises.com/wp-content/uploads/2026/03/Dale-Coutte-New.jpeg",
        bio: [
            "Dale Coutts works with business owners who want stronger performance, clearer direction, and a more resilient business.",
            "With more than 20 years’ experience as a business advisor and business owner, Dale brings a disciplined, outcome-focused approach to helping organisations improve how they operate and grow.",
            "Dale has owned and operated his own consultancy firms and has worked with businesses at varying stages of maturity — from founder-led operations to larger, more complex organisations. This experience gives him a practical understanding of the pressures business owners face and the trade-offs required to achieve sustainable results.",
            "His work with clients typically focuses on improving commercial performance, strengthening leadership capability, and helping teams execute more effectively against clear goals. Dale is known for his direct, open style and his ability to challenge thinking while maintaining strong, trusted relationships.",
            "Whether working with local businesses or larger organisations, Dale helps owners step back from day-to-day noise, refocus on what matters most, and build momentum around disciplined execution.",
            "Based in regional Victoria, Dale balances his professional work with family life and elite-level sport, having represented his country multiple times at the Triathlon World Championships, a background that reflects the discipline, consistency, and resilience he brings to his work with clients."
        ]
    },
    {
        name: "Jeff Downs",
        role: "Senior Consultant",
        image: "https://swashenterprises.com/wp-content/uploads/2026/03/Jeff-New.jpeg",
        bio: [
            "Jeff Downs works with business owners who want stronger performance today and better options for the future.",
            "With more than 30 years’ experience across both corporate leadership and business ownership, Jeff brings a practical, commercially grounded perspective to every engagement.",
            "Jeff has held senior leadership roles within large multinational telecommunications organisations and has also founded, grown, and exited multiple businesses in both Canada and Australia. This combination of corporate discipline and real-world entrepreneurial experience allows him to quickly identify what’s holding a business back — and what will genuinely move it forward.",
            "His work with clients typically focuses on improving profitability, strengthening leadership and sales capability, building more effective operating systems, and increasing overall business value. Jeff is known for his ability to cut through complexity, challenge assumptions, and help owners focus on what matters most.",
            "Jeff’s approach is collaborative and practical. Clients value his clarity, commercial judgement, and willingness to stay closely involved through implementation — not just strategy.",
            "Based on Sydney’s Northern Beaches, Jeff lives with his wife, three children, and their dog. Originally from Canada, he brings a global perspective shaped by building and advising businesses across multiple markets."
        ]
    },
    {
        name: "Kerry Boulton",
        role: "Senior Consultant",
        image: "https://swashenterprises.com/wp-content/uploads/2026/03/Kerry-New.jpeg",
        bio: [
            "Kerry Boulton works with business owners who want to build real value, create options, and ultimately exit on their own terms.",
            "With more than three decades of experience as an entrepreneur, advisor, and business owner, Kerry brings deep practical insight into what it takes to build scalable, transferable businesses.",
            "Kerry has bought, built, and successfully exited four businesses over her career. She made history as the first woman to own and manage an international freight forwarding company in Australia, growing Freight Management International into a multimillion-dollar enterprise before its sale. Since then, she has continued to build and exit businesses, while advising owners on value creation, succession, and exit readiness.",
            "Her work with clients typically focuses on strengthening business fundamentals, increasing enterprise value, and preparing owners for successful transitions — whether through sale, succession, or increased optionality. Kerry is known for her clarity, commercial discipline, and ability to quickly identify what will materially improve value.",
            "Alongside her advisory work, Kerry has held board and advisory roles, lectured in entrepreneurship at MBA level, and worked with a broad range of organisations from owner-led SMEs to large, complex businesses.",
            "Based in Australia, Kerry brings a grounded, practical perspective shaped by having been fully accountable for the businesses she has built, grown, and exited."
        ]
    },
    {
        name: "Milena Indovino",
        role: "Office Manager",
        image: "https://swashenterprises.com/wp-content/uploads/2026/03/Milena-New.jpeg",
        bio: [
            "Milena Indovino is the Office Manager at ecco Consultants and plays a key role in ensuring clients experience a well-organised, responsive, and professional firm.",
            "Her focus is on the systems, processes, and coordination that allow consultants to work efficiently and clients to engage with ecco smoothly.",
            "Milena was involved in building a family-owned concreting business alongside her husband, supporting its growth from a small operation into a business employing more than 40 staff and generating annual turnover of approximately $15 million. Through this experience, she developed practical capability across people coordination, cash flow support, supplier management, and internal systems.",
            "As a qualified teacher, Milena brings strong communication, organisation, and development skills, along with a structured, detail-oriented approach to work. She is known for creating order, improving consistency, and maintaining systems that reduce friction and delays.",
            "For ecco’s clients, Milena’s role helps ensure timely communication, reliable processes, and a professional experience from first contact through ongoing engagement."
        ]
    }
];

export default function Team() {
    const { activeIndex, setIsPaused, setActiveIndex } = useAutoCycle(TEAM.length, 3000);
    const [selectedMember, setSelectedMember] = useState<typeof TEAM[0] | null>(null);

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
                                <button className={styles.readMore} onClick={() => setSelectedMember(member)}>Read Full Bio</button>
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

            {/* Modal */}
            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMember(null)}
                    >
                        <motion.div
                            className={styles.modalContent}
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className={styles.closeButton}
                                onClick={() => setSelectedMember(null)}
                                aria-label="Close modal"
                            >
                                <X size={24} />
                            </button>

                            <div className={styles.modalHeader}>
                                <div className={styles.modalImageContainer}>
                                    <img src={selectedMember.image} alt={selectedMember.name} className={styles.modalImage} />
                                </div>
                                <div className={styles.modalHeaderInfo}>
                                    <h2 className={styles.modalName}>{selectedMember.name}</h2>
                                    <span className={styles.modalRole}>{selectedMember.role}</span>
                                    <div className={styles.modalSocials}>
                                        <Linkedin className={styles.socialIconDark} />
                                        <Mail className={styles.socialIconDark} />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.modalBody}>
                                {selectedMember.bio.map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
