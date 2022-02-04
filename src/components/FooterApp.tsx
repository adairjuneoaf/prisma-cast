import Link from 'next/link'
import React from 'react'

import { Content } from '../styles/components/FooterApp'

const FooterApp: React.FC = () => {
  return (
    <Content>
      <p>
        Desenvolvido por&nbsp;
        <Link href="http://portfolio-adairjuneo.vercel.app">
          <a
            className="highlightedInfos"
            target="_blank"
            title="Navegar até o portfólio de Adair Juneo"
          >
            Adair Juneo
          </a>
        </Link>
        &nbsp;by&nbsp;
        <Link href="http://prismasystems.com.br">
          <a
            className="highlightedInfos"
            target="_blank"
            title="Navegar até o Website da StartUp Prisma Systems"
          >
            Prisma Systems
          </a>
        </Link>
      </p>
    </Content>
  )
}

export default FooterApp
