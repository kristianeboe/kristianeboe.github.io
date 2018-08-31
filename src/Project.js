import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'
import mountain from './mountain.jpg'

const Project = () => (
  <Grid.Column style={{ height: '50%', width: '50%' }}>
    <Image
      src={mountain}
      fluid
      as="a"
      href="http://google.com"
      target="_blank"
    />
  </Grid.Column>
)

export default Project
