import React from 'react'
import { Grid, Button, Typography, Paper, Box } from '@material-ui/core'
import AuthenticationStyles from './styles/AuthenticationPages'
import { useHistory } from 'react-router-dom'

const Home: React.FC = () => {
  const classes = AuthenticationStyles()
  const history = useHistory()
  return (
    <Box className={classes.content}>
      <Paper className={classes.formHolder}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12}>
            <Typography variant="h1" align="center">
              OMEN GUIDE
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              A New RPG ruleset inspired by FateCore under development.
            </Typography>
          </Grid>
          <Grid container item spacing={3} xs={12}>
            <Grid item xs={7}>
              <Button
                variant="contained"
                size="large"
                fullWidth
                color="secondary"
                onClick={() => {
                  history.push('/register')
                }}
              >
                Register
              </Button>
            </Grid>
            <Grid item xs={5}>
              <Button
                variant="contained"
                size="large"
                fullWidth
                color="primary"
                onClick={() => {
                  history.push('/login')
                }}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default Home
