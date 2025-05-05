import styles from './SignPage.module.scss';
import image from '../../images/welcome-image.svg';
import ButtonBlack from "../ButtonBlack/ButtonBlack";
import {Link} from "react-router-dom";

const SignIn = () => {
    return (
        <div className={styles.main}>
            <div className={styles.welcomeWrapper}>
                <img className={styles.welcomeImage} src={image} alt=''/>

                <p className={styles.welcomeText}>Ваши финансы наконец-то обретают смысл</p>
            </div>

            <div className={styles.formWrapper}>
                <h1 className={styles.title}>
                    Приветствуем в FinSight
                </h1>
                <p className={styles.subtitle}>
                    Начните управлять своими финансами быстрее и эффективнее
                </p>

                <form className={styles.form}>
                    <label className={styles.label}>
                        Электронная почта
                        <input className={styles.input} type="text" name="email" placeholder='example@email.com'/>
                    </label>

                    <label className={styles.label}>
                        Пароль
                        <input className={styles.input} type="text" name="password"
                               placeholder='как минимум 6 символов'/>
                    </label>

                    <label className={styles.label}>
                        Повторите пароль
                        <input className={styles.input} type="text" name="password"
                               placeholder='как минимум 6 символов'/>
                    </label>

                    <label className={styles.label}>
                        Имя
                        <input className={styles.input} type="text" name="name" placeholder='как минимум 6 символов'/>
                    </label>

                    <label className={styles.label}>
                        Номер телефона
                        <input className={styles.input} type="text" name="phone" placeholder='10 цифр'/>
                    </label>

                    <label className={styles.label}>
                        ИНН
                        <input className={styles.input} type="text" name="inn" placeholder='10 или 12 цифр'/>
                    </label>

                    <label className={styles.label}>
                        Номер счета
                        <input className={styles.input} type=" text" name="wallet" placeholder='как минимум 20 цифр'/>
                    </label>
                </form>

                <ButtonBlack buttonText={'Зарегистрироваться'}/>
                <div className={styles.textWrapper}>
                    <p className={styles.text}>Уже есть аккаунт?</p>
                    <Link to={'/login'}>Войдите здесь</Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
