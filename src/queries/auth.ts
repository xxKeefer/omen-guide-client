import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation authenticateUserWithPassword($email: String, $password: String) {
    authenticateUserWithPassword(email: $email, password: $password) {
      item {
        name
        email
        isAdmin
      }
    }
  }
`
