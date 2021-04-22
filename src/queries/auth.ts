import { gql } from 'graphql-request'

export const LOGIN = gql`
  mutation login($input:{$identifier: String, $password: String})
    login( input:{identifier: $identifier, password: $password} ) {
      jwt
      user {
        username
        email
        role {
          type
        }
      }
    }
  }
`

export const REGISTER = gql`
  mutation register($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
      user {
        username
        email
        role {
          type
        }
      }
    }
  }
`
