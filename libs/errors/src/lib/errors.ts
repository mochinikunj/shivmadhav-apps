import { GraphQLError } from 'graphql';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import { ERROR_CODES, ERROR_CODES_TYPE, ERROR_MESSAGES } from './error-codes';

export class ShivMadhavError extends GraphQLError {
  constructor(message: string, code: ERROR_CODES_TYPE, status: StatusCodes) {
    super(message, { extensions: { code, http: { status } } });
  }
}

export class InternalServerError extends ShivMadhavError {
  constructor() {
    const statusCodes = StatusCodes.INTERNAL_SERVER_ERROR;
    super(
      getReasonPhrase(statusCodes),
      ERROR_CODES.INTERNAL_SERVER_ERROR,
      statusCodes,
    );
  }
}

export class AuthenticationError extends ShivMadhavError {
  constructor() {
    super(
      ERROR_MESSAGES[ERROR_CODES.MISSING_AUTH_HEADER],
      ERROR_CODES.UNAUTHENTICATED,
      StatusCodes.UNAUTHORIZED,
    );
  }
}
