import { makeStyles } from '@material-ui/core/styles'

const FormStyles = makeStyles(({ palette }) => ({
  root: {},
  form: { width: '70%', maxWidth: '20vw' },
  textfield: {
    display: 'block',
    paddingBottom: '10px'
  },
  error: { color: palette.error.main, fontSize: 8, margin: 0 },
  button: {
    width: '50%',
    marginTop: 20
  }
}))

export default FormStyles
