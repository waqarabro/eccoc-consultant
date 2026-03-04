'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, User } from 'lucide-react';
import Section from '@/components/Section';
import Link from 'next/link';
import styles from './page.module.css';
import { BLOG_POSTS } from '@/lib/blogData';

export default function BlogList() {
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
                    <span className={styles.label}>RESOURCES</span>
                    <h1>
                        The ecco <span className={styles.gradientText}>Blog</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Fresh perspectives and practical advice grounded in real-world experience. Designed for Australian business owners.
                    </p>
                </motion.div>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
            </div>

            {/* BLOG GRID SECTION */}
            <Section className={styles.blogSection}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.blogGrid}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {BLOG_POSTS.map((post, idx) => (
                            <motion.div
                                key={post.id}
                                className={styles.blogCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * idx, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <Link href={`/blog/${post.id}`} className={styles.cardInternalLink}>
                                    <div className={styles.imageWrapper}>
                                        <img src={post.image} alt={post.title} className={styles.cardImage} />
                                        <div className={styles.categoryBadge}>{post.category}</div>
                                    </div>
                                    <div className={styles.cardContent}>
                                        <div className={styles.cardMeta}>
                                            <span className={styles.metaItem}><Clock size={14} /> {post.date}</span>
                                            <span className={styles.metaDivider}>•</span>
                                            <span className={styles.metaItem}><User size={14} /> {post.author}</span>
                                        </div>
                                        <h2 className={styles.cardTitle}>{post.title}</h2>
                                        <p className={styles.cardExcerpt}>{post.excerpt}</p>
                                        <span className={styles.readMore}>
                                            Read Article <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Section>
        </main>
    );
}
