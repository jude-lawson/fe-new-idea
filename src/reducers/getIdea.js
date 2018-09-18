export const getIdeaReducer = (state = {}, action) =>  {
  switch (action.type) {
    case 'GET_IDEA':
      return {
        ...action.idea
      };
    default:
      return state;
  }
};