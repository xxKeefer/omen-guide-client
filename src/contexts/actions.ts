import User, {
  UserIdentifier,
  AuthInterface,
  ActionInterface,
  UserData
} from '../interfaces/User'
import { GraphQLClient } from 'graphql-request'
import { LOGIN, REGISTER } from '../queries/auth'

const initialUserState: User = { name: null, email: null, role: 'public' }
const gqlEndpoint: string = process.env.REACT_APP_GQL_URL as string
export const AuthClient = new GraphQLClient(gqlEndpoint)

export const register = async (variables: AuthInterface) => {
  const data = await AuthClient.request(REGISTER, { input: variables })
  if (data.errors) {
    console.error(data.errors)
    return <UserData>{ token: '', user: initialUserState }
  }
  const token = data.register.jwt
  const user: User = {
    name: data.register.user.username,
    email: data.register.user.email,
    role: data.register.user.role.type
  }
  return <UserData>{ token, user }
}

export const login = async (variables: UserIdentifier) => {
  const data = await AuthClient.request(LOGIN, { input: variables })
  if (data.errors) {
    console.log(data.errors)
    return <UserData>{ token: '', user: initialUserState }
  }
  const token = data.login.jwt
  const user: User = {
    name: data.login.user.username,
    email: data.login.user.email,
    role: data.login.user.role.type
  }
  return <UserData>{ token, user }
}

export const logout = () => {
  return <UserData>{ token: '', user: initialUserState }
}

export const check = (user: User) => {
  const { name, email } = user
  return !!name || !!email
}

const AuthActions: ActionInterface = { register, login, logout, check }
export default AuthActions
