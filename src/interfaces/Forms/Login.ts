export interface LoginValues {
  name: string
  email: string
  password: string
}

export interface LoginForm {
  onSubmit: (values: LoginValues) => void
}
