import React, { useEffect, useState } from 'react'
import { Grid, Typography, Paper, Box, Link } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import LoginForm from 'components/Forms/LoginForm'
import AuthenticationStyles from './styles/AuthenticationPages'
import { LOGIN } from 'queries/auth'

const Login: React.FC = () => {
  const classes = AuthenticationStyles()
  const history = useHistory()

  const [errorMessage, setErrorMessage] = useState<String | null>(null)

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage(null)
    }, 10000)
  }, [errorMessage])

  return (
    <Box className={classes.content}>
      <Paper className={classes.formHolder}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              OMEN GUIDE
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              Welcome Back to Star City.
            </Typography>
            <pre className={classes.errorMessage}>{errorMessage}</pre>
          </Grid>
          <Grid item xs={12}>
            <LoginForm onError={(error) => setErrorMessage(error)} />
          </Grid>
          <Grid container justify="center" item spacing={3} xs={12}>
            <Grid item xs={12}>
              <Typography variant="subtitle1" align="center">
                Haven't got an account yet?
                <Link
                  onClick={() => {
                    history.push('/register')
                  }}
                >
                  &nbsp;Register&nbsp;
                </Link>
                instead.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default Login
