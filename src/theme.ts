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
    primary: { main: '#7F55AB' },
    secondary: { main: '#FFC6DE' },
    background: { paper: '#3C2536', default: '#4E3046' }
  }
})

export default theme
