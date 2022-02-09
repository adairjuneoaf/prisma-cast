import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import QueueIcon from '@mui/icons-material/Queue'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

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
        <div className="imgEpisode">
          <Image
            src={thumbnail}
            width="192"
            height="192"
            objectFit="cover"
            className="imgPodcast"
          />
        </div>
      </td>
      <td className="titleAndMembersPodcast">
        <div>
          <Link href={`/episodes/${id}`}>
            <a>{title}</a>
          </Link>
          <span className="participantsPodcast">{members}</span>
        </div>
      </td>
      {/* <td className=""></td> */}
      <td className="dataLaunchPodcast">{publishedAt}</td>
      <td className="durationPodcast">{durationFormated}</td>
      <td className="buttonPlayPodcast">
        <Tooltip title="Adicionar o episódio a playlist" arrow>
          <Button
            className="button"
            onClick={() => playList(episodeSelectedByUser)}
          >
            {/* <img
              src="/svg/add-play.svg"
              alt="Botão para adicionar episódio a playlist"
            /> */}
            <QueueIcon sx={{ fontSize: 24, color: '#EACE5D' }} />
          </Button>
        </Tooltip>
        <Tooltip title="Play no episódio" arrow>
          <Button
            size="medium"
            className="button"
            onClick={() => play(episodeSelectedByUser)}
          >
            {/* <img
              src="/svg/play-green.svg"
              alt="Botão para iniciar o episódio de Podcast"
            /> */}
            <PlayArrowIcon sx={{ fontSize: 24, color: '#EACE5D' }} />
          </Button>
        </Tooltip>
      </td>
    </Container>
  )
}

export default TableEpisodesPodcast
