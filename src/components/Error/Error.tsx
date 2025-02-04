import styles from "./Error.module.css";

const Error = () => {
    return <div className={styles.error}>
        <div className={styles.xis}>
            <div className={styles.barra__um}></div>
            <div className={styles.barra__dois}></div>
        </div>
        <p className={styles.texto}>Algo deu errado!</p>
    </div>
}

export default Error;