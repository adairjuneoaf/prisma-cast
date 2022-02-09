import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 6.5rem;
  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: default;

  background: ${props => props.theme.colors.background_primary};

  border-bottom: 2px solid ${props => props.theme.colors.lines};

  .infoAboutApp {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    gap: 1.5rem;

    > a {
      display: flex;
      flex-direction: row;
      align-items: center;

      gap: 1rem;

      img {
        width: 24px;
        cursor: pointer;
      }

      font-family: Lexend, 'sans-serif';
      font-weight: 700;
      font-size: 1.5rem;
      color: ${props => props.theme.colors.title};

      text-decoration: none;
    }

    .divider {
      width: 2px;
      height: 2rem;
      background: ${props => props.theme.colors.lines};
    }

    color: ${props => props.theme.colors.text};
  }

  .infoAboutUser {
    display: flex;
    align-items: center;
    flex-direction: row;

    gap: 1.125rem;

    color: ${props => props.theme.colors.text};

    p {
      text-transform: capitalize;
    }

    .user {
      .toggleThemeApp {
        min-width: 0;

        font-size: 0;
        padding: 0.5rem;
        border: 0;

        display: flex;
        align-items: center;

        border-radius: 25%;
        background: ${props => props.theme.colors.background_primary};
        border: 1px solid ${props => props.theme.colors.lines};

        color: ${props => props.theme.colors.hover};

        cursor: pointer;
      }
    }
  }
`
