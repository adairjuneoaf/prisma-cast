import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 160px;

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
      display: flex;
      flex-direction: column;

      gap: 0.5rem;
      a {
        font: 'Lexend', sans-serif;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.2;

        text-decoration: none;
        color: ${props => props.theme.colors.title};

        text-overflow: ellipsis;

        transition: color 0.2s;

        &:hover {
          color: ${props => props.theme.colors.text_secondary};
        }
      }
      p {
        line-height: 1.2;

        text-overflow: ellipsis;
      }
    }

    .footerEpisodePodcast {
      .dataInfos {
        display: flex;
        align-items: center;
        flex-direction: row;

        gap: 0.5rem;

        p {
          text-transform: capitalize;
        }

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
