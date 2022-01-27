import React, { useContext, useEffect, useRef } from 'react'
import Image from 'next/image'

import { PlayerContext } from '../contexts/PlayerContext'

import { Container, Content } from '../styles/components/Player'

const Player: React.FC = () => {
  const {
    isPlaying,
    togglePlay,
    episodeList,
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
            <div className="statusProgressBarPodcast">
              <div className="currentStatusProgressBarPodcast"></div>
            </div>
            <span className="finalTimePodcast">00:00</span>
          </div>

          {episode && (
            <audio
              autoPlay
              ref={audioRef}
              src={episode.url}
              onPlay={() => setPlayingState(true)}
              onPause={() => setPlayingState(false)}
            />
          )}

          <div className="buttonsPlayer">
            <button type="button" disabled={!episode}>
              <img
                src="/svg/shuffle.svg"
                alt="Icones de controle do player do Podcast"
              />
            </button>
            <button type="button" disabled={!episode}>
              <img
                src="/svg/play-previous.svg"
                alt="Icones de controle do player do Podcast"
              />
            </button>
            <button
              type="button"
              className={
                !isPlaying ? 'buttonPlayPause' : 'buttonPlayPause isPlayerPause'
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
            </button>
            <button type="button" disabled={!episode}>
              <img
                src="/svg/play-next.svg"
                alt="Icones de controle do player do Podcast"
              />
            </button>
            <button type="button" disabled={!episode}>
              <img
                src="/svg/repeat.svg"
                alt="Icones de controle do player do Podcast"
              />
            </button>
          </div>
        </div>
      </Content>
    </Container>
  )
}

export default Player
