import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div className={styles.background}>
    <div className={styles.left}></div>
    <div className={styles.right}></div>
    </div>
    <div className={styles.container}>
      <Head>
        <title>Dustin W Morris - Software/Systems Engineer</title>
        <link rel="icon" href="/favicon_io/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img className={styles.monogram}src="/images/monogram.svg"/>
        <h1 className={styles.title}>
          Dustin W. Morris
        </h1>
        <h2 className={styles.occupation}>
          Software/Systems Engineer
        </h2>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h3>About &rarr;</h3>
            <p>Who I am.</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Articles &rarr;</h3>
            <p>Medium articles I have written.</p>
          </a>

          <a
            href="navigation/github"
            className={styles.card}
          >
            <h3>GitHub &rarr;</h3>
            <p>GitHub Stats and Repositories</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Portfolio Projects &rarr;</h3>
            <p>
              Links to live work in progress.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
    </>
  )
}
