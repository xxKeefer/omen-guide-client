import React from 'react'
import { Grid, Box } from '@material-ui/core'
import DataDump from '../components/Test/DataDump'
import { DATADUMP } from '../queries/nav'

const Example: React.FC = () => {
  return (
    <Box
      style={{
        width: '100%',
        height: '100%'
      }}
    >
      <Grid container justify="center">
        <Grid container direction="column" justify="center">
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'pink'
            }}
          >
            <DataDump query={DATADUMP} />
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Example
