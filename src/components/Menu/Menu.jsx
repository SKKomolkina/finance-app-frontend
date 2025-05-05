import styles from './Menu.module.scss';
import {Link} from "react-router-dom";
import icon1 from '../../images/icon1.svg';
import icon2 from '../../images/icon2.svg';
import icon3 from '../../images/icon3.svg';
import icon4 from '../../images/icon4.svg';
import icon5 from '../../images/icon5.svg';

const Menu = () => {
    return (
        <div className={styles.menu}>
            <p className={styles.title}>Основное меню</p>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link  className={styles.link} to="/">
                        <img alt={'Мои транзакции'} src={icon1} className={styles.icon}/>
                        Мои транзакции
                    </Link>
                </li>

                <li className={styles.item}>
                    <Link className={styles.link} to="/accounts">
                        <img alt={'Мои счета'} src={icon2} className={styles.icon}/>
                        Мои счета
                    </Link>
                </li>

                <li className={styles.item}>
                    <Link className={styles.link} to="/">
                        <img alt={'Мои контрагенты'} src={icon3} className={styles.icon}/>
                        Мои контрагенты
                    </Link>
                </li>

                <li className={styles.item}>
                    <Link className={styles.link} to="/profile">
                        <img alt={'Мой профиль'} src={icon4} className={styles.icon}/>
                        Мой профиль
                    </Link>
                </li>
            </ul>

            <p className={styles.title}>Остальное</p>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link className={styles.link} to="/">
                        <img alt={'Выйти'} src={icon5} className={styles.icon}/>
                        Выйти
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
