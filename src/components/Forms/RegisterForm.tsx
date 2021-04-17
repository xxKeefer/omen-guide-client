import React from 'react'
import { Formik, Form, Field } from 'formik'
import {
  RegisterValues as Values,
  RegisterForm as Interface
} from '../../interfaces/Forms/Register'
import { Button, TextField } from '@material-ui/core'

const RegisterForm: React.FC<Interface> = ({ onSubmit }) => {
  const initialValues: Values = {
    email: '',
    name: '',
    password: ''
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: Values) => {
        onSubmit(values)
      }}
    >
      {({ values }) => (
        <Form>
          <div>
            <div>
              <Field name="name" placeholder="name" as={TextField} />
            </div>
            <div>
              <Field name="email" placeholder="email" as={TextField} />
            </div>
            <div>
              <Field
                name="password"
                placeholder="password"
                type="password"
                as={TextField}
              />
            </div>
          </div>
          <Button type="submit">SUBMIT</Button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  )
}

export default RegisterForm
