import Image from "next/image";
import styles from "./Section.module.css";

const Section = () => {
    return <article className={styles.section}>
        <Image className={styles.foto} src="/foto.jpg" width={120} height={120} priority alt="Foto de Guilherme Moraes" />
        <h1 className={styles.h1}>Guilherme Moraes</h1>
        <p><strong>Email: </strong>ggm.eng23&#64;uea.edu.br</p>
        <ul className={styles.icons}>
            <li>
                <a href="https://github.com/guighm" className={styles.icon}>
                    <Image className={styles.icon__image} src="/github.png" width={40}
                        height={40} alt="Ícone do GitHub" />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/guighm/" className={styles.icon}>
                    <Image className={styles.icon__image} src="/linkedin.png" width={40}
                        height={40} alt="Ícone do LinkedIn" />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/guighm/" className={styles.icon}>
                    <Image className={styles.icon__image} src="/instagram.png" width={40} height={40} alt="Ícone do Instagram" />
                </a>
            </li>
        </ul>
    </article>
}

export default Section;