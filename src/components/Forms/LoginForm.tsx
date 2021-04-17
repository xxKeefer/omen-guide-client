import React from 'react'
import { Formik, Form, Field } from 'formik'
import { Button, TextField, Grid } from '@material-ui/core'
import FormStyles from './styles/Form'
import {
  LoginValues as Values,
  LoginForm as Interface
} from '../../interfaces/Forms/Login'

const LoginForm: React.FC<Interface> = ({ onSubmit }) => {
  const classes = FormStyles()
  const initialValues: Values = {
    email: '',
    name: '',
    password: ''
  }
  return (
    <Grid container justify="center">
      <Formik
        initialValues={initialValues}
        onSubmit={(values: Values) => {
          onSubmit(values)
        }}
      >
        {({ values }) => (
          <Grid container justify="center">
            <Form className={classes.form}>
              <Field
                className={classes.textfield}
                name="identifier"
                label="username or email"
                placeholder="username@email.com"
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
              {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
            </Form>
          </Grid>
        )}
      </Formik>
    </Grid>
  )
}

export default LoginForm
