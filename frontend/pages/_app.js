import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import Header from "@components/core-components/Header";
import createEmotionCache from '../styles/createEmotionCache';
import "/styles/globals.css";
import theme from '../styles/theme';
import Footer from "@components/core-components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Nextjs X MUI5</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}
