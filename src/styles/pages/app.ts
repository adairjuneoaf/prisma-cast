import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: auto;

  display: flex;
  justify-content: space-between;
  flex-direction: row;

  .podcast {
    width: 100%;
    height: auto;
    flex: 10;
  }

  .player {
    width: 100%;
    height: auto;
    flex: 1;
  }
`
