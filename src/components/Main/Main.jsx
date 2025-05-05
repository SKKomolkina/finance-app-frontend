import styles from './Main.module.scss';
import Menu from "../Menu/Menu";
import buttonstyles from '../ButtonBlack/ButtonBlack.module.scss';
import icon from '../../images/plus.svg';
import Item from "./Item";
import {useState} from "react";
import TransactionPopup from "../Popup/TransactionPopup";

const MainMenu = ({users}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={styles.menu}>
                <h2 className={styles.title}>Ваши транзакции</h2>
                <button onClick={() => setIsOpen(true)} className={buttonstyles.button}>
                    <img src={icon} alt={'+'}/>
                    Добавить
                </button>

                {isOpen && (
                    <TransactionPopup isOpen={isOpen} setIsOpen={setIsOpen}/>
                )}

                <div className={styles.table}>
                    <div className={styles.item}>
                        <p></p>
                        <p className={styles.itemTextSpan}>Номер счета</p>
                        <p className={styles.itemTextSpan}>
                            Банк
                        </p>
                        <p className={styles.itemTextSpan}>
                            Номер договора
                        </p>
                    </div>

                    {users.map((item, i) => (
                        <Item key={i} user={item}/>
                    ))}
                </div>
            </div>
        </>
    )
}

const Main = ({users}) => {
    return (
        <main className={styles.main}>
            <Menu/>

            <MainMenu users={users}/>
        </main>
    );
};

export default Main;
