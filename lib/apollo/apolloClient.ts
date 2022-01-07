import { ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({
  addTypename: false,
  typePolicies: {
    Query: {
      fields: {
        developers: {
          merge(_existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

let host;

switch (process.env.NODE_ENV) {
  case 'test':
    host = process.env.NEXT_PUBLIC_APP_TEST;
    break;
  case 'development':
    host = process.env.NEXT_PUBLIC_APP_DEV;
    break;
  case 'production':
    host = process.env.NEXT_PUBLIC_APP_PROD;
    break;
}

const apolloClient = new ApolloClient({
  uri: `${host}/api/graphql`,
  cache: cache,
});

export default apolloClient;
