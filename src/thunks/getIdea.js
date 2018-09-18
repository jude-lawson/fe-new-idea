import { getIdeaAction } from '../actions/getIdea';
import { getIdea } from '../api-calls/api-calls';

export const getIdeaById = id => {
  return async dispatch => {
    const idea = await getIdea(id);
    dispatch(getIdeaAction(idea));
  };
};