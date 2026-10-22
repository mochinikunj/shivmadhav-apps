import { ApolloServer } from '@apollo/server';
import {
  startServerAndCreateLambdaHandler,
  handlers,
} from '@as-integrations/aws-lambda';
import { typeDefs, resolvers } from './graphql';
import { ENVIRONMENTS } from './configs';
import { authMiddleware, createContext } from './middlewares';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: process.env.NODE_ENV !== ENVIRONMENTS.PROD,
});

export const graphqlHandler = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventV2RequestHandler(),
  {
    middleware: [authMiddleware],
    context: createContext,
  },
);
