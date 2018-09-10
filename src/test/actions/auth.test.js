import { userLoginAction } from '../../actions/auth';

describe('userLoginAction', () => {
  const id = 1;
  const name = 'Steve';
  const image = 'some-url';
  const mockFirebaseResponse = {
    uid: id,
    displayName: name,
    photoURL: image
  };

 test('should have a type of LOGIN', () => {
  const expected = {
    type: 'LOGIN',
    user: {
      ...mockFirebaseResponse
    }
  };

  const result = userLoginAction(mockFirebaseResponse);
  expect(result).toEqual(expected)
 });
});
