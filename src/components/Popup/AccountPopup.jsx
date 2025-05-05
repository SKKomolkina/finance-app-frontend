import styles from './styles.module.scss';
import close from "../../images/close.svg";

const AccountPopup = ({setIsOpen}) => {
    return (
        <div className={styles.popup}>
            <h2 className={styles.title}>Счет</h2>
            <p>Внесите изменения в запись здесь. Нажмите "Сохранить", когда закончите.</p>
            <button onClick={() => setIsOpen(false)} className={styles.buttonClose}>
                <img src={close} alt="close"/>
            </button>

            <form className={styles.form}>
                <label className={styles.label}>
                    Номер счета
                    <input className={styles.input} type={"text"}/>
                </label>

                <label className={styles.label}>
                    Банк
                    <select name={'to'} className={styles.option}>
                        <option value={'---'}>Банк</option>
                        <option value={'me'}>Банк1</option>
                        <option value={'con'}>Банк2</option>
                    </select>
                </label>
            </form>
        </div>
    );
};

export default AccountPopup;
