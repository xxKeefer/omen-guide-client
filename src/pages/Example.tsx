import React from 'react'
import { Grid, Box } from '@material-ui/core'
import SideNav from '../components/Navigation/SideNav/SideNav'
import { CHAPTERS } from '../queries/nav'

const Example: React.FC = () => {
  return (
    <Box
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#face00'
      }}
    >
      <Grid container justify="center">
        <Grid container direction="column" justify="center" xs={2}>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'pink'
            }}
          >
            <SideNav query={CHAPTERS} />
          </div>
        </Grid>
        <Grid container direction="column" justify="center" xs={10}>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'purple'
            }}
          >
            example
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Example
