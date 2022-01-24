import React from 'react'
import { Container, Content } from '../styles/components/Player'

const Player: React.FC = () => {
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
          <div className="imageBoxPodcast">
            <h4>Selecione um podcast para ouvir</h4>
          </div>
        </div>

        <div className="footerPlayer">
          {/* <div className="footerPlayer isNotActivePodcast"> */}
          <div className="progressPodcast">
            <span className="initialTimePodcast">00:00</span>
            <div className="statusProgressBarPodcast">
              <div className="currentStatusProgressBarPodcast"></div>
            </div>
            <span className="finalTimePodcast">00:00</span>
          </div>

          <div className="buttonsPlayer">
            <button>
              <img
                src="/svg/shuffle.svg"
                alt="Icones de controle do player do Podcast"
              />
            </button>
            <button>
              <img
                src="/svg/play-previous.svg"
                alt="Icones de controle do player do Podcast"
              />
            </button>
            <button>
              <img
                src="/svg/play.svg"
                alt="Icones de controle do player do Podcast"
              />
            </button>
            <button>
              <img
                src="/svg/play-next.svg"
                alt="Icones de controle do player do Podcast"
              />
            </button>
            <button>
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
