import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';

import { Provider } from 'react-redux';
import configureStore from './redux-store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
