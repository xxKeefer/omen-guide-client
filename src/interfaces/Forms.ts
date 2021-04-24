import { AuthInterface, UserIdentifier } from './User'

export interface RegisterForm {
  onSubmit: (values: AuthInterface) => void
}

export interface LoginForm {
  onSubmit: (values: UserIdentifier) => void
}
