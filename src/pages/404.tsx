import React from 'react'
import Link from 'next/link'

import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import HomeIcon from '@mui/icons-material/Home'

import { Container, Content } from '../styles/pages/404'
import Head from 'next/head'

const Custom404: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Error 404 | Page not found</title>
      </Head>

      <Content>
        <h1>404</h1>
        <p>Page not found</p>
        <span className="gridLinksPage">
          <Link href="/">
            <Tooltip title="Retornar para página inicial" arrow>
              <Button className="button">
                <HomeIcon sx={{ fontSize: 24, color: '#EACE5D' }} />
              </Button>
            </Tooltip>
          </Link>
        </span>
      </Content>
    </Container>
  )
}

export default Custom404
