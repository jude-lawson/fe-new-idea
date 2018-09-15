export const userReducer = (state = {}, action) =>  {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        id: action.newUser.user.uid,
        image: action.newUser.user.photoURL,
        name: action.newUser.user.displayName,
        email: action.newUser.user.email
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};