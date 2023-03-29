import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export const apolloClient = new ApolloClient({
    uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clf5r29ko5a6q01uj130u0pyc/master',
    cache: new InMemoryCache(),
  });