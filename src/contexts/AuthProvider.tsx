import React, { useContext, useState, useEffect } from 'react'
import { GraphQLClient } from 'graphql-request'
import User, { Identifier, AuthInterface } from '../interfaces/Auth/User'
import { LOGIN, REGISTER } from '../queries/auth'

interface AuthActions {
  register: (variables: AuthInterface) => Promise<void>
  login: (variables: Identifier) => Promise<void>
  logout: () => void
}

interface AuthValue {
  token?: string
  user?: User
  actions?: AuthActions
}

const AuthContext = React.createContext<AuthValue>({})

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: any) => {
  const gqlEndpoint: string = process.env.REACT_APP_GQL_URL as string
  const AuthClient = new GraphQLClient(gqlEndpoint)
  const initialUserState: User = { name: null, email: null, role: 'public' }
  const [user, setUser] = useState(initialUserState)
  const [token, setToken] = useState('')

  useEffect(() => {
    token !== ''
      ? AuthClient.setHeader('authorization', `Bearer ${token}`)
      : AuthClient.setHeaders({})
  }, [token])

  const register = async (variables: AuthInterface) => {
    const data = await AuthClient.request(REGISTER, { input: variables })
    console.log({ data })
    if (data.errors) return console.log('Something went wrong.')
    setToken(data.register.jwt)
    const userData: User = {
      name: data.register.user.username,
      email: data.register.user.email,
      role: data.register.user.role.type
    }
    setUser(userData)
  }
  const login = async (variables: Identifier) => {
    const data = await AuthClient.request(LOGIN, variables)
    if (data.errors) return console.log('Something went wrong.')
    setToken(data.jwt)
    const userData: User = {
      name: data.user.username,
      email: data.user.email,
      role: data.user.role.type
    }
    setUser(userData)
  }

  const logout = () => {
    setToken('')
    setUser(initialUserState)
  }

  const authObj: AuthValue = {
    token,
    user,
    actions: { register, login, logout }
  }
  return <AuthContext.Provider value={authObj}>{children}</AuthContext.Provider>
}
