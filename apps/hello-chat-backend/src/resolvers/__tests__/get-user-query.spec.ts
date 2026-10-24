import { getUser } from '../get-user-query';

describe('getUser', () => {
  it('Should get user', () => {
    expect(getUser()).toBeTruthy();
  });
});
