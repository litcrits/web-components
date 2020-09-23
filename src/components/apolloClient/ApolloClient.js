import fetch from 'unfetch';
import PropTypes from 'prop-types';
import React from 'react';
import { isNil } from 'lodash';
import { connect } from 'react-redux';
import { BatchHttpLink } from '@apollo/client/link/batch-http';
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client';

/**
 * Create apollo provider client
 *
 * @returns {object} client - Apollo client
 */
export function createClient({ accessToken }) {
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
    link: ApolloLink.from([
      new BatchHttpLink({
        fetch,
        headers: {
          Authorization: isNil(accessToken) ? '' : `Bearer ${accessToken}`,
        },
        uri: 'http://localhost:3884/graphql',
      }),
    ]),
  });
}

function Apollo({ children, accessToken }) {
  const [client] = React.useState(createClient({ accessToken }));

  if (isNil(client)) return null;

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

Apollo.propTypes = {
  accessToken: PropTypes.string,
  children: PropTypes.any,
};

function mapStateToProps({ user }) {
  return {
    accessToken: user.accessToken,
  };
}

export default connect(mapStateToProps)(Apollo);