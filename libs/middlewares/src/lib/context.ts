import { HEADERS } from '@shivmadhav-apps/configs';
import { AuthenticationError, ERROR_CODES } from '@shivmadhav-apps/errors';
import type {
  APIGatewayProxyEventV2,
  Context as LambdaContext,
} from 'aws-lambda';

interface ApolloLambdaContext {
  event: APIGatewayProxyEventV2;
  context: LambdaContext; // The raw AWS Lambda execution context
}

interface UserContext {
  id: string;
  email: string;
  name: string;
}

interface GraphQLContext {
  user: UserContext;
}

export const createContext = async (
  apolloLambdaContext: ApolloLambdaContext,
): Promise<GraphQLContext> => {
  const { event } = apolloLambdaContext;

  // 1. Throw error if the middleware flagged a missing token
  if (event.headers[HEADERS.AUTH_ERROR] === ERROR_CODES.MISSING_AUTH_HEADER) {
    throw new AuthenticationError();
  }

  // TODO: Your upcoming Firebase token validation will live here
  return {
    user: {
      id: 'placeholder_id',
      email: 'placeholder_email',
      name: 'placeholder_name',
    },
  };
};

export function context(): string {
  return 'context';
}
