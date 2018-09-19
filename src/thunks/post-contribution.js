import { addComment } from '../actions/comment';
import { postContributionToDb } from '../api-calls/api-calls';

export const postContribution = (comment, id = 6) => {
  return async dispatch => {

    const contribution = await postContributionToDb(comment, id);
    // console.log(contribution);
    // const comment = {...comment, ...contribution }
    dispatch(addComment(comment));
  };
};