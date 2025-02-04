'use client'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from "./page.module.css";
import CardList from "@/components/CardList";

const Projetos = () => {
    return (
        <div className={styles.projetos}>
            <Header />
            <main className={styles.main}>
                <h2>⚡Principais Projetos</h2>
                <CardList/>
            </main>
            <Footer />
        </div>
    );
}

export default Projetos;