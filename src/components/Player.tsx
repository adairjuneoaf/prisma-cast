import React, { useContext, useEffect, useRef } from 'react'
import Image from 'next/image'

import { PlayerContext } from '../contexts/PlayerContext'

import { Container, Content } from '../styles/components/Player'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

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
    isShuffling,
    playPrevious,
    toggleShuffle,
    setPlayingState,
    currentEpisodeIndex
  } = useContext(PlayerContext)

  const audioRef = useRef<HTMLAudioElement>(null)

  const episode = episodeList[currentEpisodeIndex]

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
            <span className="initialTimePodcast">00:00</span>
            {episode ? (
              <Slider
                className="sliderProgressBar"
                trackStyle={{ backgroundColor: '#E8C468' }}
                railStyle={{ backgroundColor: '#572459' }}
                handleStyle={{ borderColor: '#E8C468', borderWidth: 4 }}
              />
            ) : (
              <div className="statusProgressBarPodcast"></div>
            )}
            <span className="finalTimePodcast">00:00</span>
          </div>

          {episode && (
            <audio
              autoPlay
              ref={audioRef}
              src={episode.url}
              loop={isLooping}
              onPlay={() => setPlayingState(true)}
              onPause={() => setPlayingState(false)}
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
                  disabled={!episode}
                  className={isShuffling ? 'button isShuffling' : 'button'}
                >
                  <img
                    src="/svg/shuffle.svg"
                    alt="Icones de controle do player do Podcast"
                    onClick={toggleShuffle}
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
                >
                  <img
                    src="/svg/repeat.svg"
                    alt="Icones de controle do player do Podcast"
                    onClick={toggleLoop}
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
