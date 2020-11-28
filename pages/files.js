import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../components/layout.module.css'

export default function FirstFile() {
    return (
        <Layout>
            <div>
                <Head>
                    <title>Files</title>
                </Head>
                <p className={styles.back}>Working page</p>
                <img src="/images/profile.jpg" alt="prof" />
                <Link href="/">Click</Link>
            </div>
        </Layout>
    )
}