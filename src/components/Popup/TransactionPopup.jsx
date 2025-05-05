import styles from './styles.module.scss';
import close from '../../images/close.svg';

const TransactionPopup = ({isOpen, setIsOpen}) => {
    return (
        <div className={styles.popup}>
            <h2 className={styles.title}>Транзакция</h2>
            <button onClick={() => setIsOpen(false)} className={styles.buttonClose}>
                <img src={close} alt="close"/>
            </button>

            <form className={styles.form}>
                <label className={styles.label}>
                    Дата
                    <input className={styles.input} type={"date"}/>
                </label>

                <label className={styles.label}>
                    Получатель
                    <select name={'to'} className={styles.input}>
                        <option value={'---'}>Я или контрагент</option>
                        <option value={'me'}>Я</option>
                        <option value={'con'}>контрагент</option>
                    </select>
                </label>

                <label className={styles.label}>
                    Отправитель
                    <select name={'to'} className={styles.option}>
                        <option value={'---'}>Я или контрагент</option>
                        <option value={'me'}>Я</option>
                        <option value={'con'}>контрагент</option>
                    </select>
                </label>

                <label className={styles.label}>
                    Мой счет
                    <select name={'to'} className={styles.option}>
                        <option value={'---'}>Я или контрагент</option>
                        <option value={'me'}>Я</option>
                        <option value={'con'}>контрагент</option>
                    </select>
                </label>
            </form>
        </div>
    );
};

export default TransactionPopup;
