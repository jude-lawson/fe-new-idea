import React from 'react';
import { Router, Route, Switch  } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

export const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact />
    </Switch>
  </Router>
);