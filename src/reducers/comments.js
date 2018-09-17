export const commentReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        action.comment
      ];
    default:
      return state;
  }
};