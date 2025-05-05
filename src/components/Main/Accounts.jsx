import styles from "./Main.module.scss";
import buttonstyles from "../ButtonBlack/ButtonBlack.module.scss";
import icon from "../../images/plus.svg";
import Menu from "../Menu/Menu";
import Item from "./Item";
import {useState} from "react";
import AccountPopup from "../Popup/AccountPopup";

const Accounts = ({users}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main className={styles.main}>
            <Menu/>

            <div className={styles.menu}>
                <h2 className={styles.title}>Мои счета</h2>
                <button onClick={() => setIsOpen(true)} className={buttonstyles.button}>
                    <img src={icon} alt={'+'}/>
                    Добавить
                </button>

                {isOpen && (
                    <AccountPopup setIsOpen={setIsOpen} />
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
        </main>
    )
}

export default Accounts;
