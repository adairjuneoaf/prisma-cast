import React from 'react'
import Image from 'next/image'

import { Container } from '../styles/components/CardEpisodePodcast'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'

const CardEpisodePodcast: React.FC = () => {
  return (
    <Container>
      <div className="imageEpisodePodcast">
        <Image
          src="https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/opensource.jpg"
          width={144}
          height={144}
          objectFit="cover"
          className="imgPodcast"
        />
      </div>
      <div className="infoEpisodePodcast">
        <div className="headerEpisodePodcast">
          <h4>O que é um bom código?</h4>
          <p>Diego e Richard</p>
        </div>
        <div className="footerEpisodePodcast">
          <span className="dataInfos">
            <p>8 Jan 21</p>
            <span id="divider"></span>
            <p>1:32:18</p>
          </span>
          <span className="buttonPlayEpisodePodcast">
            <Tooltip title="Play no episódio ${}" arrow>
              <Button className="button">
                <img
                  src="/svg/play-green.svg"
                  alt="Botão para iniciar o episódio de Podcast"
                  title="Play no episódio ${}"
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
