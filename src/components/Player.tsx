import React, { useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import { PlayerContext } from '../contexts/PlayerContext'

import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import { Container, Content } from '../styles/components/Player'

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { formatedDurationTimeEpisode } from '../utils/formatedDurationTimeEpisode'

const Player: React.FC = () => {
  const {
    hasNext,
    playNext,
    isLooping,
    isPlaying,
    toggleLoop,
    togglePlay,
    hasPrevious,
    episodeList,
    clearPlayer,
    isShuffling,
    playPrevious,
    toggleShuffle,
    setPlayingState,
    currentEpisodeIndex
  } = useContext(PlayerContext)

  const audioRef = useRef<HTMLAudioElement>(null)

  const episode = episodeList[currentEpisodeIndex]

  const [progressAudio, setProgressAudio] = useState<number>(0)

  function setProgressListener() {
    audioRef.current!.currentTime = 0

    audioRef.current!.addEventListener('timeupdate', () => {
      setProgressAudio(Math.floor(audioRef.current!.currentTime))
    })
  }

  function handleTrackPosition(value: number) {
    audioRef.current!.currentTime = value
    setProgressAudio(value)
  }

  function playNextEpisode() {
    if (hasNext) {
      playNext()
    } else {
      clearPlayer()
    }
  }

  useEffect(() => {
    if (!audioRef.current) {
      return
    }

    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  return (
    <Container>
      <Content>
        <div className="headPlayer">
          <img
            src="/svg/playing.svg"
            alt="Icone que indica o status de Podcast tocando."
          />
          <h3>Tocando agora</h3>
        </div>

        <div className="contentPlayer">
          <div
            className={
              !episode
                ? 'isNotActivePodcastImg imageBoxPodcast'
                : 'imageBoxPodcast'
            }
          >
            {episode ? (
              <>
                <Image
                  width={1280}
                  height={1280}
                  objectFit="cover"
                  className="imgPodcast"
                  src={episode.thumbnail}
                />
              </>
            ) : (
              <>
                <h4>Selecione um podcast para ouvir</h4>
              </>
            )}
          </div>

          {episode && (
            <div className="infoPodcastActive">
              <h3>{episode.title}</h3>
              <p>{episode.members}</p>
            </div>
          )}
        </div>

        <div
          className={
            !episode ? 'footerPlayer isNotActivePodcast' : 'footerPlayer'
          }
        >
          <div className="progressPodcast">
            <span className="initialTimePodcast">
              {formatedDurationTimeEpisode(progressAudio)}
            </span>
            {episode ? (
              <Slider
                value={progressAudio}
                max={episode.duration}
                onChange={handleTrackPosition}
                className="sliderProgressBar"
                trackStyle={{ backgroundColor: '#E8C468' }}
                railStyle={{ backgroundColor: '#572459' }}
                handleStyle={{
                  backgroundColor: '#E8C468',
                  borderWidth: 0
                }}
              />
            ) : (
              <div className="statusProgressBarPodcast"></div>
            )}
            <span className="finalTimePodcast">
              {formatedDurationTimeEpisode(episode?.duration ?? 0)}
            </span>
          </div>

          {episode && (
            <audio // CONTROLE DE VOLUME DA TAG AUDIO É POSSÍVEL UTILIZANDO A PROPRIEDADE "current" E O ATRIBUTO "volume" > audioRef.current.volume
              autoPlay
              ref={audioRef}
              loop={isLooping}
              src={episode.url}
              onEnded={playNextEpisode}
              onPlay={() => setPlayingState(true)}
              onPause={() => setPlayingState(false)}
              onLoadedMetadata={setProgressListener}
            />
          )}

          <div className="buttonsPlayer">
            <Tooltip
              title={
                isShuffling
                  ? 'Desabilitar playlist embaralhada'
                  : 'Embaralhar playlist'
              }
              arrow
            >
              <span>
                <Button
                  type="button"
                  disabled={
                    !episode || episodeList.length - currentEpisodeIndex <= 2
                  }
                  className={isShuffling ? 'button isShuffling' : 'button'}
                  onClick={toggleShuffle}
                >
                  <img
                    src="/svg/shuffle.svg"
                    alt="Icones de controle do player do Podcast"
                  />
                </Button>
              </span>
            </Tooltip>

            <Tooltip title="Anterior" arrow>
              <span>
                <Button
                  type="button"
                  disabled={!episode || !hasPrevious}
                  className="button"
                  onClick={playPrevious}
                >
                  <img
                    src="/svg/play-previous.svg"
                    alt="Icones de controle do player do Podcast"
                  />
                </Button>
              </span>
            </Tooltip>

            <Tooltip title={isPlaying ? 'Pause' : 'Play'} arrow>
              <span>
                <Button
                  type="button"
                  className={
                    !isPlaying
                      ? 'buttonPlayPause button'
                      : 'buttonPlayPause button isPlayerPause'
                  }
                  disabled={!episode}
                  onClick={togglePlay}
                >
                  {isPlaying ? (
                    <img
                      src="/svg/pause.svg"
                      alt="Icones de controle do player do Podcast"
                    />
                  ) : (
                    <img
                      src="/svg/play.svg"
                      alt="Icones de controle do player do Podcast"
                    />
                  )}
                </Button>
              </span>
            </Tooltip>

            <Tooltip title="Próximo" arrow>
              <span>
                <Button
                  type="button"
                  disabled={!episode || !hasNext}
                  className="button"
                  onClick={playNext}
                >
                  <img
                    src="/svg/play-next.svg"
                    alt="Icones de controle do player do Podcast"
                  />
                </Button>
              </span>
            </Tooltip>

            <Tooltip
              title={
                isLooping
                  ? 'Desabilitar repetir o próximo episódio'
                  : 'Habilitar repetir o próximo episódio'
              }
              arrow
              placement="left"
            >
              <span>
                <Button
                  type="button"
                  disabled={!episode}
                  className={isLooping ? 'button isLooping' : 'button'}
                  onClick={toggleLoop}
                >
                  <img
                    src="/svg/repeat.svg"
                    alt="Icones de controle do player do Podcast"
                  />
                </Button>
              </span>
            </Tooltip>
          </div>
        </div>
      </Content>
    </Container>
  )
}

export default Player
