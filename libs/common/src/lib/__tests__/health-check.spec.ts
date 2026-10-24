import { healthCheck } from './../health-check';

describe('healthCheck', () => {
  it('should work', () => {
    expect(healthCheck()).toBeTruthy();
  });
});
