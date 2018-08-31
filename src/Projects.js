import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'
import Project from './Project';

const Projects = () => (
  <Grid stackable columns={2} style={{height: '100vh', width: '100vw'}} >
    <Grid.Row>
      <Project />
      <Project />
    </Grid.Row>
    <Grid.Row>
      <Project />
      <Project />
    </Grid.Row>
  </Grid>
)

export default Projects
