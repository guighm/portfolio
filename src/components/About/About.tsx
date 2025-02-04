import LanguageList from "../LanguageList";
import TechnologyList from "../TechnologyList";
import styles from "./About.module.css";

const About = () => {
    return <article className={styles.about}>
        <header className={styles.header}>
            <h2>Olá, sou Guilherme Moraes!</h2>
            <p>Seja bem-vinde ao meu portfólio!</p>
        </header>
        <div className={styles.textos}>
            <p>🔭 Graduando em Engenharia de Computação pela Universidade do Estado do Amazonas;</p>
            <p>😄 Meus pronomes são <strong>ele/dele</strong>;</p>
            <p>🔵 Tenho experiência em Desenvolvimento Web e Mobile;</p>
            <p>🟢 Sou entusiasta da IA e da Programação em Baixo Nível;</p>
        </div>
        <div className={styles.languages}>
            <h2>⚡Linguagens de Programação</h2>
            <LanguageList/>
        </div>
        <div className={styles.tools}>
            <h2>⚡Ferramentas e Tecnologias</h2>
            <TechnologyList/>
        </div>

    </article>
}

export default About;