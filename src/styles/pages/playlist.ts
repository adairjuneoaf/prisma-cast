import styled from 'styled-components'

export const Content = styled.section`
  width: 100%;
  height: calc(100vh - 6.5rem);

  padding: 0 2.5rem;

  cursor: default;

  .headPagePlaylist {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    h2 {
      padding: 1.5rem 0 2.5rem 0;
      font-size: 1.875rem;
    }

    .buttonClearPlaylist {
      padding: 0.875rem 1.25rem;
      font-size: 1rem;
      border: 0;
      border-radius: 16px;
      color: ${props => props.theme.colors.white};
      background: ${props => props.theme.colors.background_secondary};
      text-transform: none;
      line-height: 1;
    }
  }
  .episodePlaying {
    h4 {
      padding: 0 0 1.5rem 0;
      font-size: 1rem;
    }

    table {
      tr {
        .indexEpisode {
          padding: 1rem;
          text-align: center;
          font-size: 0.875rem;
        }
        .imgEpisode {
          padding: 0 1rem;

          div {
            width: 64px;
            height: 64px;

            .imgPodcast {
              border-radius: 8px;
            }
          }
        }

        .infoEpisode {
          width: 100%;
          a {
            font-size: 1rem;
            text-decoration: none;
            color: ${props => props.theme.colors.title};
            font-weight: 700;

            transition: color 0.2s;
            &:hover {
              color: ${props => props.theme.colors.text_secondary};
            }
          }
          p {
            font-size: 0.875rem;
          }
        }

        .playTimeEpisode {
          font-size: 0.875rem;

          min-width: 10rem;
          text-align: center;
        }

        .buttonsEpisode {
          min-width: 4rem;
        }
      }
    }
  }

  .nextEpisodes {
    padding: 3rem 0;

    h4 {
      padding: 0 0 1.5rem 0;
      font-size: 1rem;
    }

    table {
      tr {
        .indexEpisode {
          padding: 1rem;
          text-align: center;
          font-size: 0.875rem;
        }
        .imgEpisode {
          padding: 0 1rem;

          div {
            width: 64px;
            height: 64px;

            .imgPodcast {
              border-radius: 8px;
            }
          }
        }

        .infoEpisode {
          width: 100%;
          a {
            font-size: 1rem;
            text-decoration: none;
            color: ${props => props.theme.colors.title};
            font-weight: 700;

            transition: color 0.2s;
            &:hover {
              color: ${props => props.theme.colors.text_secondary};
            }
          }
          p {
            font-size: 0.875rem;
          }
        }

        .playTimeEpisode {
          font-size: 0.875rem;

          min-width: 10rem;
          text-align: center;
        }

        .buttonsEpisode {
          min-width: 4rem;
          text-align: center;

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
  }
`
