import { firebaseLogin, firebaseLogout } from '../../thunks/auth'
import { userLoginAction } from '../../actions/auth';

jest.mock('../__mocks__/firebase/firebase')

describe('Auth flow thunks', () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

 test('should call firebaseLogin', async () => {
    // const thunk = firebaseLogin();
    // const actionToDispatch = userLoginAction();
    // await thunk(mockDispatch);
    // expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

 test('should call firebaseLogout', async () => {});
});
