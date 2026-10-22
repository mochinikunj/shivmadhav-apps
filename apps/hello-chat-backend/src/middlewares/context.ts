import type {
  APIGatewayProxyEventV2,
  Context as LambdaContext,
} from 'aws-lambda';
import { GraphQLError } from 'graphql';

export interface ApolloLambdaContext {
  event: APIGatewayProxyEventV2;
  context: LambdaContext; // The raw AWS Lambda execution context
}

export interface UserContext {
  id: string;
  email: string;
  name: string;
}

export interface GraphQLContext {
  user: UserContext;
}

export const createContext = async (
  apolloLambdaContext: ApolloLambdaContext,
): Promise<GraphQLContext> => {
  const { event, context } = apolloLambdaContext;
  // 1. Check if the middleware flagged a missing token
  if (
    event.headers['x-middleware-auth-error'] === 'MISSING_AUTHORIZATION_HEADER'
  ) {
    throw new GraphQLError('Authorization token is required', {
      extensions: {
        code: 'UNAUTHENTICATED',
        http: { status: 401 },
      },
    });
  }

  console.log(
    `[Context] Processing request inside Lambda function: ${context.functionName}`,
  );

  // TODO: Your upcoming Firebase token validation will live here later
  return {
    user: {
      id: 'placeholder_id',
      email: 'placeholder_email',
      name: 'placeholder_name',
    },
  };
};
