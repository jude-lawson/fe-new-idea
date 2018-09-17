import { getAllIdeasAction } from '../actions/ideasAll';
import { getIdeas } from '../api-calls/api-calls';

export const getAllIdeas = () => {
  return async dispatch => {
    const ideas = await getIdeas();
    dispatch(getAllIdeasAction(ideas));
  };
};