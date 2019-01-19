import React from 'react'
import { StyledParent, ProjectContainer, ProjectHeader, ProjectDescription, } from './styles/ProjectStyles';


const Project = ({
  project: { title, background, description, link, backgroundImage, },
}) => (
  <StyledParent href={link}>
    <ProjectContainer background={background}>
      <ProjectHeader>{title}</ProjectHeader>
      <ProjectDescription>{description}</ProjectDescription>
    </ProjectContainer>
  </StyledParent>
)



export default Project
