import React from 'react';
import { render } from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { withClientState } from 'apollo-link-state';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';
import { resolvers, defaults } from './resolvers';

const cache = new InMemoryCache();

//define typeDefs
const typeDefs = `
 type Task {
   id: ID!
   text: String!
   completed: Boolean!
 }
type Query {
  tasks : [Task]
}
`;
//create apollo Clint
const client = new ApolloClient({
	cache,
	//create a link using withClientState by providing resolvers, typeDefs, cache and defaults
	link: withClientState({ resolvers, defaults, typeDefs, cache })
});
render(
	// wrapp app component with ApolloProvider
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
);
