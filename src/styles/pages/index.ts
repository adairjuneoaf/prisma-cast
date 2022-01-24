import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 6.5rem);

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow-y: scroll;
`
export const Content = styled.div`
  width: 100%;
  height: 100%;

  padding: 0rem 2.5rem;

  font-size: 0.875rem;
  text-align: justify;

  h2 {
    font-size: 1.875rem;
    padding: 1.5rem 0 2rem 0;
  }

  .latestReleases {
    .cardEpisode {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-start;
      gap: 2rem;

      &:first-child {
        flex: 1;
      }
      &:last-child {
        flex: 1;
      }
    }
  }
`
