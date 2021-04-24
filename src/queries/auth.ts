import { gql } from 'graphql-request'

export const LOGIN = gql`
  mutation login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
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
