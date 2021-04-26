import { gql } from 'graphql-request'

export const CHAPTERS = gql`
  {
    chapters {
      title
      subtitle
      sections {
        title
        subtitle
      }
    }
  }
`
