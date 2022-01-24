import React from 'react'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { Container } from '../styles/pages/app'
import HeaderApp from '../components/HeaderApp'
import Player from '../components/Player'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div className="podcast">
          <HeaderApp />
          <Component {...pageProps} />
        </div>

        <div className="player">
          <Player />
        </div>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}
