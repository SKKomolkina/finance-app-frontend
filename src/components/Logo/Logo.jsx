import styles from './Logo.module.scss';
import logo from '../../images/logo.svg';

const Logo = () => {
    return (
        <img alt='FinSight' src={logo} className={styles.logo}/>
    );
};

export default Logo;
