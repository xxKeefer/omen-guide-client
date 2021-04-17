export interface RegisterValues {
  name: string
  email: string
  password: string
}

export interface RegisterForm {
  onSubmit: (values: RegisterValues) => void
}
