import styled from 'styled-components'

export const Container = styled.tr`
  td {
    padding: 1rem 0;
    border-bottom: 2px solid ${props => props.theme.colors.lines};
    border-collapse: collapse;
  }

  .dataLaunchPodcast,
  .durationPodcast {
    width: 96px;
  }

  .buttonPlayPodcast {
    width: 112px;
    height: auto;
  }

  color: ${props => props.theme.colors.text};
  cursor: default;

  .imgTitlePodcast {
    width: 72px;
    height: 72px;

    padding-right: 1rem;

    .imgEpisode {
      display: flex;
      align-items: center;

      .imgPodcast {
        border-radius: 8px;
      }
    }
  }

  .titleAndMembersPodcast {
    //width: 150%;

    div {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: flex-start;
    }

    padding-right: 1rem;

    a {
      padding: 0 1.5rem 0 0;

      font: 'Lexend', sans-serif;
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 1.2;

      text-decoration: none;
      color: ${props => props.theme.colors.title};

      text-overflow: ellipsis;

      transition: color 0.2s;

      &:hover {
        color: ${props => props.theme.colors.hover};
      }
    }

    /* white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; */
  }

  .dataLaunchPodcast {
    text-transform: capitalize;
  }

  .buttonPlayPodcast {
    text-align: right;

    .button {
      min-width: 0;
      font-size: 0;
      padding: 0.5rem;

      margin-left: 0.5rem;

      border-radius: 25%;
      background: ${props => props.theme.colors.background_primary};
      border: 1px solid ${props => props.theme.colors.lines};

      color: ${props => props.theme.colors.title};

      cursor: pointer;

      img {
        width: 24px;
        height: 24px;
      }
    }
  }
`
