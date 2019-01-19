import React from 'react'
import {ProjectContainer,} from './styles/ProjectStyles';

const Project = ({ project: {title, color, description, link, backgroundImage,}, }) => (

  <ProjectContainer color={color} >
      <h1>{title}</h1>
      <p>{description}</p>
    </ProjectContainer>

)

export default Project