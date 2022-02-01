import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import QueueIcon from '@mui/icons-material/Queue'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

import { PlayerContext } from '../contexts/PlayerContext'

import { Container } from '../styles/components/CardEpisodePodcast'

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

const CardEpisodePodcast: React.FC<episode> = ({
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
    <Container>
      <div className="imageEpisodePodcast">
        <Image
          src={thumbnail}
          width={144}
          height={144}
          objectFit="cover"
          className="imgPodcast"
        />
      </div>
      <div className="infoEpisodePodcast">
        <div className="headerEpisodePodcast">
          <Link href={`/episodes/${id}`}>
            <a>{title}</a>
          </Link>
          <p>{members}</p>
        </div>
        <div className="footerEpisodePodcast">
          <span className="dataInfos">
            <p>{publishedAt}</p>
            <span id="divider"></span>
            <p>{durationFormated}</p>
          </span>
          <span className="buttonPlayEpisodePodcast">
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
          </span>
        </div>
      </div>
    </Container>
  )
}

export default CardEpisodePodcast
