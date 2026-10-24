import { ENVIRONMENTS } from './configs';

describe('configs', () => {
  it('should work', () => {
    expect(ENVIRONMENTS.DEV).not.toEqual(ENVIRONMENTS.PROD);
  });
});
