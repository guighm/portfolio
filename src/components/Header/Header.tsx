import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
    return <header>
        <nav className={styles.navegacao}>
            <div className={styles.navegacao__opcao}>
                <Link href={"/"} className={styles.navegacao__link}>Home</Link>
                <div className={styles.navegacao__listra}></div>
            </div>
            <div className={styles.navegacao__opcao}>
                <Link href={"/projetos"} className={styles.navegacao__link}>Projetos</Link>
                <div className={styles.navegacao__listra}></div>
            </div>
        </nav>
    </header>

}

export default Header;