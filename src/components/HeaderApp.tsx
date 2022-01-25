import React from 'react'

import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import { Container } from '../styles/components/HeaderApp'

const HeaderApp: React.FC = () => {
  const presentDate = format(new Date(), `EEEEEE, d MMMM`, {
    locale: ptBR
  })

  return (
    <Container>
      <div className="infoAboutApp">
        <img src="/svg/logo.svg" alt="Logo que representa o APP de Podcast" />
        <span className="divider"></span>
        <p>O melhor para você ouvir, sempre!</p>
      </div>

      <div className="infoAboutUser">
        <p>{presentDate}</p>
      </div>
    </Container>
  )
}

export default HeaderApp
