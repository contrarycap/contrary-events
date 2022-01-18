import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MuiNextLink from '@components/core-components/MuiNextLink';
import About from '@components/about';
import FAQ from '@components/faq';
import Events from '@components/events';
import { Stack } from '@mui/material';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contrary Waterloo Events Hub</title>
        <meta name="description" content="Find tech, entrepreneruial, startup events in your community." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Stack spacing={2} width={'100%'}>
          <h1 className={styles.title}>
            Welcome to <MuiNextLink href="" target="_blank">Waterloo</MuiNextLink>!
          </h1>
          <p className={styles.description}>
            {`Contrary Capital's Waterloo Event Hub`}
          </p>
          <Events />
          <About />
          <FAQ />
        </Stack>
      </main>
    </div>
  )
}
