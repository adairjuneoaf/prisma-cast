import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 6.5rem);

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  cursor: default;

  h1 {
    font-size: 10rem;
    font-family: 'Lexend', sans-serif;
    font-weight: 600;
    letter-spacing: 1rem;
    color: ${props => props.theme.colors.yellow_medium};
  }

  p {
    font-size: 1.5rem;
    font-family: 'Lexend', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    color: ${props => props.theme.colors.text};
  }

  .gridLinksPage {
    padding: 1rem 0;

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
    }
  }
`
