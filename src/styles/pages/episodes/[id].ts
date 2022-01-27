import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: calc(100vh - 6.5rem);

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
  padding: 3rem 0;

  margin: 0 auto;

  cursor: default;

  .headerPagePodcast {
    width: 100%;
    text-align: center;

    position: relative;

    .imgPodcast {
      position: relative;

      border-radius: 24px;
    }

    .button {
      position: absolute;
      top: 50%;
      z-index: 5;

      min-width: 0;
      font-size: 0;
      padding: 0.875rem;

      border-radius: 25%;

      border: 0px;

      color: ${props => props.theme.colors.title};

      cursor: pointer;

      img {
        width: 32px;
        height: 32px;
      }

      &:first-child {
        transform: translate(-50%, -50%);
        background: ${props => props.theme.colors.background_secondary};
      }

      &:last-child {
        transform: translate(-50%, -50%);
        background: #04d361;
      }
    }
  }

  .bodyPagePodcast {
    width: calc(994px - 3rem);
    height: auto;

    margin: 0 auto;
    margin-top: 2rem;
    text-align: left;

    > h2 {
      font-size: 2rem;
      line-height: 40px;
      color: ${props => props.theme.colors.title};
    }

    .infoEpisodePodcast {
      margin-top: 1.5rem;
      margin-bottom: 1.125rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;

      gap: 1rem;

      p {
        color: ${props => props.theme.colors.text_secondary};
      }

      p.launchDateEpisodePodcast {
        text-transform: capitalize;
      }

      span.divider {
        width: 4px;
        height: 4px;
        border-radius: 2px;
        background: ${props => props.theme.colors.line};
      }
    }

    .dividerPage {
      width: 100%;
      height: 2px;

      margin: 1.125rem 0 2rem 0;
      background: ${props => props.theme.colors.line};
    }

    .descriptionEpisodePodcast {
      font-size: 1rem;
      line-height: 24px;
      text-align: justify;
      color: ${props => props.theme.colors.text_secondary};
    }
  }
`
