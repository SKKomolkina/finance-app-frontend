import styles from "./Main.module.scss";
import formStyles from '../SingPage/SignPage.module.scss';
import Menu from "../Menu/Menu";
import ButtonBlack from "../ButtonBlack/ButtonBlack";
import {useState} from "react";
import buttonStyles from '../ButtonBlack/ButtonBlack.module.scss';

const Profile = ({user}) => {
    const [formData, setFormData] = useState(user);
    const [tempData, setTempData] = useState(user);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
        setTempData(formData); // Сохраняем копию текущих данных
    };

    const handleCancel = () => {
        setFormData(tempData); // Откат к предыдущему состоянию
        setIsEditing(false);
    };

    const handleSave = () => {
        setTempData(formData); // Обновляем сохранённые данные
        setIsEditing(false);
        // Тут можно отправить данные на сервер
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <main className={styles.main}>
            <Menu/>

            <div className={styles.profileWrapper}>
                <h2 className={styles.title}>Мои счета</h2>

                <form onChange={handleChange} className={formStyles.form}>
                    <label className={formStyles.label}>
                        Электронная почта
                        <input className={!isEditing ? formStyles.input : formStyles.inputActive} disabled={!isEditing}
                               type="text" name="email"
                               value={user.email}
                               placeholder={user.email}/>
                    </label>

                    <label className={formStyles.label}>
                        Имя
                        <input className={!isEditing ? formStyles.input : formStyles.inputActive} disabled={!isEditing}
                               type="text" name="name"
                               value={user.name}
                               placeholder={user.name}/>
                    </label>

                    <label className={formStyles.label}>
                        ИНН
                        <input className={!isEditing ? formStyles.input : formStyles.inputActive} disabled={!isEditing}
                               type="text" name="inn"
                               value={user.tin}
                               placeholder={user.tin}/>
                    </label>

                    <label className={formStyles.label}>
                        Телефон
                        <input className={!isEditing ? formStyles.input : formStyles.inputActive} disabled={!isEditing}
                               type="text" name="phone"
                               value={user.phoneNumber}
                               placeholder={user.phoneNumber}/>
                    </label>
                </form>

                {
                    !isEditing ? (
                        <ButtonBlack funct={handleEdit} buttonText={'Изменить'}/>
                    ) : <button onClick={handleSave} className={buttonStyles.button}>
                        Сохранить
                    </button>
                }

                {isEditing && (
                    <button onClick={handleCancel} className={buttonStyles.buttonGray}>
                        Отменить
                    </button>
                )}
            </div>
        </main>
    )
}

export default Profile;
