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
          <div data-aos="fade-up" data-aos-duration="1000">
            <h1 className={styles.title}>
              Waterloo Events Calendar
            </h1>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <Typography variant="h6" textAlign="center">
              Created by <MuiNextLink
                href="http://contrarycap.com/"
                target="_blank"
                sx={{ textDecoration: 'none' }}>
                Contrary Capital
              </MuiNextLink>!
            </Typography>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            <Events />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <Links />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <FAQ />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <About />
          </div>
        </Stack>
      </main>
    </div >
  )
}
