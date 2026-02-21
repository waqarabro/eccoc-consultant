import { motion } from 'framer-motion';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
    title: string;
    description: string;
    points: string[];
    isActive: boolean;
}

const ServiceCard = ({ title, description, points, isActive }: ServiceCardProps) => {
    return (
        <motion.div
            className={`${styles.card} ${isActive ? styles.active : ''}`}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className={styles.blob}></div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <ul className={styles.points}>
                    {points.map((point, index) => (
                        <li key={index}>
                            <span className={styles.iconWrapper}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
                                    <path d="M20 6 9 17l-5-5" />
                                </svg>
                            </span>
                            {point}
                        </li>
                    ))}
                </ul>
                <div className={styles.footer}>
                    <div className={styles.more}>
                        Learn More
                        <span>→</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
