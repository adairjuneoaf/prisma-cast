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
    .imageBoxPodcast {
      width: 20rem;
      height: 20rem;

      padding: 1rem;

      background: linear-gradient(
        143.8deg,
        rgba(191, 92, 67, 0.8) 0%,
        rgba(191, 92, 67, 0) 100%
      );

      border: 1.5px dashed ${props => props.theme.colors.alternative_secondary};
      border-radius: 24px;

      display: flex;
      align-items: center;
      justify-content: center;

      h4 {
        font-size: 1rem;
        align-items: center;
        color: ${props => props.theme.colors.white};
      }
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

      .initialTimePodcast {
        flex: 1;

        font-size: 0.875rem;

        width: 48px;
        width: 24px;

        color: ${props => props.theme.colors.white};
      }

      .statusProgressBarPodcast {
        width: 176px;
        height: 4px;
        background: black;

        border-radius: 24px;

        background: ${props => props.theme.colors.alternative_quarter};

        flex: 5;

        .currentStatusProgressBarPodcast {
          width: 50%;
          height: 4px;

          background: #04d361;

          border-radius: 24px;
        }
      }

      .finalTimePodcast {
        flex: 1;

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

      button {
        font-size: 0;
        border: 0;
        background: transparent;

        padding: 1rem;

        border-radius: 16px;

        transition: background-color 0.2s;

        &:hover {
          background: ${props => props.theme.colors.alternative_quarter};
        }
      }
    }
  }

  .isNotActivePodcast {
    opacity: 0.5;
  }
`
