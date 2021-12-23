import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation';
import FAQ from '../components/faq';
import About from '../components/about';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contrary Capital Waterloo Pod Events</title>
        <meta name="description" content="Contrary Capital Waterloo Pod Events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />
        <h1 className={styles.title}>
          Welcome to <a href="https://contrarycap.com/waterloo" rel="noreferrer" target={'_blank'}>Contrary Capital Waterloo Pod!</a>
        </h1>
        <article>
          <div id='about'>
            <About />
          </div>
          <div id='faq'>
            <FAQ />
          </div>
        </article>
      </main>
      <footer className={styles.footer}>
          Made with 💙 by Contrary Waterloo Pod
      </footer>
    </div>
  )
}

export default Home
