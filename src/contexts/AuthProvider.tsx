import React, { useContext, useState, useEffect } from 'react'
import User, {
  UserIdentifier,
  AuthInterface,
  AuthValue
} from '../interfaces/User'
import AuthActions, { AuthClient } from './actions'

const initialUserState: User = { name: null, email: null, role: 'public' }
const AuthContext = React.createContext<AuthValue>({
  token: '',
  user: initialUserState,
  actions: AuthActions
})

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(initialUserState)
  const [token, setToken] = useState('')

  useEffect(() => {
    token !== ''
      ? AuthClient.setHeader('authorization', `Bearer ${token}`)
      : AuthClient.setHeaders({})
  }, [token])

  const register = async (variables: AuthInterface) => {
    const { token, user } = await AuthActions.register(variables)
    setToken(token)
    setUser(user)
  }
  const login = async (variables: UserIdentifier) => {
    const { token, user } = await AuthActions.login(variables)
    setToken(token)
    setUser(user)
  }

  const logout = () => {
    const { token, user } = AuthActions.logout()
    setToken(token)
    setUser(user)
  }

  const check = (user: User) => {
    return AuthActions.check(user)
  }

  const authObj: AuthValue = {
    token,
    user,
    actions: { register, login, logout, check }
  }
  return <AuthContext.Provider value={authObj}>{children}</AuthContext.Provider>
}
