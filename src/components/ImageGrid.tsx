'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import styles from './ImageGrid.module.css';

const images = [
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80', // Meeting
    'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80', // Office
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80', // Analysis
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80', // Team
];

const ImageGrid = () => {
    return (
        <Section className={styles.section}>
            <div className={styles.grid}>
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        className={styles.imageWrapper}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <img src={src} alt="Business Environment" className={styles.image} />
                    </motion.div>
                ))}

                <div className={styles.overlayText}>
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Real World.<br />Real Results.
                    </motion.h3>
                </div>
            </div>
        </Section>
    );
};

export default ImageGrid;
