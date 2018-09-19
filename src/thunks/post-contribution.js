import { addComment } from '../actions/comment';

export const postContribution = comment => {
  return async dispatch => {
    const contribution = await jest.fn();
    console.log(contribution);
    // const comment = {...comment, ...contribution }
    dispatch(addComment(comment));
  };
};