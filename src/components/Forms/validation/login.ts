import * as yup from 'yup'

const LoginSchema = () => {
  return yup.object().shape({
    identifier: yup.string().required('username is required'),

    password: yup.string().required('password is required')
  })
}

export default LoginSchema
