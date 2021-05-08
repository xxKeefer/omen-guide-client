import React, { useContext, useEffect } from 'react'
import { useAuth } from 'contexts/Auth/AuthProvider'
import { GraphQLClient } from 'graphql-request'

const gqlEndpoint: string = process.env.REACT_APP_GQL_URL as string
export const GraphQL = new GraphQLClient(gqlEndpoint)

const GraphQLContext = React.createContext<{ GraphQL: GraphQLClient }>({
  GraphQL
})

export const useGQL = () => {
  return useContext(GraphQLContext)
}

export const GQLProvider = ({ children }: any) => {
  const { token } = useAuth()

  useEffect(() => {
    token !== ''
      ? GraphQL.setHeader('authorization', `Bearer ${token}`)
      : GraphQL.setHeaders({})
  }, [token])

  return (
    <GraphQLContext.Provider value={{ GraphQL }}>
      {children}
    </GraphQLContext.Provider>
  )
}
