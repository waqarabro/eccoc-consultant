'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './HeroSlider.module.css';

const slides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop', // Meeting/Strategy
        title: "Practical Business Advice.",
        subtitle: "Grounded in Real Experience.",
        description: "Every advisor at Management Consultants has built, operated, and sold businesses. We don't just talk theory."
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop', // Architecture/Scale
        title: "Structure for Growth.",
        subtitle: "Built to Last.",
        description: "We help you implement the systems and teams needed to scale efficiently without chaos."
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop', // Handshake/Trust
        title: "Entrepreneurs First.",
        subtitle: "Consultants Second.",
        description: "We understand the emotional weight of decision making because we've been there ourselves."
    }
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000); // 6s per slide
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <section className={styles.slider}>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={current}
                    className={styles.slideBackground}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div
                        className={styles.backgroundImage}
                        style={{ backgroundImage: `url(${slides[current].image})` }}
                    />
                    <div className={styles.overlay} />
                </motion.div>
            </AnimatePresence>

            <div className={styles.contentContainer}>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={current}
                        className={styles.textWrapper}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className={styles.title}>
                            {slides[current].title}
                            <span className={styles.subtitle}>{slides[current].subtitle}</span>
                        </h1>
                        <p className={styles.description}>{slides[current].description}</p>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href="/contact" className={styles.cta}>
                                START THE CONVERSATION <ArrowRight size={20} />
                            </Link>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

                <div className={styles.controls}>
                    <button onClick={prevSlide} className={styles.controlBtn}><ChevronLeft size={24} /></button>
                    <div className={styles.indicators}>
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                className={`${styles.indicator} ${index === current ? styles.active : ''}`}
                                onClick={() => setCurrent(index)}
                            />
                        ))}
                    </div>
                    <button onClick={nextSlide} className={styles.controlBtn}><ChevronRight size={24} /></button>
                </div>
            </div>
        </section>
    );
};

export default HeroSlider;
