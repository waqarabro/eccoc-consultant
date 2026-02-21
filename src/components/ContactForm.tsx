'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MouseEvent } from 'react';
import Section from './Section';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <Section id="contact-form" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.formWrapper}
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.content} style={{ transform: "translateZ(50px)" }}>
                        <h2 className={styles.title}>Intelligence Delivered.</h2>
                        <p className={styles.description}>
                            Running a business is challenging. We help you make the decisions
                            that matter. Book your complimentary strategy session.
                        </p>
                    </div>

                    <form className={styles.form} onSubmit={(e) => e.preventDefault()} style={{ transform: "translateZ(30px)" }}>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="fullName">Full Name</label>
                                <input type="text" id="fullName" name="fullName" required placeholder="John Doe" />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="company">Company</label>
                                <input type="text" id="company" name="company" required placeholder="Your Company Ltd" />
                            </div>
                        </div>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" required placeholder="john@example.com" />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="phone">Phone No</label>
                                <input type="tel" id="phone" name="phone" required placeholder="+61 400 000 000" />
                            </div>
                        </div>
                        <button type="submit" className={styles.submitButton}>
                            BOOK MY SESSION
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={styles.arrowIcon}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </form>

                    {/* Decorative Elements */}
                    <div className={styles.glow}></div>
                </motion.div>
            </div>
        </Section>
    );
};

export default ContactForm;
