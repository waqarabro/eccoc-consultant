import styles from './ServiceCard.module.css';
import { Check } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    points: string[];
    isActive?: boolean;
}

const ServiceCard = ({ title, description, points, isActive = false }: ServiceCardProps) => {
    return (
        <div className={`${styles.card} ${isActive ? styles.active : ''}`}>
            <div className={styles.blob}></div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>

                <ul className={styles.points}>
                    {points.map((point, index) => (
                        <li key={index}>
                            <span className={styles.icon}>
                                <Check size={14} strokeWidth={3} />
                            </span>
                            {point}
                        </li>
                    ))}
                </ul>

                <div className={styles.footer}>
                    <div className={styles.more}>
                        Learn More <span>→</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
