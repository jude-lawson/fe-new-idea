export const ideaReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_IDEA':
      return {
        ...state,
        id: action.idea.id,
        title: action.idea.title,
        body: action.idea.body
      };
    default:
      return state;
  }
};