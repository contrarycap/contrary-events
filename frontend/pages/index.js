import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MuiNextLink from '@components/core-components/MuiNextLink';
import About from '@components/about';
import FAQ from '@components/faq';
import Events from '@components/events';
import Links from '@components/links';
import { Stack, Typography } from '@mui/material';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Waterloo Events Calendar - Contrary Capital</title>
        <meta name="description" content="Find tech, entrepreneruial, startup events in your community." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Stack spacing={4} width={'100%'}>
          <h1 className={styles.title}>
            Waterloo Events Calendar
          </h1>
          <Typography variant="h6" textAlign="center">
            Created by <MuiNextLink
              href="http://contrarycap.com/"
              target="_blank"
              sx={{ textDecoration: 'none' }}>
              Contrary Capital
            </MuiNextLink>!
          </Typography>
          <Events />
          <Links />
          <FAQ />
          <About />
        </Stack>
      </main>
    </div>
  )
}
