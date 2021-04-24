export default interface UserInterface {
  name: string | null
  email: string | null
  role: string
}

export interface UserIdentifier {
  identifier: string
  password: string
}
export interface AuthInterface {
  username: string
  email: string
  password: string
}

export interface AuthActions {
  register: (variables: AuthInterface) => Promise<void>
  login: (variables: UserIdentifier) => Promise<void>
  logout: () => void
}

export interface AuthValue {
  token?: string
  user?: UserInterface
  actions?: AuthActions
}
