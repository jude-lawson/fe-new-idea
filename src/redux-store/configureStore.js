import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { userReducer } from '../reducers/auth';

export default () => {
  const store = createStore(
    combineReducers({
      user: userReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
};