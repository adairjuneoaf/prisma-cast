import React from 'react'
import Image from 'next/image'

import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'

import { Container } from '../styles/components/TableEpisodesPodcast'

const TableEpisodesPodcast: React.FC = () => {
  return (
    <Container cellSpacing="0">
      <thead>
        <tr className="headTableEpisodes">
          <td>PODCAST</td>
          <td>INTEGRATES</td>
          <td>DATA</td>
          <td>DURAÇÃO</td>
          <td>&nbsp;</td>
        </tr>
      </thead>
      <tbody>
        <tr className="contentTableEpisodes">
          <td className="imgTitlePodcast">
            <div>
              <Image
                src="https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/clean.jpg"
                width="192"
                height="192"
                objectFit="cover"
                className="imgPodcast"
              />
            </div>
            <h4>Como programar like a god</h4>
          </td>
          <td className="participantsPodcast">Tiago, Diedo e Pellizzetti</td>
          <td className="dataLaunchPodcast">8 Jan 21</td>
          <td className="durationPodcast">1:35:18</td>
          <td className="buttonPlayPodcast">
            <Tooltip title="Play no episódio ${}" arrow>
              <Button size="medium" className="button">
                <img
                  src="/svg/play-green.svg"
                  alt="Botão para iniciar o episódio de Podcast"
                  title="Play no episódio ${}"
                />
              </Button>
            </Tooltip>
          </td>
        </tr>

        <tr className="contentTableEpisodes">
          <td className="imgTitlePodcast">
            <div>
              <Image
                src="https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/clean.jpg"
                width="192"
                height="192"
                objectFit="cover"
                className="imgPodcast"
              />
            </div>
            <h4>Como programar like a god</h4>
          </td>
          <td className="participantsPodcast">Tiago, Diedo e Pellizzetti</td>
          <td className="dataLaunchPodcast">8 Jan 21</td>
          <td className="durationPodcast">1:35:18</td>
          <td className="buttonPlayPodcast">
            <Tooltip title="Play no episódio ${}" arrow>
              <Button className="button">
                <img
                  src="/svg/play-green.svg"
                  alt="Botão para iniciar o episódio de Podcast"
                  title="Play no episódio ${}"
                />
              </Button>
            </Tooltip>
          </td>
        </tr>
      </tbody>
    </Container>
  )
}

export default TableEpisodesPodcast
