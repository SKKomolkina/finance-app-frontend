import styles from './SignPage.module.scss';
import image from "../../images/welcome-image.svg";
import ButtonBlack from "../ButtonBlack/ButtonBlack";
import {Link} from "react-router-dom";

const Login = () => {
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

                </form>

                <ButtonBlack buttonText={'Войти'}/>
                <div className={styles.textWrapper}>
                    <p className={styles.text}>Ещё нет аккаунта?</p>
                    <Link to={'/sign-in'}>Зарегистрироваться</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
