import gql from 'graphql-tag'
// import { Query } from 'react-apollo'

export const login = (email: string, password: string) => {
  return gql`
  mutation {
    authenticateUserWithPassword(
      email: ${email}
      password: ${password}
    ) {
      item {
        name
        isAdmin
      }
    }
  }
`
}

export {}
