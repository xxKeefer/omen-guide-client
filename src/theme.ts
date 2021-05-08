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
        cursor: 'pointer',
        fontFamily: 'BioRhyme',
        fontWeight: 400
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
  },
  typography: {
    fontFamily: 'Kanit, Roboto',
    h1: { fontFamily: 'Days One' },
    h2: { fontFamily: 'Days One' },
    h3: { fontFamily: 'Days One' },
    h4: { fontFamily: 'Days One' },
    h5: { fontFamily: 'Days One' },
    h6: { fontFamily: 'Days One' },
    button: { fontFamily: 'BioRhyme', fontWeight: 800 }
  }
})

export default theme
