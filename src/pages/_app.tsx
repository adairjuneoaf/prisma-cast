import React from 'react'
import type { AppProps } from 'next/app'

import Player from '../components/Player'
import HeaderApp from '../components/HeaderApp'

import theme from '../styles/theme'
import GlobalStyle from '../styles/global'
import { Container } from '../styles/pages/app'
import { ThemeProvider } from 'styled-components'

import PlayerContextProvider from '../contexts/PlayerContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <PlayerContextProvider>
        <Container>
          <div className="podcast">
            <HeaderApp />
            <Component {...pageProps} />
          </div>

          <div className="player">
            <Player />
          </div>
        </Container>
      </PlayerContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
