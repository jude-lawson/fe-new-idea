import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { userReducer } from '../reducers/auth';
import { ideaReducer } from '../reducers/ideas';
import { allIdeasReducer } from '../reducers/allIdeas';
import { commentReducer } from '../reducers/comments';
import { getIdeaReducer } from '../reducers/getIdea';
import { myIdeasReducer } from '../reducers/userIdeas';

export default () => {
  const store = createStore(
    combineReducers({
      user: userReducer,
      ideas: ideaReducer,
      allIdeas: allIdeasReducer,
      comments: commentReducer,
      idea: getIdeaReducer,
      myIdeas: myIdeasReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
};