import { AuthInterface, UserIdentifier } from './User'

export interface RegisterForm {
  // onSubmit: (values: AuthInterface) => void
  onError: (error: string) => void
}

export interface LoginForm {
  onSubmit: (values: UserIdentifier) => void
}
