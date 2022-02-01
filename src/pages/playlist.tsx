import { Button, Tooltip } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Content } from '../styles/pages/playlist'

const Playlist: React.FC = () => {
  return (
    <Content>
      <Head>
        <title>
          Playlist | prisma.cast - O melhor para você ouvir, sempre!{' '}
        </title>
      </Head>

      <div className="headPagePlaylist">
        <h2>Playlist</h2>
        <Tooltip title="Limpar playlist de episódios" arrow>
          <span>
            <Button
              type="button"
              variant="text"
              className="buttonClearPlaylist"
            >
              Limpar playlist
            </Button>
          </span>
        </Tooltip>
      </div>
      <div className="episodePlaying">
        <h4>Em reprodução...</h4>
        <table>
          <tbody>
            <tr>
              <td className="indexEpisode">1</td>
              <td className="imgEpisode">
                <div>
                  <Image
                    src="https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/autenticacao.jpg"
                    width="192"
                    height="192"
                    objectFit="cover"
                    className="imgPodcast"
                  />
                </div>
              </td>
              <td className="infoEpisode">
                <Link href={`/`}>
                  <a>
                    FalaDev #21 - Estratégias de autenticação, JWT, OAuth, qual
                    usar?
                  </a>
                </Link>
                <p>Diego Fernandes, Higo Ribeiro e Guilherme Pellizzetti</p>
              </td>
              <td className="playTimeEpisode">00:24:23</td>
              <td className="buttonsEpisode"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="nextEpisodes">
        <h4>Próximos na fila</h4>
        <table>
          <tbody>
            <tr>
              <td className="indexEpisode">1</td>
              <td className="imgEpisode">
                <div>
                  <Image
                    src="https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/autenticacao.jpg"
                    width="192"
                    height="192"
                    objectFit="cover"
                    className="imgPodcast"
                  />
                </div>
              </td>
              <td className="infoEpisode">
                <Link href={`/`}>
                  <a>
                    FalaDev #21 - Estratégias de autenticação, JWT, OAuth, qual
                    usar?
                  </a>
                </Link>
                <p>Diego Fernandes, Higo Ribeiro e Guilherme Pellizzetti</p>
              </td>
              <td className="playTimeEpisode">00:24:23</td>
              <td className="buttonsEpisode">
                <Tooltip
                  title="Remover episódio da playlist"
                  arrow
                  placement="left"
                >
                  <Button size="medium" className="button">
                    <img
                      src="/svg/remove.svg"
                      alt="Icone que faz referência para remover episódio da playlist"
                    />
                  </Button>
                </Tooltip>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Content>
  )
}

export default Playlist
