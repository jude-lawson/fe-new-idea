export const firebaseLogin = (provider, action) => {
  return async dispatch => {
    const newUser = await provider();
    dispatch(action(newUser.user));
  };
};

export const firebaseLogout = (logout, action) => {
  return async dispatch => {
    await logout();
    dispatch(action());
  };
};