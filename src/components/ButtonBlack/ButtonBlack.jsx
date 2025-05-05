import styles from './ButtonBlack.module.scss';

const ButtonBlack = ({buttonText, funct}) => {
    return (
        <button onClick={() => funct()} className={styles.button}>
            {buttonText}
        </button>
    );
};

export default ButtonBlack;
