import styled from 'styled-components'

export const Content = styled.section`
  width: 100%;
  height: calc(100vh - 6.5rem);

  overflow-y: scroll;

  padding: 0 2.5rem;

  cursor: default;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.white};
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.line};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.text_primary};
  }

  .headPagePlaylist {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    h2 {
      padding: 1.5rem 0 2.5rem 0;
      font-size: 1.875rem;
    }

    > span {
      display: flex;
      align-items: center;
      flex-direction: row;

      gap: 1rem;

      .buttonNavigationPage {
        min-width: 0;
        font-size: 0;
        padding: 0.5rem;

        text-transform: none;

        border-radius: 25%;
        background: ${props => props.theme.colors.white};
        border: 1px solid ${props => props.theme.colors.line};

        color: ${props => props.theme.colors.title};

        cursor: pointer;
      }

      .buttonClearPlaylist {
        border: 0;
        line-height: 1;
        font-size: 0.875rem;
        border-radius: 16px;
        text-transform: none;
        padding: 0.875rem 1rem;
        color: ${props => props.theme.colors.white};
        background: ${props => props.theme.colors.background_secondary};
      }
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

          > div {
            width: 10px;
            height: 10px;
            border-radius: 5px;
            background: ${props => props.theme.colors.alternative_tertiary};
          }
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
            font-weight: 700;
            text-decoration: none;
            color: ${props => props.theme.colors.title};

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
      td {
        padding: 1.5rem 0;
      }

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
            font-weight: 700;
            text-decoration: none;
            color: ${props => props.theme.colors.title};

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
