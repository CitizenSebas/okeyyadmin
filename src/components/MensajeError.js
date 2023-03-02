import styles from '../styles/Home.module.css'

const MensajeError = ({children}) => {
    return (
        <div className={styles.error}>
            <p>{children}</p>
        </div>
    );
}

export default MensajeError;