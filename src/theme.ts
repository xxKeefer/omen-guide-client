import { createMuiTheme } from '@material-ui/core/styles'

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    tertiary: Palette['primary']
  }
  interface PaletteOptions {
    tertiary: PaletteOptions['primary']
  }
}

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
    tertiary: { main: '#33e4ff' },
    error: { main: '#FF2900' },
    warning: { main: '#FFC600' },
    info: { main: '#0092FF' },
    success: { main: '#49FF00' },
    background: { paper: '#2D1C28', default: '#281723' }
  }
})

export default theme
