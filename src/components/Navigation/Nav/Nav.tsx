import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from '@material-ui/core'
import { Menu } from '@material-ui/icons/'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../../contexts/Auth/AuthProvider'
import NavStyles from './style'

const Nav = () => {
  const history = useHistory()
  const { user, actions } = useAuth()
  const classes = NavStyles()

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => {
            console.log(user)
          }}
        >
          <Menu />
        </IconButton>

        <div className={classes.logoText} onClick={() => history.push('/')}>
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
            history.push('/omen')
          }}
        >
          TEMP:: Omen
        </Button>
        {actions.check(user) && (
          <Button
            className={classes.right}
            color="inherit"
            onClick={() => {
              actions.logout()
              history.push('/')
            }}
          >
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Nav
