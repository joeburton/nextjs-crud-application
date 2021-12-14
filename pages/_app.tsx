import { ApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apollo';
import '../styles/globals.css';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
