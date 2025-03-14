// client.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // GraphQL server URL
  cache: new InMemoryCache()
});