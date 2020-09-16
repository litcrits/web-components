import fetch from 'unfetch';
import PropTypes from 'prop-types';
import React from 'react';
import { isNil } from 'lodash';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';

/**
 * Create apollo provider client
 *
 * @returns {object} client - Apollo client
 */
export function createClient() {
  return new ApolloClient({
    cache: new InMemoryCache({}),
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'all',
        fetchPolicy: 'cache-and-network',
      },
      query: {
        errorPolicy: 'all',
        fetchPolicy: 'cache-and-network',
      },
      mutate: {
        errorPolicy: 'all',
        fetchPolicy: 'no-cache',
      },
    },
    link: new HttpLink({
      fetch,
      headers: {
        Authorization: 'Bearer test',
      },
      uri: 'http://localhost:3884/graphql',
    }),
  });
}

function Apollo({ children }) {
  const [client] = React.useState(createClient());

  if (isNil(client)) return null;

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

Apollo.propTypes = {
  children: PropTypes.any,
};

export default Apollo;