import { userReducer } from '../../reducers/auth';
import { userLoginAction } from '../../actions/auth';

describe('user Reducer', () => {
  const id = 3;
  const name = 'New User';
  const image = 'https://some-new-url-here';
  const mockUser = {
    uid: id,
    displayName: name,
    photoURL: image
  };

  test('should return a new user', () => {
    const expected = {
      id,
      name,
      image
    };

    const result = userReducer({}, userLoginAction(mockUser));
    expect(result).toEqual(expected);
  });

  test('should return default state', () => {
    const result = userReducer({}, {});
    expect(result).toEqual({})
  });
});
