import { GraphQLClient } from 'graphql-request'

const gqlEndpoint: string = process.env.REACT_APP_GQL_URL as string
export const GraphQL = new GraphQLClient(gqlEndpoint)
