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
  palette: {}
})

export default theme
