import Link from 'next/link';
import Logo from './Logo';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <Logo light />
                        <p className={styles.tagline}>
                            Practical business advice grounded in real-world experience.
                        </p>
                    </div>

                    <div className={styles.linksWrapper}>
                        <div className={styles.column}>
                            <h3>Company</h3>
                            <nav className={styles.nav}>
                                <Link href="/about">About Us</Link>
                                <Link href="/services">Services</Link>
                                <Link href="/why-eccoc">Why Us</Link>
                                <Link href="/contact">Contact</Link>
                            </nav>
                        </div>

                        <div className={styles.column}>
                            <h3>Resources</h3>
                            <nav className={styles.nav}>
                                <Link href="/insights">Insights</Link>
                                <Link href="/case-studies">Case Studies</Link>
                                <Link href="/privacy-policy">Privacy Policy</Link>
                                <Link href="/team">Meet the Team</Link>
                            </nav>
                        </div>

                        <div className={styles.column}>
                            <h3>Contact</h3>
                            <address className={styles.address}>
                                <p>Suite 4, 756 Blackburn Rd<br />Clayton, Victoria 3168</p>
                                <p><a href="tel:0385169999">03 8516 9999</a></p>
                                <p><a href="mailto:info@eccoc.com.au">info@eccoc.com.au</a></p>
                            </address>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} eccoc Consultants. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
