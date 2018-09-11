import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { userReducer } from '../reducers/auth';
import { ideaReducer } from '../reducers/ideas';

export default () => {
  const store = createStore(
    combineReducers({
      user: userReducer,
      ideas: ideaReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
};