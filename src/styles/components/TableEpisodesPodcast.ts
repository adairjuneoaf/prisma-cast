import styled from 'styled-components'

export const Container = styled.table`
  width: 100%;
  height: auto;

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

  .contentTableEpisodes {
    td {
      padding: 1rem 0;
      border-bottom: 2px solid ${props => props.theme.colors.line};
      border-collapse: collapse;
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

      h4 {
        font-size: 1rem;
      }
    }

    .buttonPlayPodcast {
      text-align: right;

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
`
