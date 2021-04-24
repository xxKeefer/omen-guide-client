import * as yup from 'yup'

const LoginSchema = () => {
  return yup.object().shape({
    identifier: yup
      .string()
      .required('username is required')
      .min(3, 'must have at least 3 characters')
      .max(50, 'must have no more than 20 characters'),
    password: yup
      .string()
      .required('password is required')
      .min(8, 'Password must be at least 8 characters')
      .max(20, 'Password cannot be longer than 20 characters')
      .matches(
        /[A-Z]/,
        'Password must contain at least one uppercase character.'
      )
      .matches(
        /[a-z]/,
        'Password must contain at least one lowercase character.'
      )
      .matches(/[0-9]/, 'Password must contain at least one number.')
  })
}

export default LoginSchema
