import React, { useState } from 'react'
import type { AppProps } from 'next/app'

import PlayerContextProvider from '../contexts/PlayerContext'

import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from 'styled-components'

import Player from '../components/Player'
import HeaderApp from '../components/HeaderApp'

import GlobalStyle from '../styles/global'
import { Container } from '../styles/pages/app'
import { LightTheme, DarkTheme } from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [toggleThemeApp, setToggleThemeApp] = useState(LightTheme)

  function ChangeThemeApp() {
    setToggleThemeApp(toggleThemeApp === DarkTheme ? LightTheme : DarkTheme)
  }

  return (
    <PlayerContextProvider>
      <ThemeProvider theme={toggleThemeApp}>
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{ className: 'toastsAlerts', duration: 2500 }}
        />
        <Container>
          <div className="podcast">
            <HeaderApp
              ChangeThemeApp={ChangeThemeApp}
              toggleThemeApp={toggleThemeApp}
            />

            <Component {...pageProps} />
          </div>

          <div className="player">
            <Player />
          </div>
        </Container>
        <GlobalStyle />
      </ThemeProvider>
    </PlayerContextProvider>
  )
}

export default MyApp
