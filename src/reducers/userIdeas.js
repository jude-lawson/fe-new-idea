export const myIdeasReducer = (state = [], action) => {
  switch (action.type) {
    case 'RETRIEVE_MY_IDEAS':
      return [
        ...state,
        ...action.ideas
      ];
    default:
      return state;
  }
};