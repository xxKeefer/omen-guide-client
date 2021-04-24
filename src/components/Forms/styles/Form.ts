import { makeStyles } from '@material-ui/core/styles'

const FormStyles = makeStyles({
  root: {},
  form: { width: '70%' },
  textfield: {
    display: 'block',
    paddingBottom: '10px'
  },
  error: { color: 'red', fontSize: 8, margin: 0 },
  button: {
    width: '50%',
    marginTop: 20
  }
})

export default FormStyles
