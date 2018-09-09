import React from 'react';
import { render } from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { withClientState } from 'apollo-link-state';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';

const cache = new InMemoryCache();

//define typeDefs

//create apollo Clint

//create a link using withClientState by providing resolvers, typeDefs, cache and defaults

render(
  // wrapp app component with ApolloProvider
    <App />,
  document.getElementById('root'),
);
