import React from 'react'
import { Grid, Button, Typography, Paper, Box, Link } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import LoginForm from '../components/Forms/LoginForm'

const Login: React.FC = () => {
  const history = useHistory()
  return (
    <Box
      style={{
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Paper
        style={{
          maxWidth: '40vw',
          padding: '10px'
        }}
      >
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
          </Grid>
          <Grid item xs={12}>
            <LoginForm
              onSubmit={(values) => {
                console.log(values)
              }}
            />
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
