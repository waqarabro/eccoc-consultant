'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MouseEvent, useState, FormEvent } from 'react';
import Section from './Section';
import styles from './ContactForm.module.css';

interface ContactFormProps {
    title?: string;
    description?: string;
}

const ContactForm = ({ title, description }: ContactFormProps) => {
    const [formData, setFormData] = useState({
        fullName: '',
        company: '',
        email: '',
        phone: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || 'Failed to send message');
            }

            setStatus('success');
            setFormData({ fullName: '', company: '', email: '', phone: '' });
        } catch (error: any) {
            setStatus('error');
            setErrorMessage(error.message || 'Something went wrong. Please try again.');
        }
    };

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

    const defaultTitle = "Intelligence Delivered.";
    const defaultDescription = "If one or more of these services is relevant to your business, the best next step is a conversation. Complete the form to book a Complimentary Strategy Session and we’ll discuss where to focus.";

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
                        <h2 className={styles.title}>{title || defaultTitle}</h2>
                        <p className={styles.description}>
                            {description || defaultDescription}
                        </p>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit} style={{ transform: "translateZ(30px)" }}>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="fullName">Full Name</label>
                                <input 
                                    type="text" 
                                    id="fullName" 
                                    name="fullName" 
                                    required 
                                    placeholder="John Doe" 
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="company">Company</label>
                                <input 
                                    type="text" 
                                    id="company" 
                                    name="company" 
                                    required 
                                    placeholder="Your Company Ltd" 
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    placeholder="john@example.com" 
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="phone">Phone No</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone" 
                                    required 
                                    placeholder="+61 400 000 000" 
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {status === 'success' && (
                            <p className={styles.successMessage}>Thank you! Your session booking has been received.</p>
                        )}
                        {status === 'error' && (
                            <p className={styles.errorMessage}>{errorMessage}</p>
                        )}

                        <button 
                            type="submit" 
                            className={styles.submitButton}
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'BOOKING...' : 'BOOK MY SESSION'}
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
