import React from 'react'
import Project from './Project'
import { ProjectsSection, ProjectsWrapper, } from './styles/ProjectsStyles'

const projects = [
  {
    title: 'YAPS.life',
    description: 'A matchmaking system for roommates',
    color: 'blue',
  },
  {
    title: 'Github / Code',
    description: 'See the source code behind my projects',
    color: 'grey',
  },
  {
    title: 'kristianeboe.me',
    description:
      'My own little piece of the web. Travel blog and musings on leadership.',
    color: 'red',
  },
  {
    title: 'LinkedIn',
    description: 'Professional profile',
    color: 'teal',
  },
  {
    title: 'Blunk',
    description: 'Dating, redefined',
    color: 'white',
  },
  {
    title: 'Boostamins',
    description:
      'A hyper optimized webshop for vitamins and quality suppliments',
    color: 'green',
  },
]

const Projects = () => (
  <ProjectsSection>
    <ProjectsWrapper>
      {projects.map(project => (
        <Project key={project.title} project={project} />
      ))}
    </ProjectsWrapper>
  </ProjectsSection>
)

export default Projects
