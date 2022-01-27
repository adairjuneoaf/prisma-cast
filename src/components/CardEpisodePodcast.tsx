import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'

import { Container } from '../styles/components/CardEpisodePodcast'
interface episode {
  id: string
  title: string
  members: string
  thumbnail: string
  publishedAt: Date
  durationFormated: number
}

const CardEpisodePodcast: React.FC<episode> = ({
  id,
  title,
  members,
  thumbnail,
  publishedAt,
  durationFormated
}) => {
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
            <Tooltip title={`Play no episódio ${title}`} arrow>
              <Button className="button">
                <img
                  src="/svg/play-green.svg"
                  alt="Botão para iniciar o episódio de Podcast"
                />
              </Button>
            </Tooltip>
          </span>
        </div>
      </div>
    </Container>
  )
}

export default CardEpisodePodcast
