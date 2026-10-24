import {
  ApolloServerErrorCode,
  ApolloServerValidationErrorCode,
} from '@apollo/server/errors';

// Add new error codes only here in CUSTOM_ERROR_CODES enum
enum CUSTOM_ERROR_CODES {
  MISSING_AUTH_HEADER = 'MISSING_AUTHORIZATION_HEADER',
  UNAUTHENTICATED = 'UNAUTHENTICATED',
  FORBIDDEN = 'FORBIDDEN',
}

// (DON'T UPDATE THIS TYPE) ERROR_CODES_TYPE can be used as an error type
export type ERROR_CODES_TYPE =
  | ApolloServerErrorCode
  | ApolloServerValidationErrorCode
  | CUSTOM_ERROR_CODES;

// (DON'T UPDATE THIS CONST) ERROR_CODES can be used as an error value
export const ERROR_CODES = {
  ...ApolloServerErrorCode,
  ...ApolloServerValidationErrorCode,
  ...CUSTOM_ERROR_CODES,
};

/**
 * ERROR_MESSAGES can be used to provide description to error codes
 * Add new error messages only here in ERROR_MESSAGES const
 */
export const ERROR_MESSAGES = {
  [ERROR_CODES.MISSING_AUTH_HEADER]: 'Authorization token is required.',
  [ERROR_CODES.FORBIDDEN]: 'You are not authorized to perform this action.',
};
