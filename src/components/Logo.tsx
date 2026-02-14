import styles from './Logo.module.css';

interface LogoProps {
    light?: boolean;
}

const Logo = ({ light = false }: LogoProps) => {
    return (
        <div className={`${styles.logo} ${light ? styles.light : ''}`}>
            <span className={styles.text}>Management</span>
            <span className={styles.consultants}>Consultants</span>
        </div>
    );
};

export default Logo;
