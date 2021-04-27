import { makeStyles } from '@material-ui/core/styles'

const AuthenticationStyles = makeStyles(({ palette }) => ({
  content: {
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  formHolder: {
    maxWidth: '40vw',
    padding: '10px'
  },
  errorMessage: {
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    color: palette.error.main,
    marginBottom: '-20px'
  }
}))

export default AuthenticationStyles
