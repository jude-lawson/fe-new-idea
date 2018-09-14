import { firebaseLogin, firebaseLogout } from '../../thunks/auth'
import { userLoginAction, userLogOutAction } from '../../actions/auth';

jest.mock('../../firebase/firebase')

describe('Auth flow thunks', () => {
  let mockDispatch;
  const mockUser = {
    user: {
      uid: 3,
      displayName: 'New User',
      photoURL: 'https://some-new-url-here'
    }
  }

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

 test('should call firebaseLogin', async () => {
    const thunk = firebaseLogin();
    const actionToDispatch = await userLoginAction(mockUser);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalled();
  });

 test('should call firebaseLogout', async () => {
    const thunk = firebaseLogout();
    const actionToDispatch = await userLogOutAction(mockUser);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
 });
});
