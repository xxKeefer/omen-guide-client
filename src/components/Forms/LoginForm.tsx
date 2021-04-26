import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Button, TextField, Grid } from '@material-ui/core'
import FormStyles from './styles/Form'
import { FormSubmission } from '../../interfaces/Forms'
import schema from './validation/login'
import { UserIdentifier } from '../../interfaces/User'
import { useAuth } from '../../contexts/Auth/AuthProvider'
import { useHistory } from 'react-router-dom'

const LoginForm: React.FC<FormSubmission> = ({ onError }) => {
  const { actions } = useAuth()
  const history = useHistory()
  const classes = FormStyles()
  const initialValues: UserIdentifier = {
    identifier: '',
    password: '',
    provider: 'local'
  }
  return (
    <Grid container justify="center">
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        validateOnBlur={true}
        onSubmit={async (values: UserIdentifier) => {
          try {
            await actions.login(values)
            history.push('/omen')
          } catch (error) {
            const {
              message
            } = error.response.errors[0].extensions.exception.data.message[0].messages[0]
            console.log({ message }, { error })
            onError('ACCESS:: DENIED!')
          }
        }}
      >
        <Grid container justify="center">
          <Form className={classes.form}>
            <Field
              className={classes.textfield}
              name="identifier"
              label="email"
              placeholder="email"
              as={TextField}
            />
            <ErrorMessage name="identifier">
              {(msg) => <pre className={classes.error}>ERR:: {msg}</pre>}
            </ErrorMessage>
            <Field
              className={classes.textfield}
              name="password"
              label="password"
              placeholder="password"
              type="password"
              as={TextField}
            />
            <ErrorMessage name="password">
              {(msg) => <pre className={classes.error}>ERR:: {msg}</pre>}
            </ErrorMessage>
            <Grid item container justify="center">
              <Button
                className={classes.button}
                type="submit"
                variant="contained"
                size="large"
                color="primary"
              >
                Login
              </Button>
            </Grid>
          </Form>
        </Grid>
      </Formik>
    </Grid>
  )
}

export default LoginForm
