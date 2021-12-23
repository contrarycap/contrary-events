import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache.jsx';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }: AppProps) {
  const emotionCache = clientSideEmotionCache;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>elfDAO</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
              <CssBaseline />
              <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp
