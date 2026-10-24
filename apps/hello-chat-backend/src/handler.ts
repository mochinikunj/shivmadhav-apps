import { ApolloServer } from '@apollo/server';
import { typeDefs, resolvers } from './graphql';
import { ENVIRONMENTS } from '@shivmadhav-apps/configs';
import { getGraphQLHandler } from '@shivmadhav-apps/middlewares';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: process.env.NODE_ENV !== ENVIRONMENTS.PROD,
});

export const graphqlHandler = getGraphQLHandler(server);
