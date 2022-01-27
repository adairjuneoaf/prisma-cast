import React, { useState } from 'react'
import type { AppProps } from 'next/app'

import Player from '../components/Player'
import HeaderApp from '../components/HeaderApp'

import theme from '../styles/theme'
import GlobalStyle from '../styles/global'
import { Container } from '../styles/pages/app'
import { ThemeProvider } from 'styled-components'

import { PlayerContext } from '../contexts/PlayerContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [episodeList, setEpisodeList] = useState([])

  console.log(episodeList)

  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)

  function play(episode) {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
  }
  return (
    <ThemeProvider theme={theme}>
      <PlayerContext.Provider
        value={{ episodeList, currentEpisodeIndex, play }}
      >
        <Container>
          <div className="podcast">
            <HeaderApp />
            <Component {...pageProps} />
          </div>

          <div className="player">
            <Player />
          </div>
        </Container>
      </PlayerContext.Provider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
