import { userReducer } from '../../reducers/auth';
import { userLoginAction, userLogOutAction } from '../../actions/auth';

describe('user Reducer', () => {
  const id = 3;
  const name = 'New User';
  const image = 'https://some-new-url-here';
  const email = 'some@mail.com';
  const github = 'github.com';
  const githubHandle = 'some-handle';
  const mockUser = {
    user: {
      uid: id,
      displayName: name,
      photoURL: image,
      email: email,
    },
    additionalUserInfo: {
      profile: {
        html_url: github
      },
      username: githubHandle
    }
  };

  test('should return a new user', () => {
    const expected = {
      id,
      name,
      image,
      email,
      github,
      githubHandle
    };

    const result = userReducer({}, userLoginAction(mockUser));
    expect(result).toEqual(expected);
  });

  test('should return an empty object when user logouts', () => {
    const result = userReducer({}, userLogOutAction());
    expect(result).toEqual({})
  })

  test('should return default state', () => {
    const result = userReducer({}, {});
    expect(result).toEqual({})
  });
});
