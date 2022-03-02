import React, { useContext } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { PlayerContext } from '../../contexts/PlayerContext'

import HomeIcon from '@mui/icons-material/Home'
import { Button, Tooltip } from '@mui/material'
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove'

import { Content } from '../styles/pages/playlist'
import { formatedDurationTimeEpisode } from '../../utils/formatedDurationTimeEpisode'

interface Episode {
  title: string
  members: string
  duration: number
  thumbnail: string
}

const Playlist: React.FC = () => {
  const { episodeList, currentEpisodeIndex } = useContext(PlayerContext)

  return (
    <Content>
      <Head>
        <title>
          Playlist | prisma.cast - O melhor para você ouvir, sempre!{' '}
        </title>
      </Head>

      <div className="headPagePlaylist">
        <h2>Playlist</h2>

        <span>
          <Link href="/">
            <Tooltip title="Voltar a página de episódios" arrow>
              <span>
                <Button type="button" className="buttonNavigationPage">
                  <HomeIcon sx={{ fontSize: 24, color: '#EACE5D' }} />
                </Button>
              </span>
            </Tooltip>
          </Link>

          {/* <Tooltip title="Limpar playlist de episódios" arrow>
            <Button
              type="button"
              variant="text"
              className="buttonClearPlaylist"
            >
              Limpar playlist
            </Button>
          </Tooltip> */}
        </span>
      </div>
      <div className="episodePlaying">
        <h4>Em reprodução...</h4>
        <table>
          <tbody>
            <tr>
              <td className="indexEpisode">
                <div></div>
              </td>
              <td className="imgEpisode">
                <div>
                  <Image
                    src={episodeList[currentEpisodeIndex].thumbnail}
                    width="192"
                    height="192"
                    objectFit="cover"
                    className="imgPodcast"
                  />
                </div>
              </td>
              <td className="infoEpisode">
                <Link href={`/episodes/${episodeList[currentEpisodeIndex].id}`}>
                  <a>{episodeList[currentEpisodeIndex].title}</a>
                </Link>
                <p>{episodeList[currentEpisodeIndex].members}</p>
              </td>
              <td className="playTimeEpisode">
                {formatedDurationTimeEpisode(
                  episodeList[currentEpisodeIndex].duration
                )}
              </td>
              {/* <td className="buttonsEpisode"></td> */}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="nextEpisodes">
        <h4>Fila de reprodução</h4>
        <table cellSpacing="0">
          <tbody>
            {episodeList.map((data, index) => {
              return (
                <tr key={data.id}>
                  <td className="indexEpisode">{index + 1}</td>
                  <td className="imgEpisode">
                    <div>
                      <Image
                        src={data.thumbnail}
                        width="192"
                        height="192"
                        objectFit="cover"
                        className="imgPodcast"
                      />
                    </div>
                  </td>
                  <td className="infoEpisode">
                    <Link href={`/episodes/${data.id}`}>
                      <a>{data.title}</a>
                    </Link>
                    <p>{data.members}</p>
                  </td>
                  <td className="playTimeEpisode">
                    {formatedDurationTimeEpisode(data.duration)}
                  </td>
                  {/* <td className="buttonsEpisode">
                    <Tooltip
                      title="Remover episódio da playlist"
                      arrow
                      placement="left"
                    >
                      <Button size="medium" className="button">
                        <PlaylistRemoveIcon
                          sx={{ fontSize: 24, color: '#EACE5D' }}
                        />
                      </Button>
                    </Tooltip>
                  </td> */}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Content>
  )
}

export default Playlist
