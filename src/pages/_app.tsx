import '@/styles/globals.css'
import { CssBaseline, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head'

let theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0F172A',
      paper: '#1F2A45'
    },
    primary: {
      main: '#7161EF',
      contrastText: '#E2E8F0'
    },
    secondary: {
      main: '#E2E8F0',
      contrastText: '#0F172A'
    },
    success: {
      main: '#4BD120',
      contrastText: '#E2E8F0'
    },
    error: {
      main: '#D14A20',
      contrastText: '#E2E8F0'
    },
    text: {
      primary: '#E2E8F0',
      secondary: '#94a3b8'
    },
    divider: '#363636',
  },
  breakpoints: {
    values: {
      xs: 310,
      sm: 360,
      md: 760,
      lg: 1200,
      xl: 1440,
    }
  },
  typography: {
    fontFamily: "'IBM Plex Sans', sans-serif"
  }
})

// Configure the font to automatically resize in responsiveness
theme = responsiveFontSizes(theme)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="description" content="Bytrade - Cryptocurrency Exchange for Bitcoin, Etherium, Binance Coin and others." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>

  ) 
}
