'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useState, FormEvent } from 'react';
import Section from '@/components/Section';
import styles from './page.module.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
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
            setFormData({ firstName: '', lastName: '', email: '', message: '' });
        } catch (error: any) {
            setStatus('error');
            setErrorMessage(error.message || 'Something went wrong. Please try again.');
        }
    };

    return (
        <main>
            <div className={styles.hero}>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Let's Start a Conversation.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Practical advice grounded in experience. No obligation, just clarity.
                </motion.p>
            </div>

            <Section className={styles.section}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.infoCard}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Get in Touch</h2>
                        <p>Ready to move your business forward? We're here to help you get clarity on your next steps.</p>

                        <div className={styles.contactDetails}>
                            <div className={styles.detailItem}>
                                <div className={styles.iconBox}><Phone size={24} /></div>
                                <div>
                                    <h3>Call Us</h3>
                                    <a href="tel:0385169999">03 8516 9999</a>
                                </div>
                            </div>

                            <div className={styles.detailItem}>
                                <div className={styles.iconBox}><Mail size={24} /></div>
                                <div>
                                    <h3>Email Us</h3>
                                    <a href="mailto:info@eccoc.com.au">info@eccoc.com.au</a>
                                </div>
                            </div>

                            <div className={styles.detailItem}>
                                <div className={styles.iconBox}><MapPin size={24} /></div>
                                <div>
                                    <h3>Visit Us</h3>
                                    <address>Suite 4, 756 Blackburn Rd<br />Clayton, Victoria 3168</address>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.formCard}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.row}>
                                <div className={styles.group}>
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" id="firstName" placeholder="Jane" required value={formData.firstName} onChange={handleChange} />
                                </div>
                                <div className={styles.group}>
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" id="lastName" placeholder="Doe" required value={formData.lastName} onChange={handleChange} />
                                </div>
                            </div>

                            <div className={styles.group}>
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="jane@company.com" required value={formData.email} onChange={handleChange} />
                            </div>

                            <div className={styles.group}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows={5} placeholder="Tell us about your business goals..." required value={formData.message} onChange={handleChange}></textarea>
                            </div>

                            {status === 'success' && (
                                <p className={styles.successMessage}>Thank you! Your message has been sent.</p>
                            )}
                            {status === 'error' && (
                                <p className={styles.errorMessage}>{errorMessage}</p>
                            )}

                            <motion.button
                                type="submit"
                                className={styles.submitBtn}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'SENDING...' : (
                                    <>SEND MESSAGE <ArrowRight size={18} /></>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </Section>
        </main>
    );
}
