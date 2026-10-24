import { ERROR_CODES } from '../error-codes';

describe('errors', () => {
  it('should work', () => {
    expect(ERROR_CODES.MISSING_AUTH_HEADER).not.toEqual(
      ERROR_CODES.UNAUTHENTICATED,
    );
  });
});
