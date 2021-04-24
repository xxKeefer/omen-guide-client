import React from 'react'
import { Formik, Form, Field } from 'formik'
import { Button, TextField, Grid } from '@material-ui/core'
import FormStyles from './styles/Form'
import { FormSubmission } from '../../interfaces/Forms'
import { UserIdentifier } from '../../interfaces/User'
import { useAuth } from '../../contexts/AuthProvider'
import { useHistory } from 'react-router-dom'

const LoginForm: React.FC<FormSubmission> = ({ onError }) => {
  const { actions } = useAuth()
  const history = useHistory()
  const classes = FormStyles()
  const initialValues: UserIdentifier = {
    identifier: '',
    password: ''
  }
  return (
    <Grid container justify="center">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values: UserIdentifier) => {
          try {
            actions.login(values)
            history.push('/example')
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
            <Field
              className={classes.textfield}
              name="password"
              label="password"
              placeholder="password"
              type="password"
              as={TextField}
            />
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
