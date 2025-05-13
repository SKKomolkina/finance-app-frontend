import styles from './SignPage.module.scss';
import image from '../../images/welcome-image.svg';
import {Link} from "react-router-dom";
import buttonBlack from "../ButtonBlack/ButtonBlack";
import {useState} from "react";

const SignIn = ({registration}) => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [tinValue, setTinValue] = useState('');
    const [accountValue, setAccountValue] = useState('');
    const [bankValue, setBankValue] = useState(0);
    const [phoneValue, setPhoneValue] = useState('');

    function handleSubmit(evt) {
        evt.preventDefault();

        const email = emailValue;
        const password = passwordValue;
        const name = nameValue;
        const accountNumber = accountValue;
        const tin = tinValue;
        const bank = bankValue;
        const phone = phoneValue;

        registration(email, password, name, phone, tin, accountNumber, bank);
    }

    function handleChangeEmail(evt) {
        setEmailValue(evt.target.value);
    }

    function handleChangePassword(evt) {
        setPasswordValue(evt.target.value);
    }

    function handleChangePhone(evt) {
        setPhoneValue(evt.target.value);
    }

    function handleChangeAccountNumber(evt) {
        setAccountValue(evt.target.value);
    }

    function handleChangeName(evt) {
        setNameValue(evt.target.value);
    }

    function handleChangeTin(evt) {
        setTinValue(evt.target.value);
    }

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

                <form className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.label}>
                        Электронная почта
                        <input onChange={handleChangeEmail} className={styles.input} value={emailValue} type="text"
                               name="email" placeholder='example@email.com'/>
                    </label>

                    <label className={styles.label}>
                        Пароль
                        <input onChange={handleChangePassword} className={styles.input} value={passwordValue}
                               type="text" name="password"
                               placeholder='как минимум 6 символов'/>
                    </label>

                    <label className={styles.label}>
                        Повторите пароль
                        <input className={styles.input} type="text" name="password"
                               placeholder='как минимум 6 символов'/>
                    </label>

                    <label className={styles.label}>
                        Имя
                        <input onChange={handleChangeName} className={styles.input} value={nameValue} type="text"
                               name="name" placeholder='как минимум 6 символов'/>
                    </label>

                    <label className={styles.label}>
                        Номер телефона
                        <input onChange={handleChangePhone} className={styles.input} value={phoneValue} type="text"
                               name="phone" placeholder='10 цифр'/>
                    </label>

                    <label className={styles.label}>
                        ИНН
                        <input onChange={handleChangeTin} className={styles.input} value={tinValue} type="text"
                               name="inn" placeholder='10 или 12 цифр'/>
                    </label>

                    <label className={styles.label}>
                        Номер счета
                        <input onChange={handleChangeAccountNumber} className={styles.input} value={accountValue}
                               type="text" name="wallet" placeholder='как минимум 20 цифр'/>
                    </label>

                    <button type="submit" className={buttonBlack.button}>Зарегистрироваться</button>
                </form>

                <div className={styles.textWrapper}>
                    <p className={styles.text}>Уже есть аккаунт?</p>
                    <Link to={'/login'}>Войдите здесь</Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
