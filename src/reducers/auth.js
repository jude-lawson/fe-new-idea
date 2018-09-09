export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        id: action.user.uid,
        image: action.user.photoURL,
        name: action.user.displayName
      };
    default:
      return state;
  }
};