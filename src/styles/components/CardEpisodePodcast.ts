import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;

  padding: 1.25rem;
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.line};

  border-radius: 24px;

  cursor: default;

  .imageEpisodePodcast {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 96px;
    height: 96px;

    .imgPodcast {
      border-radius: 12px;
    }
  }

  .infoEpisodePodcast {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0 0 0 1rem;

    .headerEpisodePodcast {
      h4 {
        font-size: 1rem;
        line-height: 1.8;
      }
      p {
        line-height: 1.8;
      }
    }

    .footerEpisodePodcast {
      .dataInfos {
        display: flex;
        align-items: center;
        flex-direction: row;

        gap: 0.5rem;

        #divider {
          width: 4px;
          height: 4px;
          background: ${props => props.theme.colors.line};
          border-radius: 2px;
        }
      }

      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;

      .buttonPlayEpisodePodcast {
        .button {
          min-width: 0;
          font-size: 0;
          padding: 0.5rem;

          border-radius: 25%;
          background: ${props => props.theme.colors.white};
          border: 1px solid ${props => props.theme.colors.line};

          color: ${props => props.theme.colors.title};

          cursor: pointer;

          img {
            width: 24px;
            height: 24px;
          }
        }
      }
    }
  }
`
