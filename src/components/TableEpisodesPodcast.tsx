import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'

import { Container } from '../styles/components/TableEpisodesPodcast'
import { PlayerContext } from '../contexts/PlayerContext'

interface Episode {
  id: string
  url: string
  title: string
  members: string
  duration: number
  thumbnail: string
}
interface episode {
  id: string
  title: string
  members: string
  thumbnail: string
  publishedAt: Date
  durationFormated: number
  episodeSelectedByUser: Episode
}

const TableEpisodesPodcast: React.FC<episode> = ({
  id,
  title,
  members,
  thumbnail,
  publishedAt,
  durationFormated,
  episodeSelectedByUser
}) => {
  const { play, playList } = useContext(PlayerContext)

  return (
    <Container className="contentTableEpisodes">
      <td className="imgTitlePodcast">
        <div>
          <Image
            src={thumbnail}
            width="192"
            height="192"
            objectFit="cover"
            className="imgPodcast"
          />
        </div>
        <Link href={`/episodes/${id}`}>
          <a>{title}</a>
        </Link>
      </td>
      <td className="participantsPodcast">{members}</td>
      <td className="dataLaunchPodcast">{publishedAt}</td>
      <td className="durationPodcast">{durationFormated}</td>
      <td className="buttonPlayPodcast">
        <Tooltip title={`Adicionar a playlist episódio ${title}`} arrow>
          <Button className="button">
            <img
              src="/svg/add-play.svg"
              alt="Botão para adicionar episódio a playlist"
              onClick={() => playList(episodeSelectedByUser)}
            />
          </Button>
        </Tooltip>
        <Tooltip title={`Play no episódio ${title}`} arrow>
          <Button
            size="medium"
            className="button"
            onClick={() => play(episodeSelectedByUser)}
          >
            <img
              src="/svg/play-green.svg"
              alt="Botão para iniciar o episódio de Podcast"
            />
          </Button>
        </Tooltip>
      </td>
    </Container>
  )
}

export default TableEpisodesPodcast
