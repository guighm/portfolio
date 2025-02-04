import styles from "./Footer.module.css";

const Footer = () => {
    const ano = new Date().getFullYear();
    return <footer className={styles.footer}>
        <p>Desenvolvido por Guilherme Moraes</p>
        <div className={styles.copyright}>
            <p>&copy;</p>
            <p>{ano}</p>
        </div>
    </footer>
}

export default Footer;