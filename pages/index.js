import Link from 'next/link'
import Head from 'next/head'
import styles from '../components/layout.module.css'

function Home() {
    return (
        <div className="container">
            <Head>
                <title>Index.js</title>
            </Head>
            <p className={styles.back}>My portfolio</p>
            Learn <Link href="/files">here</Link>
        </div>
    )
}
export default Home