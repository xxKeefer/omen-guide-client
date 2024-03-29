import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import FormStyles from './styles/Form'
import { AuthInterface } from 'interfaces/User'
import { FormSubmission } from 'interfaces/Forms'
import schema from './validation/register'
import { Button, TextField, Grid } from '@material-ui/core'
import { useAuth } from 'contexts/Auth/AuthProvider'
import { useHistory } from 'react-router-dom'

const RegisterForm: React.FC<FormSubmission> = ({ onError }) => {
  const { actions } = useAuth()
  const history = useHistory()
  const classes = FormStyles()

  const initialValues: AuthInterface = {
    username: '',
    email: '',
    password: ''
  }

  return (
    <Grid container justify="center">
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        validateOnBlur={true}
        onSubmit={async (values: AuthInterface) => {
          try {
            await actions.register(values)
            history.push('/omen')
          } catch (error) {
            const {
              message
            } = error.response.errors[0].extensions.exception.data.message[0].messages[0]
            console.log({ message }, { error })
            onError('ERR:: Duplicate Username or Email')
          }
        }}
      >
        {({ errors }) => (
          <Grid container justify="center">
            <Form className={classes.form}>
              <Field
                className={classes.textfield}
                name="username"
                label="username"
                placeholder="username"
                as={TextField}
              />
              <ErrorMessage name="username">
                {(msg) => <pre className={classes.error}>ERR:: {msg}</pre>}
              </ErrorMessage>
              <Field
                className={classes.textfield}
                name="email"
                label="email"
                placeholder="email"
                as={TextField}
              />
              <ErrorMessage name="email">
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
                  Register
                </Button>
              </Grid>
            </Form>
          </Grid>
        )}
      </Formik>
    </Grid>
  )
}

export default RegisterForm
