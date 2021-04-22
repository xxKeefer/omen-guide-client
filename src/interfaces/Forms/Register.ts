import { AuthInterface } from '../Auth/User'

export interface RegisterForm {
  onSubmit: (values: AuthInterface) => void
}
