import Image from "next/image";
import styles from "./Card.module.css";

const Card = ({link, titulo, tecnologias} : {link: string, titulo: string, tecnologias: string[]}) => {
    return (
        <a href={link} className={styles.link}>
            <div className={styles.card}>
                <p className={styles.titulo}>{titulo}</p>
                <div className={styles.tecnologias}>
                    <ul>
                        {tecnologias.map(tecnologia => 
                            <li key={tecnologia}>
                                <Image className={styles.tecnologia} src={tecnologia} width={30} height={30} alt="Tecnologia do Projeto"/>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </a>
    );
}

export default Card;