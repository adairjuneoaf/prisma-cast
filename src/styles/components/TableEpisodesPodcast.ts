import styled from 'styled-components'

export const Container = styled.tr`
  td {
    padding: 1rem 0;
    border-bottom: 2px solid ${props => props.theme.colors.line};
    border-collapse: collapse;
  }

  .participantsPodcast,
  .dataLaunchPodcast {
    padding: 0 1.5rem 0 0;
  }

  color: ${props => props.theme.colors.text_secondary};
  cursor: default;

  .imgTitlePodcast {
    > div {
      width: 64px;
      height: 64px;
      .imgPodcast {
        border-radius: 8px;
      }
    }
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    gap: 1rem;

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
        color: ${props => props.theme.colors.text_secondary};
      }
    }
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
`
