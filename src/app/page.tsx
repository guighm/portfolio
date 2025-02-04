'use client'

import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header"
import Section from "@/components/Section";
import styles from "./page.module.css";

const Home = () => {
    return <div className={styles.home}>
        <Header />
        <main className={styles.main}>
            <Section />
            <About />
        </main>
        <Footer />
    </div>

}

export default Home;