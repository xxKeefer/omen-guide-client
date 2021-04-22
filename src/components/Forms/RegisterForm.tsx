import React from 'react'
import { Formik, Form, Field } from 'formik'
import FormStyles from './styles/Form'
import { AuthInterface } from '../../interfaces/Auth/User'
import { RegisterForm as Interface } from '../../interfaces/Forms/Register'
import { Button, TextField, Grid } from '@material-ui/core'
import { useAuth } from '../../contexts/AuthProvider'

const RegisterForm: React.FC<Interface> = ({ onSubmit }) => {
  const { actions } = useAuth()
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
        onSubmit={async (values: AuthInterface) => {
          console.log({ values })
          await actions!.register(values)
        }}
      >
        {() => (
          <Grid container justify="center">
            <Form className={classes.form}>
              <Field
                className={classes.textfield}
                name="username"
                label="username"
                placeholder="username"
                as={TextField}
              />
              <Field
                className={classes.textfield}
                name="email"
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
