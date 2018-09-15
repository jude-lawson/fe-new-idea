export const userLoginAction = newUser => ({
  type: 'LOGIN',
  newUser
});

export const userLogOutAction = () => ({
  type: 'LOGOUT'
});