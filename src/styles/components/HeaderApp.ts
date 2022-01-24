import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 6.5rem;
  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: default;

  background: ${props => props.theme.colors.white};

  border-bottom: 2px solid #e6e8eb;

  .infoAboutApp {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    gap: 1.5rem;

    img {
      width: 192px;
    }

    .divider {
      width: 2px;
      height: 2rem;
      background: #e6e8eb;
    }

    color: ${props => props.theme.colors.text_secondary};
  }

  .infoAboutUser {
    display: flex;
    flex-direction: row;
    align-items: center;

    color: ${props => props.theme.colors.text_secondary};

    p {
      text-transform: capitalize;
    }
  }
`
