import { userLoginAction, userLogOutAction } from '../actions/auth';
import { githubOAuthLogin, logout } from '../firebase/firebase';

export const firebaseLogin = () => {
  return async dispatch => {
    const newUser = await githubOAuthLogin();
    dispatch(userLoginAction(newUser));
  };
};

export const firebaseLogout = () => {
  return async dispatch => {
    await logout();
    dispatch(userLogOutAction());
  };
};