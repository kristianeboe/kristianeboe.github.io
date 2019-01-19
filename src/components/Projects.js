import React from 'react'
import Project from './Project'
import { ProjectsSection, ProjectsWrapper, } from './styles/ProjectsStyles'
import kristianeboe from '../images/kristianeboe.jpg'
import yaps from '../images/yaps.jpg'
import linkedIn from '../images/linkedIn.jpg'
import blunk from '../images/blunk.jpg'
import coding from '../images/coding.jpg'
import boostamins from '../images/boostamins.jpg'

const projects = [
  {
    title: 'YAPS.life',
    description: 'A matchmaking system for roommates',
    background:{ image: yaps, centering: 'center',},
    link: 'https://yaps.life/',
  },
  {
    title: 'Github / Code',
    description: 'See the source code behind my projects',
    background:{ image: coding, centering: 'center',},
    link: 'https://github.com/kristianeboe',
  },
  {
    title: 'kristianeboe.me',
    description:
      'My own little piece of the web. Travel blog and musings on leadership.',
    background:{ image: kristianeboe, centering: 'center',},
    link: 'https://kristianeboe.me/',
  },
  {
    title: 'LinkedIn',
    description: 'Professional profile',
    background:{ image: linkedIn, centering: 'top',},
    link: 'https://www.linkedin.com/in/kristianeboe/',
  },
  {
    title: 'Blunk',
    description: 'Dating, redefined',
    background:{ image: blunk, centering: 'center',},
    link: 'https://blunk-dev.firebaseapp.com',
  },
  {
    title: 'Boostamins',
    description:
      'A hyper optimized webshop for vitamins and quality suppliments',
    background:{ image: boostamins, centering: 'center',},
    link: 'https://boostamins.firebaseapp.com',
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
