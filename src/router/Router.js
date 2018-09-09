import React from 'react';
import { Router, Route, Switch  } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { App } from '../Components/App/App';

export const history = createHistory();

export const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={App}/>
    </Switch>
  </Router>
);

export default AppRouter;