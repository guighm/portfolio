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
        <div className={styles.techs}>
            <h2>⚡Ferramentas e Tecnologias</h2>
            <ul className={styles.big_list}>
                <ul className={styles.ul}>
                    <li><p><strong>FRONT-END</strong></p></li>
                    <li>React | Next.js</li>
                    <li>Vue.js | Nuxt</li>
                    <li>Angular</li>
                    <li>Svelte | SvelteKit</li>
                </ul>
                <ul className={styles.ul}>
                    <li><p><strong>BACK-END</strong></p></li>
                    <li>C# | ASP.NET Core</li>
                    <li>Java | Spring Boot</li>
                    <li>Node.js | NestJS</li>
                    <li>PHP | Laravel</li>
                    <li>Ruby on Rails</li>
                </ul>
                <ul className={styles.ul}>
                    <li><p><strong>MOBILE</strong></p></li>
                    <li>Kotlin | Android</li>
                    <li>Dart | Flutter</li>
                </ul>
                <ul className={styles.ul}>
                    <li><p><strong>BAAS</strong></p></li>
                    <li>Firebase</li>
                    <li>Supabase</li>
                </ul>
                <ul className={styles.ul}>
                    <li><p><strong>BANCO DE DADOS</strong></p></li>
                    <li>Microsoft SQL Server</li>
                    <li>PostgreSQL</li>
                </ul>
                <ul className={styles.ul}>
                    <li><p><strong>DEVOPS</strong></p></li>
                    <li>Docker</li>
                </ul>
                <ul className={styles.ul}>
                    <li><p><strong>DATA SCIENCE</strong></p></li>
                    <li>Pandas</li>
                    <li>Numpy</li>
                    <li>Scikit-Learn</li>
                </ul>
            </ul>
        </div>
    </article>
}

export default About;