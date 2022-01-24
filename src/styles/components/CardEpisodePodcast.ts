import styled from 'styled-components'

export const Container = styled.div`
  width: auto;
  height: 9rem;

  padding: 1.25rem;
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.line};

  border-radius: 24px;
`
