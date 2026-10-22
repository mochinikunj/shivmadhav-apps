import type { handlers, middleware } from '@as-integrations/aws-lambda';

type RequestHandler = ReturnType<
  typeof handlers.createAPIGatewayProxyEventV2RequestHandler
>;

export const authMiddleware: middleware.MiddlewareFn<RequestHandler> = async (
  event,
) => {
  const authHeader =
    event.headers['authorization'] || event.headers['Authorization'];

  if (!authHeader) {
    // Flag the missing token on the headers so the Context file can safely throw a GraphQL Error
    event.headers['x-middleware-auth-error'] = 'MISSING_AUTHORIZATION_HEADER';
    return;
  }

  // Header is present -> Log a message and move forward
  console.log('[Middleware] Authorization header found. Proceeding...');
  return;
};
