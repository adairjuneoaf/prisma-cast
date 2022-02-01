import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 6.5rem);

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow-y: scroll;

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
`
export const Content = styled.div`
  width: 100%;
  height: 100%;

  padding: 0rem 2.5rem;

  font-size: 0.875rem;
  text-align: justify;

  h2 {
    font-size: 1.875rem;
    padding: 1.5rem 0 2rem 0;
    cursor: default;
  }

  .latestReleases {
    .cardEpisode {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-start;
      gap: 2rem;

      &:first-child {
        flex: 1;
      }
      &:last-child {
        flex: 1;
      }
    }
  }

  .allEpisodes {
    table {
      width: 100%;
      height: auto;
    }

    .headTitleTableAllEpisodes {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;

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

      .isActivePlaylist {
        pointer-events: none;
        opacity: 0.5;
      }
    }

    .headTableEpisodes {
      td {
        font-size: 0.875rem;
        font-weight: 500;
        padding: 0 0 2rem 0;
        border-bottom: 2px solid ${props => props.theme.colors.line};
        color: ${props => props.theme.colors.text_primary};

        cursor: default;
      }
    }
  }
`
