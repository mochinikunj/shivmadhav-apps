import type { handlers, middleware } from '@as-integrations/aws-lambda';
import { HEADERS } from '@shivmadhav-apps/configs';
import { ERROR_CODES } from '@shivmadhav-apps/errors';

type RequestHandler = ReturnType<
  typeof handlers.createAPIGatewayProxyEventV2RequestHandler
>;

export const authMiddleware: middleware.MiddlewareFn<RequestHandler> = async (
  event,
) => {
  const authHeader =
    event.headers[HEADERS.AUTH_SMALL] || event.headers[HEADERS.AUTH];
  if (!authHeader) {
    // Flag the missing auth header so the context file can throw a graphql error
    event.headers[HEADERS.AUTH_ERROR] = ERROR_CODES.MISSING_AUTH_HEADER;
    return;
  }
};

export function middlewares(): string {
  return 'middlewares';
}
