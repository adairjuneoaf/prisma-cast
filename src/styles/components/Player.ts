import styled from 'styled-components'

export const Container = styled.div`
  width: 26.75rem;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${props => props.theme.colors.background_secondary};
`

export const Content = styled.section`
  width: 90%;
  height: 90%;

  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  cursor: default;

  .headPlayer {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 0.875rem;

    h3 {
      font-size: 1rem;
      color: ${props => props.theme.colors.white};
    }
  }

  .contentPlayer {
    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 2rem;
    .imageBoxPodcast {
      width: 20rem;
      height: 20rem;

      background: linear-gradient(
        143.8deg,
        rgba(87, 36, 89, 0.8) 0%,
        rgba(111, 46, 114, 0) 100%
      );

      border-radius: 24px;

      display: flex;
      align-items: center;
      justify-content: center;

      .imgPodcast {
        border-radius: 24px;
      }

      h4 {
        font-size: 1rem;
        align-items: center;
        color: ${props => props.theme.colors.white};
        padding: 1rem;
      }
    }

    .infoPodcastActive {
      h3 {
        display: flex;
        align-items: center;
        justify-content: center;

        min-height: 8rem;
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 30px;
        text-align: center;
        color: ${props => props.theme.colors.white};

        padding: 1rem 0;
      }

      p {
        padding: 0rem 2rem;
        min-height: 4rem;
        line-height: 19px;
        text-align: center;
        font-size: 0.875rem;
        color: ${props => props.theme.colors.text_primary};
      }
    }

    .isNotActivePodcastImg {
      border: 1.5px dashed ${props => props.theme.colors.alternative_secondary};
    }
  }

  .footerPlayer {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 2rem;

    .progressPodcast {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 1rem;

      width: 100%;

      .initialTimePodcast {
        flex: 1;
        text-align: center;

        font-size: 0.875rem;

        width: 48px;
        width: 24px;

        color: ${props => props.theme.colors.white};
      }

      .sliderProgressBar {
        width: 100%;
        flex: 5;
      }

      .statusProgressBarPodcast {
        width: 100%;
        height: 4px;
        background: black;

        border-radius: 24px;

        background: ${props => props.theme.colors.alternative_quarter};

        flex: 5;
      }

      .finalTimePodcast {
        flex: 1;
        text-align: center;

        font-size: 0.875rem;

        width: 48px;
        width: 24px;

        color: ${props => props.theme.colors.white};
      }
    }

    .buttonsPlayer {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      gap: 0.5rem;

      .button {
        font-size: 0;
        border: 0;
        background: transparent;

        padding: 1rem;

        border-radius: 16px;

        color: ${props => props.theme.colors.white};

        transition: all 0.5s;

        &:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }

        &:hover:not(:disabled) {
          background: ${props => props.theme.colors.alternative_quarter};
        }
      }

      .buttonPlayPause {
        min-width: 64px;
        min-height: 64px;
      }

      .isPlayerPause,
      .isShuffling,
      .isLooping {
        background: ${props => props.theme.colors.alternative_quarter};
      }
    }
  }

  .isNotActivePodcast {
    opacity: 0.5;
  }
`
