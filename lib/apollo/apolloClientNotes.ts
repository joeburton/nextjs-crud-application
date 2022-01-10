import { ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({
  addTypename: false,
});

const apolloClientNotes = new ApolloClient({
  uri: `https://notes-graphql.vercel.app/graphql`,
  cache: cache,
});

export default apolloClientNotes;
