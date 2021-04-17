import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from '@material-ui/core'
import { Menu } from '@material-ui/icons/'
import React from 'react'
import { useHistory } from 'react-router-dom'

const Nav = () => {
  const history = useHistory()
  const preventDefault = (event: React.SyntheticEvent) => {
    event.preventDefault()
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>

        <div style={{ cursor: 'pointer' }} onClick={() => history.push('/')}>
          <Typography variant="h6">Omen Guide</Typography>
        </div>

        <Button
          color="inherit"
          onClick={() => {
            history.push('/login')
          }}
        >
          Login
        </Button>
        <Button
          color="inherit"
          onClick={() => {
            history.push('/register')
          }}
        >
          Register
        </Button>
        <Button
          color="inherit"
          onClick={() => {
            history.push('/example')
          }}
        >
          Example
        </Button>
        <Button
          color="inherit"
          onClick={() => {
            history.push('/rules')
          }}
        >
          Rules
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Nav
