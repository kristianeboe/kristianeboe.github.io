import styled from 'styled-components'

export const ProjectsSection = styled.section`
  min-height: 100vh;
`

export const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(33vw, 1fr));
  grid-template-rows: 50vh 50vh;
  @media only screen and (max-width: 1001px) {
    grid-template-columns: repeat(auto-fill, minmax(50vw, 1fr));
    grid-template-rows: 50vh 50vh 50vh;
  }
  @media only screen and (max-width: 501px) {
    grid-template-columns: repeat(auto-fill, minmax(100vw, 1fr));
    grid-template-rows: repeat(6, 25vh)
  }
`
