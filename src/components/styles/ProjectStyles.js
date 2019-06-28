import styled from 'styled-components'

export const StyledParent = styled.a`
  overflow: hidden;
  text-decoration: none;
`

export const ProjectHeader = styled.h2`
  font-size: 2em;
`

export const ProjectDescription = styled.p`
  font-size: 1em;
  padding: 0 5em 0 5em
`

export const ProjectContainer = styled.div`
font-family: 'IBM Plex Sans', sans-serif;
background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
  url(${props => props.background.image})
    ${props => props.background.centering} / cover no-repeat;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
align-items: center;
height: 100%;
width: 100%;
color: white;
transition: all 0.5s;
:hover {
  transform: scale(1.2);
}
`