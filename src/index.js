import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux-store/configureStore';
import registerServiceWorker from './registerServiceWorker';
// import { firebase } from './firebase/firebase';
// import { userLoginAction } from './actions/auth';

import AppRouter, { history } from './router/Router';

import './index.css';

const store = configureStore();

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
