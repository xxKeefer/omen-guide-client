import React from 'react'
import { Formik, Form, Field } from 'formik'
import { Button, TextField, Grid } from '@material-ui/core'
import FormStyles from './styles/Form'
import { LoginForm as Interface } from '../../interfaces/Forms'
import { UserIdentifier } from '../../interfaces/User'

const LoginForm: React.FC<Interface> = ({ onSubmit }) => {
  const classes = FormStyles()
  const initialValues: UserIdentifier = {
    identifier: '',
    password: ''
  }
  return (
    <Grid container justify="center">
      <Formik
        initialValues={initialValues}
        onSubmit={(values: UserIdentifier) => {
          onSubmit(values)
        }}
      >
        <Grid container justify="center">
          <Form className={classes.form}>
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
