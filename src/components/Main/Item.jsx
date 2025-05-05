import {useState} from "react";
import styles from "./Main.module.scss";
import openIcon from "../../images/icon6.svg";

const Item = ({user}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.item}>
            <input className={styles.checkbox} type='checkbox'/>
            <p className={styles.itemText}>{user.type}</p>
            <p className={styles.itemText}>
                {user.email}
            </p>
            <p className={styles.itemText}>{user.bank}</p>

            <button className={styles.openButton} onClick={() => setIsOpen(!isOpen)}>
                <img src={openIcon} alt={'+'}/>
            </button>

            {isOpen && (
                <div className={styles.editPopup}>
                    <p className={styles.itemText}>Действия</p>
                    <p className={styles.itemText}>Подробнее</p>
                    <p className={styles.itemText}>Удалить</p>
                </div>
            )}
        </div>
    )
}

export default Item;
