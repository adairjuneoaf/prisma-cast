import React, { useContext } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { GetStaticPaths } from 'next'

import { parseISO } from 'date-fns'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'

import { api } from '../../services/api'
import { Container, Content } from '../../styles/pages/episodes/[id]'

import { formatedDurationTimeEpisode } from '../../utils/formatedDurationTimeEpisode'
import { PlayerContext } from '../../contexts/PlayerContext'

type ContextParamsGetStaticProps = {
  params: {
    id: string
  }
}

interface episodeUnformatted {
  id: string
  url: string
  type: string
  title: string
  members: string
  duration: number
  thumbnail: string
  description: string
  publishedAt: string
  durationFormated: string
}
interface Episode {
  id: string
  url: string
  type: string
  title: string
  members: string
  duration: number
  thumbnail: string
  publishedAt: Date
  description: string
  durationFormated: number
}

interface EpisodePodcastProps {
  episode: Episode
}

const EpisodePodcast: React.FC<EpisodePodcastProps> = ({ episode }) => {
  const { play } = useContext(PlayerContext)

  return (
    <Container>
      <Head>
        <title>{`${episode.title}`}</title>
      </Head>

      <Content>
        <div className="headerPagePodcast">
          <Link href="/">
            <Tooltip title="Retornar para página inicial" arrow>
              <Button className="button">
                <img
                  src="/svg/arrow-left.svg"
                  alt="Botão para iniciar o episódio de Podcast"
                />
              </Button>
            </Tooltip>
          </Link>
          <Image
            src={episode.thumbnail}
            width="994"
            height="320"
            objectFit="cover"
            className="imgPodcast"
          />
          <Tooltip title={`Play no episódio ${episode.title}`} arrow>
            <Button className="button">
              <img
                src="/svg/play.svg"
                alt="Botão para iniciar o episódio de Podcast"
                onClick={() => play(episode)}
              />
            </Button>
          </Tooltip>
        </div>
        <div className="bodyPagePodcast">
          <h2>{episode.title}</h2>

          <span className="infoEpisodePodcast">
            <p className="members">{episode.members}</p>
            <span className="divider"></span>
            <p className="launchDateEpisodePodcast">{episode.publishedAt}</p>
            <span className="divider"></span>
            <p className="durationEpisodePodcast">{episode.durationFormated}</p>
          </span>
          <div className="dividerPage"></div>
          <div
            className="descriptionEpisodePodcast"
            dangerouslySetInnerHTML={{ __html: episode.description }}
          />
        </div>
      </Content>
    </Container>
  )
}

export default EpisodePodcast

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 5,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const paths = data.map(function (episode: Episode) {
    return {
      params: {
        id: episode.id
      }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({
  params
}: ContextParamsGetStaticProps) => {
  const { id } = params

  const { data } = await api.get(`episodes/${id}`)

  const episode: episodeUnformatted = {
    id: data.id,
    title: data.title,
    url: data.file.url,
    type: data.file.type,
    members: data.members,
    thumbnail: data.thumbnail,
    duration: data.file.duration,
    description: data.description,
    publishedAt: format(parseISO(data.published_at), 'd MMM yy', {
      locale: ptBR
    }),
    durationFormated: formatedDurationTimeEpisode(data.file.duration)
  }

  return {
    props: {
      episode
    },
    revalidate: 60 * 60 * 4
  }
}
