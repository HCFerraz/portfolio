import Head from 'next/head'
import styles from '../components/layout.module.css'

export default function Home() {
    return (
        <div className={styles.content_container}>
            <Head>
                <title>Henrique Cabral Ferraz</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" /> 
                <link href="https://fonts.googleapis.com/css2?family=Sansita+Swashed&display=swap" rel="stylesheet" /> 
            </Head>
            <div className={styles.header}>
                <img src="/images/code.svg" alt="Coding..." width="120px" />
                <nav>
                    <ul className={styles.information_list_container}>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Sobre mim</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.presentation}>
                <div>
                    <h1>Henrique Cabral Ferraz</h1>
                    <h2>Front-End Developer & Back End Enthusiastic</h2>
                    <p>Desenvolvimento de páginas estáticas, spas, criação e consumo de apis, e muito mais... </p>
                    <div>
                        <a href="#">Portfolio</a>
                        <a href="www.google.com" target="_blank">Github</a>
                    </div>
                </div>
                <img src="/images/web_developer.svg" alt="Web Developer" />
            </div>
        </div>
    )
}