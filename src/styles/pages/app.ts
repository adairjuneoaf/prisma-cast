import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: space-between;
  flex-direction: row;

  .podcast {
    width: 100%;
    height: 100%;
    flex: 10;
  }

  .player {
    width: 100%;
    height: 100%;
    flex: 1;
  }

  /* @media only screen and (max-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .podcast {
      width: 100%;
      height: auto;
    }

    .player {
      width: 100%;
      height: auto;

      position: fixed;
      bottom: 0;
      left: 0;
    }
  } */
`
