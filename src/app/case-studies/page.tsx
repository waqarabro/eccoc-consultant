'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';
import Section from '@/components/Section';
import styles from './page.module.css';

const testimonials = [
    {
        company: "ABSAFE",
        industry: "Safety and Risk Management",
        leader: "Sandra",
        title: "CEO of ABSAFE",
        intro: "Absafe, a safety and risk management company, first engaged with Ecco Consultants in May 2023. Sandra, representing Absafe, worked closely with Frank Colli, Ecco's Founder & an experienced consultant. The goal was to enhance both personal and business performance through strategic guidance and support.",
        keyWins: [
            {
                title: "Enhanced Financial Knowledge & Business Understanding",
                description: "Frank and the Ecco Consulting team have significantly contributed to Sandra's development, not only on a financial level but also by expanding her overall business knowledge. This deeper understanding has empowered her to excel in her role."
            },
            {
                title: "Increased Confidence Across the Business",
                description: "Having Frank as a trusted advisor to discuss ideas and strategies has resulted in greater confidence throughout the business. Absafe now benefits from having an experienced consultant to interpret data and offer valuable insights."
            },
            {
                title: "Improved Data Interpretation",
                description: "Frank's ability to analyze data and generate meaningful outputs has proven to be a game-changer. His expertise in transforming raw data into actionable strategies has greatly benefitted Absafe's decision-making process."
            },
            {
                title: "Successful Recruitment and Team Building",
                description: "Ecco Consulting has also been instrumental in helping Absafe with the recruitment, assessment, and selection of new team members, ensuring the right talent is brought into the business."
            }
        ],
        impact: [
            "Personal and Business Confidence: Sandra has experienced a noticeable boost in her confidence, both personally and professionally, thanks to Frank's guidance.",
            "Better Decision-Making: Armed with enhanced knowledge, strategy, and confidence, Absafe is now making more informed decisions.",
            "Improved clarity and consistency in business operations"
        ]
    },
    {
        company: "RTB Concepts",
        industry: "Commercial Services",
        leader: "Managing Director of RTB Concepts",
        title: "RTB Concepts",
        intro: "RTB Concepts engaged Ecco Consultants three months ago to address several business challenges. The focus was on cost reduction, improving recruitment processes, and gaining clarity on financial performance.",
        keyWins: [
            {
                title: "Lease Renegotiation",
                description: "Ecco Consultants successfully renegotiated RTB's property lease, saving $40 per square meter across 5,000 square meters. This has led to a significant cost reduction of approximately $200,000 annually."
            },
            {
                title: "Enhanced Interview Process",
                description: "Ecco/Frank demonstrated effective interview techniques, which has improved RTB's approach to recruitment, helping streamline and improve their hiring process."
            },
            {
                title: "Regular Finance Meetings",
                description: "Establishing regular finance meetings has allowed RTB Concepts to assess their numbers with greater clarity. This shift in focus has enabled the company to make more informed decisions about their financial strategy."
            }
        ],
        impact: [
            "Cost Savings: $200,000 annually from rent reduction, freeing up capital for other initiatives",
            "Recruitment System Improvements: A structured recruitment system is now in place",
            "Financial Insight: With ongoing financial reviews, RTB has a clearer understanding of their financial health"
        ]
    },
    {
        company: "My Home Connect",
        industry: "Home Security & Automation Systems",
        leader: "Raam Siva",
        title: "Managing Director of My Home Connect",
        intro: "We wouldn't be where we are today without Ecco Consultants helping us. Frank Colli and his team challenge our thinking, which makes us look at things in different ways. They do this in a nice way rather than taking a confrontational approach and that has been really beneficial.",
        keyWins: [
            {
                title: "Strategic Thinking & Decision-Making",
                description: "My typical style is fast paced, which means I can jump into decisions quite quickly. Ecco Consultants has taught me to take a step back, look at all the facts and work out strategies before jumping into decisions. That's been very helpful and is making me grow personally."
            },
            {
                title: "Hands-On Expertise & Support",
                description: "Because Frank and Carolynne have the experience in growing a start-up to a national $280 million business with 330 staff, they really can walk the talk. Unlike other consultants, they will get their hands dirty and be with you in the trenches."
            },
            {
                title: "Recruitment & People Management",
                description: "Carolynne is extremely insightful as she sees things that most people wouldn't see, particularly when it comes to people. Her expertise in the recruitment process is invaluable, screening and assessing candidates to ensure we have higher retention and increased productivity."
            },
            {
                title: "Aligned Values & Mutual Trust",
                description: "Our ethos in business is very similar to Ecco Consultants as we both aim to add value for our clients. Frank and his team truly add value. The key is a lot of mutual trust and also, we simply like them as people."
            }
        ],
        impact: [
            "Personal & Business Growth: Developed strategic thinking and decision-making capabilities",
            "Improved Team Retention: Better recruitment processes and people management",
            "Scalable Systems: Built systems that support sustainable growth"
        ]
    },
    {
        company: "OmniVision",
        industry: "Commercial Surveillance & Security Systems",
        leader: "Manoj Jayasuriya",
        title: "Managing Director of OmniVision",
        intro: "We've been in business for 15 years and it's only in the past year or so that we've started working with Ecco Consultants. The positive changes to OmniVision have been spectacular. We value and trust them so unreservedly that our team members even have Ecco business cards.",
        keyWins: [
            {
                title: "Strategic Decision-Making",
                description: "In virtually every major decision making process, Frank will assess it, particularly from a sales and business perspective and challenge our thinking to make sure we've covered every angle."
            },
            {
                title: "Marketing & People Excellence",
                description: "Carolynne is brilliant on the marketing and people side, bringing a wealth of expertise that has transformed how we approach these critical areas of the business."
            },
            {
                title: "Financial Strategy & Growth",
                description: "Graham is a financial whiz. Through new strategies based on strong financial stability, we are now on a growth trajectory that was unattainable with our previous advisors."
            },
            {
                title: "Personal Development & Skill Building",
                description: "The difference with Ecco Consultants is that they have done it and they know how to teach us using a formal comparative rating system. It's really helped me develop personally and improve my skills and abilities."
            }
        ],
        impact: [
            "Spectacular Business Transformation: Positive changes across all areas of the business",
            "Growth Trajectory: Now on an unattainable growth path with previous advisors",
            "Trusted Partnership: Such confidence that Ecco team members have company business cards"
        ]
    },
    {
        company: "Wattrix Electrical Contracting",
        industry: "Electrical Contracting, Asset Maintenance & Services",
        leader: "Adam Farrugia",
        title: "Managing Director of Wattrix Electrical Contracting",
        intro: "Before we engaged Ecco Consultants, as a typical small business with around 10 employees, we were all working very long hours. While the business was growing in terms of sales, profits remained stagnant, and I couldn't see an end to this energy-sapping cycle.",
        keyWins: [
            {
                title: "Business Clarity & Direction",
                description: "Frank and Carolynne helped us to understand what our real business differentiator is, what offerings to focus on and identify our target markets. I became clear on the company vision and understood the importance of having the right staff with the right skillsets."
            },
            {
                title: "Team Transformation & Staff Engagement",
                description: "Carolynne did one-on-ones with each staff member to uncover anything that was stopping them from being efficient. Job descriptions and a marketing plan were created. Everyone was involved in this training and the clarity we achieved was extraordinary."
            },
            {
                title: "Hands-On Implementation",
                description: "Ecco Consultants became part of our team holding our hand along the way, showing us how to make these changes, then backing out and mentoring us from the side. They were involved at every step."
            },
            {
                title: "Profitability & Work-Life Balance",
                description: "The final outcome is that we have managed to move our company forward resulting in more sales, greater profits and our staff are now engaged and committed. Most importantly, we finally have work-life balance."
            }
        ],
        impact: [
            "Sales Growth: Achieved significant increase in sales revenue",
            "Profit Improvement: Profits growing alongside sales for the first time",
            "Team Engagement: Staff now engaged and committed to the business",
            "Work-Life Balance: Owners finally achieving sustainable working hours"
        ]
    }
];

export default function CaseStudiesPage() {
    return (
        <main className={styles.main}>
            {/* HERO SECTION */}
            <div className={styles.hero}>
                <motion.div
                    className={styles.heroContent}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className={styles.label}>CASE STUDIES</span>
                    <h1>
                        How We've Helped Business Owners<br />
                        <span className={styles.gradientText}>Create Real Results</span>
                    </h1>
                </motion.div>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
            </div>

            {/* TESTIMONIALS SECTION */}
            <Section className={styles.testimonialsSection}>
                <div className={styles.container}>
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            className={styles.testimonialBlock}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {/* HEADER */}
                            <div className={styles.testimonialHeader}>
                                <div className={styles.headerLeft}>
                                    <h2 className={styles.companyName}>{testimonial.company}</h2>
                                    <p className={styles.industry}>{testimonial.industry}</p>
                                </div>
                                <div className={styles.headerRight}>
                                    <p className={styles.leader}>{testimonial.leader}</p>
                                    <p className={styles.title}>{testimonial.title}</p>
                                </div>
                            </div>

                            {/* INTRO */}
                            <motion.div
                                className={styles.introBox}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <Quote size={24} className={styles.quoteIcon} />
                                <p className={styles.introText}>{testimonial.intro}</p>
                            </motion.div>

                            {/* KEY WINS */}
                            <div className={styles.keyWinsSection}>
                                <h3 className={styles.keyWinsTitle}>Key Wins</h3>
                                <motion.div
                                    className={styles.keyWinsGrid}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    {testimonial.keyWins.map((win, winIdx) => (
                                        <motion.div
                                            key={winIdx}
                                            className={styles.winCard}
                                            initial={{ opacity: 0, y: 15 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 * winIdx, duration: 0.6 }}
                                            viewport={{ once: true }}
                                        >
                                            <h4>{win.title}</h4>
                                            <p>{win.description}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* IMPACT */}
                            <div className={styles.impactSection}>
                                <h3 className={styles.impactTitle}>Impact on Business</h3>
                                <motion.div
                                    className={styles.impactList}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    {testimonial.impact.map((item, impIdx) => (
                                        <motion.div
                                            key={impIdx}
                                            className={styles.impactItem}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 * impIdx, duration: 0.6 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className={styles.impactDot} />
                                            <p>{item}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* DIVIDER */}
                            {idx < testimonials.length - 1 && (
                                <div className={styles.divider} />
                            )}
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* FINAL CTA */}
            <Section className={styles.finalCTA}>
                <motion.div
                    className={styles.ctaCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2>Ready to Create Your Success Story?</h2>
                    <p>Let's explore how Ecco Consultants can help your business reach new heights of growth and profitability.</p>
                    <motion.a
                        href="/contact"
                        className={styles.ctaButton}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Book a Conversation
                        <ArrowRight size={20} />
                    </motion.a>
                </motion.div>
            </Section>
        </main>
    );
}
