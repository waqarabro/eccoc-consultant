'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Logo from './Logo';
import styles from './Navbar.module.css';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Why ecco', path: '/why-eccoc' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.nav
            className={styles.navbar}
            animate={{
                backgroundColor: isScrolled || isMobileMenuOpen ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 1)",
                backdropFilter: isScrolled || isMobileMenuOpen ? "blur(16px)" : "blur(0px)",
                boxShadow: isScrolled ? "var(--shadow-md)" : "none",
                padding: isScrolled ? "0.75rem 0" : "1.5rem 0"
            }}
            transition={{ duration: 0.3 }}
        >
            <div className={styles.container}>
                <Link href="/" className={styles.logoLink} style={{ textDecoration: 'none' }}>
                    <Logo />
                </Link>

                {/* Desktop Links */}
                <div className={styles.links}>
                    {navItems.map((item) => (
                        <Link href={item.path} key={item.name} className={styles.link}>
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className={styles.cta}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/contact" className={styles.button}>BOOK A CALL</Link>
                    </motion.div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <motion.div
                className={styles.mobileMenu}
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: isMobileMenuOpen ? 'auto' : 0,
                    opacity: isMobileMenuOpen ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
            >
                <div className={styles.mobileLinks}>
                    {navItems.map((item) => (
                        <Link
                            href={item.path}
                            key={item.name}
                            className={styles.mobileLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className={styles.mobileCta}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        BOOK A CALL
                    </Link>
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
