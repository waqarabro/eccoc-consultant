import styles from './Section.module.css';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    dark?: boolean;
}

const Section = ({ children, className = '', id, dark = false }: SectionProps) => {
    return (
        <section
            id={id}
            className={`${styles.section} ${dark ? styles.dark : ''} ${className}`}
        >
            <div className={styles.container}>
                {children}
            </div>
        </section>
    );
};

export default Section;
