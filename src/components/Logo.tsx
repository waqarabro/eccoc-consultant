import styles from './Logo.module.css';

interface LogoProps {
    light?: boolean;
}

const Logo = ({ light = false }: LogoProps) => {
    return (
        <div className={`${styles.logo} ${light ? styles.light : ''}`}>
            <img
                src="/logo.png"
                alt="Ecco Consultants"
                className={styles.logoImage}
                style={{
                    height: 'auto',
                    width: 'auto',
                    maxHeight: '50px',
                    maxWidth: '180px', /* Constraint added */
                    objectFit: 'contain'
                }}
            />
        </div>
    );
};

export default Logo;
