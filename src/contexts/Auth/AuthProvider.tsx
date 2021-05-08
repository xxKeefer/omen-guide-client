import React, { useContext, useState } from 'react'
import User, { AuthInterface, AuthValue, UserIdentifier } from 'interfaces/User'
import AuthActions from './actions'

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

  const register = async (variables: AuthInterface) => {
    try {
      const { token, user } = await AuthActions.register(variables)
      setToken(token)
      setUser(user)
    } catch (error) {
      console.error(error)
    }
  }
  const login = async (variables: UserIdentifier) => {
    try {
      const { token, user } = await AuthActions.login(variables)
      setToken(token)
      setUser(user)
    } catch (error) {
      //TODO: this should return the error so the form can display flash message
      console.log({ error })
    }
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
