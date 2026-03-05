'use client';

import { motion } from 'framer-motion';
import Section from '@/components/Section';
import styles from './page.module.css';

export default function PrivacyPolicyPage() {
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
                    <h1>Privacy Policy</h1>
                    <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString('en-AU', { month: 'long', year: 'numeric' })}</p>
                </motion.div>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
            </div>

            {/* CONTENT SECTION */}
            <Section className={styles.contentSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.documentBody}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>1. Introduction</h2>
                        <p>
                            Welcome to <strong>ecco Consultants</strong> ("we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at <a href="mailto:info@eccoc.com.au">info@eccoc.com.au</a>.
                        </p>
                        <p>
                            This Privacy Policy applies to all information collected through our website, as well as any related services, sales, marketing, or events.
                        </p>

                        <h2>2. Information We Collect</h2>
                        <p>
                            We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our services, or otherwise contact us. The personal information that we collect depends on the context of your interactions with us and the website, but may include:
                        </p>
                        <ul>
                            <li><strong>Personal Details:</strong> Name, email address, phone number, and company name.</li>
                            <li><strong>Device Data:</strong> We automatically collect certain information when you visit, use, or navigate the website, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, and geographical location.</li>
                        </ul>

                        <h2>3. How We Use Your Information</h2>
                        <p>
                            We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                        </p>
                        <ul>
                            <li>To facilitate account creation and logon process.</li>
                            <li>To send administrative and consulting information to you.</li>
                            <li>To fulfill and manage your requests for advisory services or strategy sessions.</li>
                            <li>To improve our website functionality, diagnostics, and overall user experience.</li>
                        </ul>

                        <h2>4. Will Your Information Be Shared With Anyone?</h2>
                        <p>
                            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on the following legal basis:
                        </p>
                        <ul>
                            <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information.</li>
                            <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
                            <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
                        </ul>

                        <h2>5. How Long Do We Keep Your Information?</h2>
                        <p>
                            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
                        </p>

                        <h2>6. How Do We Keep Your Information Safe?</h2>
                        <p>
                            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
                        </p>

                        <h2>7. Your Privacy Rights</h2>
                        <p>
                            Depending on your location, you may have rights under applicable data protection laws to access, correct, or delete the personal data we hold about you. If you would like to make a request regarding your data, please contact us using the details below.
                        </p>

                        <h2>8. Contact Us</h2>
                        <p>
                            If you have questions or comments about this notice, you may email us at <a href="mailto:info@eccoc.com.au">info@eccoc.com.au</a> or by post to:
                        </p>
                        <address>
                            <strong>ecco Consultants</strong><br />
                            Suite 4, 756 Blackburn Rd<br />
                            Clayton, Victoria 3168<br />
                            Australia
                        </address>
                    </motion.div>
                </div>
            </Section>
        </main>
    );
}
