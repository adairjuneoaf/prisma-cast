import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: default;

  margin: 4rem 0 0 0;

  background: ${props => props.theme.colors.background_primary};

  a.highlightedInfos {
    font-weight: 500;
    text-decoration: none;

    color: ${props => props.theme.colors.background_secondary};
  }
`
