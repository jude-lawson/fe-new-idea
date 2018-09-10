import { userLoginAction } from '../actions/auth';
import { githubOAuthLogin } from '../firebase/firebase';

export const firebaseLogin = () => {
  return async dispatch => {
    const newUser = await githubOAuthLogin();
    dispatch(userLoginAction(newUser.user));
  };
};

export const firebaseLogout = (logout, action) => {
  return async dispatch => {
    await logout();
    dispatch(action());
  };
};