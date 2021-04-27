import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    MuiLink: {
      root: {
        cursor: 'pointer'
      }
    },
    MuiInputBase: {
      root: {
        width: '100%'
      }
    }
  },
  palette: {
    type: 'dark',
    primary: { main: '#FF396E' },
    secondary: { main: '#CCFF33' },
    error: { main: '#FF2900' },
    warning: { main: '#FFC600' },
    info: { main: '#0092FF' },
    success: { main: '#49FF00' },
    background: { paper: '#2D1C28', default: '#281723' }
  }
})

export default theme
