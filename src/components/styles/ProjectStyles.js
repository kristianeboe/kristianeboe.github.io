import styled from 'styled-components'

export const ProjectContainer = styled.div`
  background: ${props => props.color};
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :hover {
    color: blue;
  }

`