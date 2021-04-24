export default interface UserInterface {
  name: string | null
  email: string | null
  role: string
}

export interface UserData {
  token: string
  user: UserInterface
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

export interface ActionInterface {
  register: (variables: AuthInterface) => Promise<UserData>
  login: (variables: UserIdentifier) => Promise<UserData>
  logout: () => UserData
  check: (user: UserInterface) => Boolean
}

export interface ContextActions {
  register: (variables: AuthInterface) => void
  login: (variables: UserIdentifier) => void
  logout: () => void
  check: (user: UserInterface) => Boolean
}

export interface AuthValue {
  token: string
  user: UserInterface
  actions: ContextActions
}
