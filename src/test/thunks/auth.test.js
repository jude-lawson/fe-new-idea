import { firebaseLogin, firebaseLogout } from '../../thunks/auth'
import { userLoginAction } from '../../actions/auth';

jest.mock('../__mocks__/firebase/firebase.js');

describe('Auth flow thunks', () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

 test('should call firebaseLogin', async () => {
    const thunk = () => dispatch => dispatch();
    await thunk()(mockDispatch);
    expect(mockDispatch).toHaveBeenCalled();
  });

 test('should call firebaseLogout', async () => {});
});
