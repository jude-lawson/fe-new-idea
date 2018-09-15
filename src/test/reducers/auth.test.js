import { userReducer } from '../../reducers/auth';
import { userLoginAction } from '../../actions/auth';

describe('user Reducer', () => {
  const id = 3;
  const name = 'New User';
  const image = 'https://some-new-url-here';
  const email = 'some@mail.com'
  const mockUser = {
    user: {
      uid: id,
      displayName: name,
      photoURL: image,
      email: email
    }
  };

  test('should return a new user', () => {
    const expected = {
      id,
      name,
      image,
      email
    };

    const result = userReducer({}, userLoginAction(mockUser));
    expect(result).toEqual(expected);
  });

  test('should return default state', () => {
    const result = userReducer({}, {});
    expect(result).toEqual({})
  });
});
