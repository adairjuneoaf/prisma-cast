import React, { useContext } from 'react'
import Link from 'next/link'

import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'

import { Container } from '../styles/components/HeaderApp'
import { Button, Tooltip } from '@mui/material'

interface HeaderAppProps {
  toggleThemeApp: {
    colors: {
      id: string
    }
  }
  ChangeThemeApp: () => void
}

const HeaderApp: React.FC<HeaderAppProps> = ({
  ChangeThemeApp,
  toggleThemeApp
}) => {
  const presentDate = format(new Date(), `EEEEEE, d MMMM`, {
    locale: ptBR
  })

  return (
    <Container>
      <div className="infoAboutApp">
        <Link href="/">
          <a>
            <img src="/ico.svg" alt="Logo que representa o APP de Podcast" />
            Prisma&nbsp;Cast
          </a>
        </Link>
        <span className="divider"></span>
        <p>O melhor para você ouvir, sempre!</p>
      </div>

      <div className="infoAboutUser">
        <div className="user">
          <Tooltip title="Alterar tema do App" arrow>
            <Button
              type="button"
              className="toggleThemeApp"
              onClick={ChangeThemeApp}
            >
              {toggleThemeApp.colors.id === 'DarkTheme' ? (
                <LightModeOutlinedIcon
                  sx={{ color: '#F2F7F9', fontSize: 24 }}
                />
              ) : (
                <DarkModeOutlinedIcon sx={{ color: '#494D4B', fontSize: 24 }} />
              )}
            </Button>
          </Tooltip>
        </div>
        <p>{presentDate}</p>
      </div>
    </Container>
  )
}

export default HeaderApp
