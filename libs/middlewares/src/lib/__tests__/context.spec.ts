import { context } from '../context';

describe('middlewares', () => {
  it('should work', () => {
    expect(context()).toEqual('context');
  });
});
