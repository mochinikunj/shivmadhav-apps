import type { ApolloServer, BaseContext } from '@apollo/server';
import {
  startServerAndCreateLambdaHandler,
  handlers,
} from '@as-integrations/aws-lambda';
import { authMiddleware } from './middlewares';
import { createContext } from './context';

export const getGraphQLHandler = (server: ApolloServer<BaseContext>) => {
  return startServerAndCreateLambdaHandler(
    server,
    handlers.createAPIGatewayProxyEventV2RequestHandler(),
    {
      middleware: [authMiddleware],
      context: createContext,
    },
  );
};
