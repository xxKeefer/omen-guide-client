import { makeStyles } from '@material-ui/core/styles'

const NavStyles = makeStyles(({ palette }) => ({
  right: {
    marginLeft: 'auto',
    padding: '0px 15px',
    '&:hover': {
      border: '1px solid',
      borderColor: palette.background.default
    }
  },
  navLink: {
    padding: '0 15px',
    '&:hover': {
      border: '1px solid',
      borderColor: palette.background.default
    }
  },
  logoText: {
    cursor: 'pointer',
    marginRight: 20
  }
}))

export default NavStyles
